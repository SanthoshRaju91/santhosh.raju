import React from 'react'
import Image from 'next/image'

export const Banner = () => {
    return (
        <div className="site-banner">
            <div className="site-banner__hero-info">
                <h1>Build. Blog. Share</h1>
                <p>Sharing my experience of being a Dev via blogs and bit of my life experiences.</p>
            </div>
            <div className="site-banner__divider"></div>
        </div>
    )
}