"use client"
import React from 'react';
import ContactFormV2 from '../form/ContactFormV2';

const ContactContent = () => {
    return (
        <>
            <div className="contact-us-area">
                <div className="container">
                    <div className='mb-5'>
                        <h1 className="display-5 fw-bold text-dark">Contact the Best Handyman Services in Sydney</h1>
                        <p className="mb-4 lead text-muted mt-5">
                            Looking for reliable <strong>waterproofing</strong>, <strong>general repairs</strong>, or <strong>handyman painting</strong> in Sydney? You've come to the right place.
                            We offer <strong>5-star handyman services</strong> across the Northern Beaches and Greater Sydney, tailored to your unique property needs.
                        </p>
                    </div>
                    <div className="contact row gap-5 d-flex justify-content-between position-relative overflow-hidden">
                        <div className="contact-left col-lg-5 d-flex flex-column justify-content-between">
                            <div className="contact-benefits mt-4">
                                <h5 className="fw-bold mb-3">Why Choose Us?</h5>
                                <ul className="list-unstyled">
                                    <li className="row mb-3 align-items-center">
                                        <span className="col-lg-2 contact-icon-span">
                                            <i className="bi bi-check"></i> 
                                        </span>
                                        <p className='col-lg-10 lead text-muted mb-0'>Long-lasting waterproofing backed by warranty</p>
                                    </li>
                                <li className="row mb-3 align-items-center">
                                    <span className="col-lg-2 contact-icon-span">
                                        <i className="bi bi-check"></i> 
                                    </span>
                                    <p className='col-lg-10 lead text-muted mb-0'>Affordable handyman services for homes & businesses</p>
                                </li>
                                <li className="row mb-3 align-items-center">
                                    <span className="col-lg-2 contact-icon-span">
                                        <i className="bi bi-check"></i> 
                                    </span>
                                    <p className='col-lg-10 lead text-muted mb-0'>Free site inspections and no-obligation quotes</p>
                                </li>
                                <li className="row mb-3 align-items-center">
                                     <span className="col-lg-2 contact-icon-span">
                                        <i className="bi bi-check"></i> 
                                    </span>
                                    <p className='col-lg-10 lead text-muted mb-0'>Emergency repairs available 24/7</p>
                                </li>
                                </ul>
                            </div>
                            <div className='row theme-box'>
                                <div className="contact-single-box d-flex justify-content-left align-items-center mb-3">
                                    <div className="contact-icon">
                                        <span>
                                            <i className="bi bi-telephone"></i>
                                        </span>
                                    </div>
                                    <div className="contact-content fs-6">
                                        <a href="tel:012-345-6789" className='fw-medium text-white'>1300 513 529</a>
                                    </div>
                                </div>
                                <div className="contact-single-box d-flex justify-content-left align-items-center mb-3">
                                    <div className="contact-icon">
                                            <span>
                                            <i className="bi bi-envelope-open"></i>
                                        </span>
                                    </div>
                                    <div className="contact-content fs-6">
                                        <a href="mailto:inquiry@example.com" className='fw-medium text-white'>inquiry@contactbuildingservices.com.au</a>
                                    </div>
                                </div>
                                <div className="contact-single-box two d-flex justify-content-left align-items-center mb-3">
                                    <div className="contact-icon">
                                        <span>
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                    </div>
                                    <div className="contact-content text-start fw-medium">
                                        <span>10 - 14 Hardie Street</span>
                                        <span>Neutral Bay 2089 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                        className="d-none d-md-block position-absolute top-50"
                        style={{
                            left: '47%',
                            transform: 'translateY(-50%)',
                            width: '1px',
                            height: '70%',
                            backgroundColor: '#efefef',
                            zIndex: 1,
                            padding: 0,
                        }}
                        ></div>
                        <div className="contact-box col-lg-6">
                            <div className="contact-title">
                                <h2 style={{ textAlign: 'left' }}>Have be any question?</h2>
                                <h2 style={{ textAlign: 'left' }}>feel free to Contact</h2>
                            </div>
                            <div className="orange-circle"></div> 
                            <ContactFormV2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-10' style={{ height: '30rem', background: '#fae8db' }}></div>
        </>
    );
};

4,2, 1,3

export default ContactContent;