'use client';

import React from 'react';
import serviceDetails1 from '@/public/assets/images/service/waterproofing.png';
import Image from 'next/image';
import CategoriesWidget from '../widgets/CategoriesWidget';
import './ServiceDetailsContent.css';
import BeforeAfterSlider from '../BeforeAndAfterSlider';
import BeforeImage from '@/public/assets/images/service/waterproofing_before.jpg';
import AfterImage from '@/public/assets/images/service/waterproofing_after.jpg';
import SingleFaqV1 from '../faq/SingleFaqV1';
import CTABlock from './CTABlock';


const faqData = [
    {
      "id": 1,
      "accordionId": "headingOne",
      "dataBsTarget": "collapseOne",
      "title": "How Can I Prevent Basement Flooding in Sydney?",
      "activeClass": "",
      "bodyText": "Sydney’s wet seasons can flood basements, especially in areas like the Inner West or Sutherland Shire. Our basement waterproofing Sydney services include sump pumps, drainage systems, and sealants. Call 1300 513 529 for a free inspection.",
      "btnClass": "",
      "ariaExpanded": ""
    },
    {
      "id": 2,
      "accordionId": "headingTwo",
      "dataBsTarget": "collapseTwo",
      "title": "What’s the Cost of Waterproofing in Sydney?",
      "activeClass": "",
      "bodyText": "Costs vary based on project size, from bathroom sealing to foundation repairs. Contact our waterproofing contractors in Sydney at 1300 513 529 for a free, tailored quote.",
      "btnClass": "",
      "ariaExpanded": ""
    },
    {
      "id": 3,
      "accordionId": "headingThree",
      "dataBsTarget": "collapseThree",
      "title": "Why Is Waterproofing Essential in Sydney?",
      "activeClass": "",
      "bodyText": "Sydney’s humidity and storms put properties at risk of water damage. Our solutions protect foundations, walls, and interiors, saving you from costly repairs across suburbs like Manly and Penrith.",
      "btnClass": "",
      "ariaExpanded": ""
    }
  ]

const ServiceDetailsContent = () => {
    return (
        <div className="service-details-area animate__animated animate__slideInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-single-box">
                                    <div className="service-details-thumb mb-5">
                                        <Image
                                            src={serviceDetails1}
                                            alt="Professional waterproofing services in Sydney by Contact Building Services"
                                            className="img-fluid rounded shadow-sm"
                                            priority
                                        />
                                    </div>
                                    <div className="service-details-content">
                                        <h1 className="main-heading">Premier Waterproofing Services in Sydney</h1>
                                        <p>
                                            Welcome to <strong>Contact Building Services</strong>, Sydney’s trusted experts in <strong>waterproofing services</strong> for over <strong>15 years</strong>. With <strong>1000 projects completed</strong> and <strong>150+ happy clients</strong> across Bondi, Parramatta, North Shore, and beyond, we protect your home or business from Sydney’s heavy rains and coastal humidity. Call <strong>1300 513 529</strong> for a free quote and keep your property dry!
                                        </p>
                                        <p>
                                            Our Sydney-based team uses advanced techniques like membrane coatings, epoxy injections, and eco-friendly sealants to prevent leaks, mould, and structural damage. From basements to rooftops, we deliver tailored solutions for homes, offices, and industrial sites across Greater Sydney.
                                        </p>
                                        <ul className="list-unstyled service-list">
                                            <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: 'var(--theme-color);' }}></i>Basement and foundation waterproofing</li>
                                            <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: 'var(--theme-color);' }}></i>Rooftop and terrace membranes</li>
                                            <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: 'var(--theme-color);' }}></i>Bathroom and wet area sealing</li>
                                            <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: 'var(--theme-color);' }}></i>Foundation crack repairs</li>
                                            <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: 'var(--theme-color);' }}></i>External wall and balcony protection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="service-details-single-box mb-10">
                                    <div className="service-details-thumb">
                                        <BeforeAfterSlider imageOne={BeforeImage} imageTwo={AfterImage} />
                                    </div>
                                    <div className="service-details-content mt-4">
                                        <h2 className="section-heading">Why Choose Contact Building Services?</h2>
                                        <p>
                                            As a <strong>Sydney-based</strong> waterproofing leader, we’ve completed <strong>1000 projects</strong> with a focus on quality and customer satisfaction. Our licensed contractors use Australian-made materials designed for Sydney’s climate, ensuring durability and peace of mind.
                                        </p>
                                        <p>
                                            We offer free inspections, transparent pricing, and minimal disruption. From leaky basements in Chatswood to rooftops in the CBD, our solutions add value to your property. Check out our <strong>before and after slider</strong> above to see the transformation!
                                        </p>
                                        <p>
                                            With <strong>150+ happy clients</strong> and a 5-star reputation, we’re the go-to <strong>waterproofing contractors in Sydney</strong>. Call <strong>1300 513 529</strong> or <a href="/contact">request a free quote</a> today!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 achivement">
                                <div className="service-details-single-box">
                                    <div className="service-details-content">
                                        <h2 className="section-heading">Our Sydney Waterproofing Achievements</h2>
                                        <div className="stats-section row text-center">
                                            <div className="col-md-4 stat-item">
                                                <h3 className="stat-number">15+</h3>
                                                <p>Years Serving Sydney</p>
                                            </div>
                                            <div className="col-md-4 stat-item">
                                                <h3 className="stat-number">1000</h3>
                                                <p>Projects Completed</p>
                                            </div>
                                            <div className="col-md-4 stat-item">
                                                <h3 className="stat-number">150+</h3>
                                                <p>Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="service-details-single-box">
                                    <div className="service-details-content faq-area mt-4">
                                        <h2 className="section-heading">Frequently Asked Questions</h2>
                                        <div className="accordion" id="accordionExample">
                                            {faqData.map(faq =>
                                                <SingleFaqV1 faq={faq} key={faq.id} />
                                            )}
                                        </div>
                                        {/* <div className="faq-item mb-3">
                                            <h3 className="faq-heading">How Can I Prevent Basement Flooding in Sydney?</h3>
                                            <p>
                                                Sydney’s wet seasons can flood basements, especially in areas like the Inner West or Sutherland Shire. Our <strong>basement waterproofing Sydney</strong> services include sump pumps, drainage systems, and sealants. Call <strong>1300 513 529</strong> for a free inspection.
                                            </p>
                                        </div>
                                        <div className="faq-item mb-3">
                                            <h3 className="faq-heading">What’s the Cost of Waterproofing in Sydney?</h3>
                                            <p>
                                                Costs vary based on project size, from bathroom sealing to foundation repairs. Contact our <strong>waterproofing contractors in Sydney</strong> at <strong>1300 513 529</strong> for a free, tailored quote.
                                            </p>
                                        </div>
                                        <div className="faq-item">
                                            <h3 className="faq-heading">Why Is Waterproofing Essential in Sydney?</h3>
                                            <p>
                                                Sydney’s humidity and storms put properties at risk of water damage. Our solutions protect foundations, walls, and interiors, saving you from costly repairs across suburbs like Manly and Penrith.
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 mt-30 mt-lg-0">
                        <CategoriesWidget />
                        <CTABlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsContent;