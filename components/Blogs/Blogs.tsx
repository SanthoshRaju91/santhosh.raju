import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Card} from './Card'


export interface BlogsParam {

}

export const Blogs = (props: BlogsParam) => {
    return (
        <div className="site-blogs">
            <div className="site-blogs__list">
                <Card 
                    position="left" 
                    title="Podcast-Equipment: Best one’s under Rs 1000" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies arcu, leo consectetur et." 
                    preview="/unsplash.jpg"
                    published="25-05-2021"
                />
                <Card 
                    position="right" 
                    title="Podcast-Equipment: Best one’s under Rs 1000" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies arcu, leo consectetur et." 
                    preview="/unsplash.jpg"
                    published="25-05-2021"
                />
                <Card 
                    position="left" 
                    title="Podcast-Equipment: Best one’s under Rs 1000" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies arcu, leo consectetur et." 
                    preview="/unsplash.jpg"
                    published="25-05-2021"
                />
                <Card 
                    position="right" 
                    title="Podcast-Equipment: Best one’s under Rs 1000" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies arcu, leo consectetur et." 
                    preview="/unsplash.jpg"
                    published="25-05-2021"
                />
            </div>

            <div className="site-blogs__archive">
                <Link href="/">
                    <div className="site-blogs__archive--link">
                        <h4>Check Archive</h4>
                        <Image src="/arrow_right.svg" alt="Direction to about" width="32" height="32" />
                    </div>
                </Link>
            </div>
        </div>
    )
}