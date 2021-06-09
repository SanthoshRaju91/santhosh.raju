import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
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
          <motion.div
            whileHover={{x: 10}}
            className="site-blogs__archive--link"
          >
            <h5>Check Archive</h5>
            <motion.img
              src="/arrow_right.svg"
              alt="Direction to about"
              width="32"
              height="32"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
