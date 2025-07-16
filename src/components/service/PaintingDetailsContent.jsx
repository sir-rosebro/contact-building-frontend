'use client';

import React from 'react';
import paintingImage from '@/public/assets/images/service/painting_cover.jpg';
import BeforeImage from '@/public/assets/images/service/painting_before.jpg';
import AfterImage from '@/public/assets/images/service/painting_after.jpg';
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
    title: 'How much does house painting cost in Sydney?',
    bodyText: 'Painting costs depend on the property size, surface prep, and paint type. We offer free quotes across Sydney to give you an exact estimate.',
  },
  {
    id: 2,
    accordionId: 'headingTwo',
    dataBsTarget: 'collapseTwo',
    title: 'Do you provide both interior and exterior painting?',
    bodyText: 'Yes, our licensed painters handle complete interior and exterior projects including walls, ceilings, fences, and facades.',
  },
  {
    id: 3,
    accordionId: 'headingThree',
    dataBsTarget: 'collapseThree',
    title: 'How long does a typical painting job take?',
    bodyText: 'Most residential jobs are completed within 2–5 days depending on complexity. We minimise disruption and ensure high-quality finishes.',
  },
];

const ServiceDetailsPainting = () => {
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
                      src={paintingImage}
                      alt="House and commercial painting in Sydney by Contact Building Services"
                      className="img-fluid rounded shadow-sm"
                      priority
                    />
                  </div>
                  <div className="service-details-content">
                    <h1 className="main-heading">Professional Painting Services in Sydney</h1>
                    <p>
                      Transform your property with <strong>Contact Building Services</strong> — Sydney&apos;s trusted experts in residential and commercial painting for over <strong>15 years</strong>. We’ve enhanced the look of <strong>300+ homes and offices</strong> across the Inner West, Hills District, and Northern Beaches.
                    </p>
                    <p>
                      Whether you&apos;re freshening up your interiors or protecting your exterior from Sydney&apos;s weather, our licensed painters deliver clean, flawless results using premium Dulux and Taubmans paints.
                    </p>
                    <ul className="list-unstyled service-list">
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Interior wall and ceiling painting</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Exterior house and commercial painting</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Fence, deck, and feature wall finishes</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Surface preparation and patching</li>
                      <li className="mb-3"><i className="bi bi-droplet me-2" style={{ color: '#F60' }}></i>Eco-friendly and low-VOC paint options</li>
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
                    <h2 className="section-heading">Why Choose Us for Painting in Sydney?</h2>
                    <p>
                      Our painters follow a strict prep-and-paint process — sanding, filling, priming, and painting — for lasting, beautiful finishes. We protect furniture, clean up daily, and finish on time.
                    </p>
                    <p>
                      From colour consultation to final coat, our team ensures your property looks refreshed and professionally finished. View our before/after slider to see how we transform tired walls into fresh masterpieces.
                    </p>
                    <p>
                      Call <strong>1300 513 529</strong> or <a href="/contact">request a free painting quote</a> from Sydney’s detail-driven team today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 achivement">
                <div className="service-details-single-box">
                  <div className="service-details-content">
                    <h2 className="section-heading">Sydney Painting Highlights</h2>
                    <div className="stats-section row text-center">
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">15+</h3>
                        <p>Years Painting in Sydney</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">300+</h3>
                        <p>Painting Projects Completed</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">200+</h3>
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

export default ServiceDetailsPainting;
