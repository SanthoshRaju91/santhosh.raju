import React from 'react'
import Link from 'next/link'

export interface CardParams {
  position: 'left' | 'right'
  title: string
  description: string
  preview: string
  published: string
  slug: string
  author: string
  authorImage: string
}

export const Card = ({
  position,
  title,
  description,
  preview,
  published,
  slug,
  author,
  authorImage,
}: CardParams) => {
  return (
    <div className={`blog-card ${position}`}>
      <Link href={`/${slug}`}>
        <div className={`blog-card__container ${position}`}>
          <div className="blog-card__container--preview">
            <img src={preview} alt="Preview" />
          </div>
          <div className="blog-card__container--content">
            <div className="container">
              <h1>{title}</h1>
              <div className="divider"></div>
              <div className="published">
                <div className="published-author">
                  <img src={authorImage} alt="Author" />
                  <h5>{author}</h5>
                </div>
                <div className="published-on">
                  <span>Published: </span>
                  <h4>{published}</h4>
                </div>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
