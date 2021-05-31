import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Card} from './Card'
import {Blog} from '../../types'

export interface BlogsParam {
  data: Blog[]
}

export const Blogs = ({data}: BlogsParam) => {
  return (
    <div className="site-blogs">
      <div className="site-blogs__list">
        {data.map((blog: Blog, index: number) => (
          <Card
            key={index}
            position={index % 2 === 0 ? 'left' : 'right'}
            title={blog.data.title}
            description={blog.data.description}
            preview={blog.data.preview}
            published={blog.data.published}
            slug={blog.data.slug}
            author={blog.data.author}
            authorImage={blog.data.authorImage}
          />
        ))}
      </div>

      <div className="site-blogs__archive">
        <Link href="/">
          <div className="site-blogs__archive--link">
            <h4>Check Archive</h4>
            <Image
              src="/arrow_right.svg"
              alt="Direction to about"
              width="32"
              height="32"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
