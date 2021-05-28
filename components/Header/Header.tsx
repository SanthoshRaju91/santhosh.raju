import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="site-header">            
            <div className="site-header__logo">
                <Link href="/">
                    <Image src="/Logo.svg" alt="Site Logo" width="200" height="40" />
                </Link>
            </div>

            <div className="site-header__action">
                <Link href="/about">
                    <div className="site-header__action--content">
                        <a>Say hello</a>
                        <Image src="/arrow_right.svg" alt="Direction to about" width="32" height="32" />
                    </div>
                </Link>
            </div>            
        </header>
    )
}
