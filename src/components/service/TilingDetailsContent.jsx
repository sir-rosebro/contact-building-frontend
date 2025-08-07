'use client';

import React from 'react';
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
    title: 'How much does tiling cost in Sydney?',
    bodyText: 'Tiling costs depend on the area size, tile type, and installation complexity. We offer free quotes across Sydney to give you an exact estimate.',
  },
  {
    id: 2,
    accordionId: 'headingTwo',
    dataBsTarget: 'collapseTwo',
    title: 'Do you provide both floor and wall tiling?',
    bodyText: 'Yes, our licensed tilers handle complete floor and wall tiling projects including bathrooms, kitchens, outdoor areas, and more.',
  },
  {
    id: 3,
    accordionId: 'headingThree',
    dataBsTarget: 'collapseThree',
    title: 'How long does a typical tiling job take?',
    bodyText: 'Most residential jobs are completed within 3–7 days depending on complexity. We minimise disruption and ensure high-quality installations.',
  },
];

const ServiceDetailsTiling = () => {
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
                      src="https://funny-virtue-0648592741.media.strapiapp.com/tiling_89163e702e.jpg"
                      width={1200}
                      height={800}
                      alt="Tiling services in Sydney by Contact Building Services"
                      className="img-fluid rounded shadow-sm"
                      priority
                    />
                  </div>
                  <div className="service-details-content">
                    <h1 className="main-heading">Professional Tiling Services in Sydney</h1>
                    <p>
                      Transform your property with <strong>Contact Building Services</strong> — Sydney&apos;s trusted experts in residential and commercial tiling for over <strong>15 years</strong>. We’ve enhanced the look of <strong>300+ homes and offices</strong> across the Inner West, Hills District, and Northern Beaches.
                    </p>
                    <p>
                      Whether you&apos;re updating your bathroom floors or installing durable outdoor tiles, our licensed tilers deliver precise, flawless results using premium ceramic, porcelain, and natural stone tiles.
                    </p>
                    <ul className="list-unstyled service-list">
                      <li className="mb-3"><i className="bi bi-square me-2" style={{ color: 'var(--theme-color);' }}></i>Bathroom and kitchen tiling</li>
                      <li className="mb-3"><i className="bi bi-square me-2" style={{ color: 'var(--theme-color);' }}></i>Floor and wall tile installations</li>
                      <li className="mb-3"><i className="bi bi-square me-2" style={{ color: 'var(--theme-color);' }}></i>Outdoor patio and pool tiling</li>
                      <li className="mb-3"><i className="bi bi-square me-2" style={{ color: 'var(--theme-color);' }}></i>Surface preparation and waterproofing</li>
                      <li className="mb-3"><i className="bi bi-square me-2" style={{ color: 'var(--theme-color);' }}></i>Custom mosaic and feature designs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="service-details-single-box mb-10">
                  <div className="service-details-thumb">
                    <BeforeAfterSlider imageOne="https://funny-virtue-0648592741.media.strapiapp.com/before_tiling_21085684cf.png" imageTwo="https://funny-virtue-0648592741.media.strapiapp.com/after_tiling_827b234d56.png" />
                  </div>
                  <div className="service-details-content mt-4">
                    <h2 className="section-heading">Why Choose Us for Tiling in Sydney?</h2>
                    <p>
                      Our tilers follow a strict preparation and installation process — levelling, waterproofing, laying, and grouting — for durable, beautiful finishes. We protect surrounding areas, clean up daily, and finish on time.
                    </p>
                    <p>
                      From tile selection advice to final grout, our team ensures your property looks modern and professionally finished. View our before/after slider to see how we transform outdated surfaces into stunning tiled spaces.
                    </p>
                    <p>
                      Call <strong>1300 513 529</strong> or <a href="/contact">request a free tiling quote</a> from Sydney’s detail-driven team today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 achivement">
                <div className="service-details-single-box">
                  <div className="service-details-content">
                    <h2 className="section-heading">Sydney Tiling Highlights</h2>
                    <div className="stats-section row text-center">
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">15+</h3>
                        <p>Years Tiling in Sydney</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">300+</h3>
                        <p>Tiling Projects Completed</p>
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

export default ServiceDetailsTiling;