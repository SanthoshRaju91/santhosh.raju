import React from 'react'
import Image from 'next/image'

export interface CardParams {
    position: 'left' | 'right',
    title: string
    description: string
    preview: string
    published: string
}

export const Card = ({position, title, description, preview, published}: CardParams) => {
    return (
        <div className={`blog-card ${position}`}>
            <div className={`blog-card__container ${position}`}>
                <div className="blog-card__container--preview">
                    <Image src={preview} alt="Preview" layout="fixed" width="275" height="175" />
                </div>
                <div className="blog-card__container--content">
                    <div className="container">
                        <h1>{title}</h1>
                        <div className="divider"></div>
                        <div className="published-on">
                            <span>Published: </span>
                            <h4>{published}</h4>                            
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}