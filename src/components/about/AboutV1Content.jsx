import Image from 'next/image';
import React from 'react';
import SingleProgress from './SingleProgress';
import SingleAboutV1 from './SingleAboutV1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import AboutV1Data from '../../../public/assets/jsonData/about/AboutV1Data.json'
import AboutProgressData from '../../../public/assets/jsonData/about/AboutProgressData.json'
import sectionShape from '@/public/assets/images/about/section-shape.png'

import logo from '@/public/assets/images/contact-logo.png'

const AboutV1Content = () => {
    return (
        <>
            <div className="section-title">
                <div className="section-main-title about">
                    <h2>Introducing Contact</h2>
                    <h2>Building Services</h2>
                </div>
            </div>
            <div className="about-content animate__animated animate__slideInUp">
                <div className="about-discribtion">
                <p className="text-muted">
                    With over 15 years of hands-on experience, Contact Building Services is your trusted partner for renovations, handyman work, and building maintenance across Sydney.
                </p>
                <p className="text-muted">
                    Our team is made up of seasoned professionals who have worked in both residential and commercial spaces. We bring craftsmanship, reliability, and a deep understanding of Sydney’s unique building regulations.
                </p>
                <p className="text-muted">
                    From fixing minor issues to handling full renovations, we’re here to make property upkeep stress-free and professional.
                </p>
                <p className="text-muted mt-4">
                    Our reputation is built on honesty, consistency, and results. Every job we take on is backed by real experience and a strong commitment to quality. We&apos;re fully insured, compliant with local regulations, and always clear about our pricing and timelines.
                </p>
                <div
                    className="contact-sticker my-4 p-3 rounded-5 d-flex align-items-center gap-3"
                    >
                    <Image
                        src={logo}
                        alt="logo"
                        width={160}
                        className="align-self-start"
                    />
                    <p className="mb-0 m-0" style={{ fontSize: '0.7rem', fontStyle: 'italic', lineHeight: '1.5', color: '#bcbcbc' }}>
                        Sydney’s Trusted Handyman Team – <span className="fw-medium"> Honest, Skilled, Reliable</span>.
                    </p>
                </div>

            </div>

                {/* <div className="process-ber-plugin">
                    <div className="progress-items">
                        {AboutProgressData.map(progress =>
                            <SingleProgress progress={progress} key={progress.id} />
                        )}
                    </div>
                </div> */}
                {/* <div className="row">
                    {AboutV1Data.map(about =>
                        <div className="col-lg-6 col-md-6" key={about.id}>
                            <SingleAboutV1 about={about} />
                        </div>
                    )}
                </div> */}
                {/* <div className="eulding-btn about">
                    <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                </div> */}
            </div>
        </>
    );
};

export default AboutV1Content;