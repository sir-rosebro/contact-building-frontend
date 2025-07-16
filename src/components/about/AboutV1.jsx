import Image from 'next/image'
import React from 'react'
import aboutThumb from '@/public/assets/images/about/standing-man.png'
import aboutShape from '@/public/assets/images/about/about-paint.png'
import AboutV1Content from './AboutV1Content'

const AboutV1 = ({ aboutClass }) => {
    return (
        <>
            <div className={`about-area animate__animated animate__slideInUp ${aboutClass}`}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                            <AboutV1Content />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-thumb animate__animated animate__slideInUp">
                                <Image src={aboutThumb} alt="image" />
                                <div className="about-shape">
                                    <Image src={aboutShape} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;