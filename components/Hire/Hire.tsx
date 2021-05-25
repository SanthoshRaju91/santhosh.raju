import React from 'react'
import Image from 'next/image'

export const Hire = () => {
    return (
        <div className="site-hire">
            <div className="site-hire__container">
                <div className="site-hire__container--action">
                    <h1>Want to hire a freelance team or a freelancer ?</h1>
                    <button>
                        Contact Now
                    </button>
                </div>
                <div className="site-hire__container--specialise">
                    <h4>We specialise in</h4>
                    <ul>
                        <li>
                            <div className="site-hire__container--specialise-item">
                                <Image src="/radio.svg" alt="Radio Icon" width="24" height="24" />
                                <h4>Product Digitization</h4>
                            </div>
                        </li>
                        <li>
                            <div className="site-hire__container--specialise-item">
                                <Image src="/radio.svg" alt="Radio Icon" width="24" height="24" />
                                <h4>Web Development</h4>
                            </div>
                        </li>
                        <li>
                            <div className="site-hire__container--specialise-item">
                                <Image src="/radio.svg" alt="Radio Icon" width="24" height="24" />
                                <h4>Mobile Development</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}