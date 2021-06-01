import React from 'react'
import Link from 'next/link'

export interface CardParams {
  title: string
  description: string
  preview: string
  published: string
  slug: string
  author: string
  authorImage: string
}

export const Card = ({
  title,
  description,
  preview,
  published,
  slug,
  author,
  authorImage,
}: CardParams) => {
  return (
    <div className="blog-card">
      <Link href={`/${slug}`}>
        <div className="blog-card__container">
          <div className="blog-card__container--preview">
            <img src={preview} alt="Preview" />
          </div>
          <div className="blog-card__container--content">
            <div className="blog-card__container--content-title">
              <h4>{title}</h4>
            </div>

            <div className="blog-card__container--content-published">
              <div className="published-author">
                <img src={authorImage} alt="Author" />
                <p>{author}</p>
              </div>
              <div className="published-on">
                <span>Published: </span>
                <p>{published}</p>
              </div>
            </div>

            <div className="blog-card__container--content-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
