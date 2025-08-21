'use client';

import React from 'react';
import handymanImage from '@/public/assets/images/service/handyman_cover.jpg';
import BeforeImage from '@/public/assets/images/service/before_handyman.jpg';
import AfterImage from '@/public/assets/images/service/after_handyman.jpg';
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
    title: 'What types of handyman tasks do you cover?',
    bodyText: 'We handle everything from wall repairs, leaking taps, door adjustments, and furniture assembly to TV mounting, patching, and more. No job is too small.',
  },
  {
    id: 2,
    accordionId: 'headingTwo',
    dataBsTarget: 'collapseTwo',
    title: 'Are your handyman services available across Sydney?',
    bodyText: 'Yes! We serve the entire Sydney metro area including Inner West, Northern Beaches, Parramatta, Hills District, and more.',
  },
  {
    id: 3,
    accordionId: 'headingThree',
    dataBsTarget: 'collapseThree',
    title: 'How soon can you attend for general repairs?',
    bodyText: 'We offer same-day or next-day service depending on your location and request. Call us at 1300 513 529 to check availability.',
  },
];

const ServiceDetailsHandyman = () => {
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
                      src={handymanImage}
                      alt="Reliable handyman and general repair services in Sydney by Contact Building Services"
                      className="img-fluid rounded shadow-sm"
                      priority
                    />
                  </div>
                  <div className="service-details-content">
                    <h1 className="main-heading">Reliable Handyman Services in Sydney</h1>
                    <p>
                      From squeaky doors to damaged walls, <strong>Contact Building Services</strong> is your one-stop shop for all <strong>general home fixes</strong>. Our experienced Sydney handymen have completed <strong>500+ small repair jobs</strong> in homes and offices across the city.
                    </p>
                    <p>
                      Whether it’s patching a hole, fixing hinges, regrouting tiles, or mounting TVs, we provide fast, friendly, and professional service at a fair price — with no job too small.
                    </p>
                    <ul className="list-unstyled service-list">
                      <li className="mb-3"><i className="bi bi-wrench-adjustable me-2" style={{ color: 'var(--theme-color)' }}></i>Wall patching and plaster repairs</li>
                      <li className="mb-3"><i className="bi bi-wrench-adjustable me-2" style={{ color: 'var(--theme-color)' }}></i>Leaking tap and pipe fixes</li>
                      <li className="mb-3"><i className="bi bi-wrench-adjustable me-2" style={{ color: 'var(--theme-color)' }}></i>Furniture and flat-pack assembly</li>
                      <li className="mb-3"><i className="bi bi-wrench-adjustable me-2" style={{ color: 'var(--theme-color)' }}></i>TV and shelf mounting</li>
                      <li className="mb-3"><i className="bi bi-wrench-adjustable me-2" style={{ color: 'var(--theme-color)' }}></i>Door adjustments, locks, and handles</li>
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
                    <h2 className="section-heading">Your Local Sydney Handyman for Every Task</h2>
                    <p>
                      Our fully insured and background-checked handymen come equipped to handle a wide range of minor repairs, ensuring the job is done right the first time.
                    </p>
                    <p>
                      Whether you&apos;re a homeowner, property manager, or tenant — we deliver peace of mind and quality results. See the before/after slider above for a glimpse into our everyday transformations.
                    </p>
                    <p>
                      Call <strong>1300 513 529</strong> or <a href="/contact">book your handyman service now</a> and let us take care of your to-do list.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 achivement">
                <div className="service-details-single-box">
                  <div className="service-details-content">
                    <h2 className="section-heading">Handyman Service Stats</h2>
                    <div className="stats-section row text-center">
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">15+</h3>
                        <p>Years of Experience</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">500+</h3>
                        <p>Repairs Completed</p>
                      </div>
                      <div className="col-md-4 stat-item">
                        <h3 className="stat-number">200+</h3>
                        <p>Satisfied Clients</p>
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
            <CategoriesWidget service="general-fixes"/>
            <CTABlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsHandyman;
