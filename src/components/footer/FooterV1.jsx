import React from 'react';
import footerLogo from '@/public/assets/images/contact-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import FooterProject from '../../../public/assets/jsonData/footer/FooterProject.json'
import FooterServices from '../../../public/assets/jsonData/footer/FooterServices.json'
import FooterLinks from '../../../public/assets/jsonData/footer/FooterLinks.json'
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const FooterV1 = () => {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-wiget animate__animated animate__zoomIn" >
                                <div className="footer-wiget-logo">
                                    <Link href="/" onClick={handleSmoothScroll}>
                                        <Image src={footerLogo} alt="image" height="50"/>
                                    </Link>
                                </div>
                                <div className="footer-wiget-text">
                                    <p>Contact Building Services is a Sydney-based local company with over 15 years of experience in painting and handyman work. We&apos;re proud to offer reliable, high-quality services backed by a team of skilled and dedicated craftsmen.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-wiget animate__animated animate__slideInDown" >
                                <div className="footer-wiget-title">
                                    <h4>{FooterServices.title}</h4>
                                </div>
                                <div className="footer-wiget-menu">
                                    <ul className='p-0'>
                                        {FooterServices.serviceData.map(service =>
                                            <li key={service.id}><Link href={service.link}>{service.serviceText}</Link></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-wiget animate__animated animate__slideInDown" >
                                <div className="footer-wiget-title">
                                    <h4>{FooterLinks.title}</h4>
                                </div>
                                <div className="footer-wiget-menu">
                                    <ul className='p-0'>
                                        {FooterLinks.linkData.map(data =>
                                            <li key={data.id}><Link href={data.link}>{data.linkText}</Link></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 pr-0">
                            <div className="foter-box">
                                <div className="footer-wiget-title">
                                    <h4>Contact Us</h4>
                                </div>
                                {/* <div className="row"> */}
                                    <ul className="list-unstyled text-white p-0">
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="bi bi-envelope-fill me-2"></i>
                                            <span>info@contact.buildingservices.com.au</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <i className="bi bi-telephone-fill me-2"></i>
                                            <span>1300 513 529</span>
                                        </li>
                                        <li className='d-flex mb-3'>
                                            <i className="bi bi-geo me-2"></i>
                                            <div className="company-location d-flex flex-column">
                                                <span>10 - 14 Hardie street, </span>
                                                <span>Neutral Bay 2089</span>
                                            </div>
                                        </li>
                                        <li className='mb-3'>
                                            <div className="footer-wiget-social">
                                                <ul className='p-0'>
                                                    <SocialShare />
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                         <p className="text-center text-white">&copy; {new Date().getFullYear()} contactbuildingservices.com.au. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterV1;