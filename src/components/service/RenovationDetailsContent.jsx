'use client';

import React from 'react';
import kitchenImage from '@/public/assets/images/service/renovation_cover.jpg';
import BeforeImage from '@/public/assets/images/service/before_renovation.jpg';
import AfterImage from '@/public/assets/images/service/after_renovation.jpg';
import Image from 'next/image';
import CategoriesWidget from '../widgets/CategoriesWidget';
import './ServiceDetailsContent.css';
import BeforeAfterSlider from '../BeforeAndAfterSlider';
import SingleFaqV1 from '../faq/SingleFaqV1';
import CTABlock from './CTABlock';

const faqData = [
  {
    id: 1,
    accordionId: 'headingOne',
    dataBsTarget: 'collapseOne',
    title: 'How long does a kitchen renovation take in Sydney?',
    bodyText: 'Most kitchen renovations are completed in 3–4 weeks depending on the scope. Contact us for a personalised quote and timeline.',
  },
  {
    id: 2,
    accordionId: 'headingTwo',
    dataBsTarget: 'collapseTwo',
    title: 'Do you help with kitchen design?',
    bodyText: 'Yes, we offer end-to-end services including layout planning, 3D design, fixture recommendations, and full installation.',
  },
  {
    id: 3,
    accordionId: 'headingThree',
    dataBsTarget: 'collapseThree',
    title: 'Can you work within my budget?',
    bodyText: 'Absolutely. We tailor kitchen renovation packages to match your style, needs, and budget — without compromising on quality.',
  },
];

const ServiceDetailsKitchen = () => {
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
                      src={kitchenImage}
                      alt="Custom kitchen renovation in Sydney by Contact Building Services"
                      className="img-fluid rounded shadow-sm"
                      priority
                    />
                  </div>
                  <div className="service-details-content">
                    <h1 className="main-heading">Custom Kitchen Renovations in Sydney</h1>
                    <p>
                      At <strong>Contact Building Services</strong>, we’ve completed over <strong>200 kitchen renovations</strong> across Sydney — transforming outdated spaces into functional, modern kitchens. Whether you’re in Bondi, Chatswood, or Western Sydney, we bring 15+ years of craftsmanship and innovation to every project.
                    </p>
                    <p>
                      Our Sydney-based team handles everything from 3D design and layout planning to cabinetry, benchtops, and electricals. With quality Australian materials and certified trades, we guarantee a stress-free kitchen upgrade experience.
                    </p>
                    <ul className="list-unstyled service-list">
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Custom cabinetry and storage solutions</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Modern benchtops and splashbacks</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Lighting and electrical upgrades</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Plumbing, tiling, and appliance installation</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Full kitchen redesign and project management</li>
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
                    <h2 className="section-heading">Why Renovate Your Kitchen with Us?</h2>
                    <p>
                      Our Sydney kitchen renovation specialists deliver exceptional results, blending form and function. We use moisture-resistant cabinetry, durable benchtops, and smart layouts to match your lifestyle.
                    </p>
                    <p>
                      Enjoy 3D previews, tailored consultations, and transparent pricing from start to finish. Whether you need a space-efficient apartment kitchen or a luxury open-plan design, our licensed team has you covered.
                    </p>
                    <p>
                      Call <strong>1300 513 529</strong> or <a href="/contact">get your free consultation today</a> and transform your kitchen into a stunning, high-performance space.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 achivement">
                <div className="service-details-single-box">
                  <div className="service-details-content">
                    <h2 className="section-heading">Sydney Kitchen Renovation Highlights</h2>
                    <div className="stats-section row text-center">
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">15+</h3>
                        <p>Years Renovating Kitchens</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">200+</h3>
                        <p>Kitchen Projects Completed</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">150+</h3>
                        <p>Happy Clients in Sydney</p>
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
                      {faqData.map(faq => (
                        <SingleFaqV1 faq={faq} key={faq.id} />
                      ))}
                    </div>
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

export default ServiceDetailsKitchen;
