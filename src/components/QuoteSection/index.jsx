// app/components/QuoteSection.js
'use client';

import React from 'react';
import Link from 'next/link';

import './quote-section.css'

const QuoteSection = ({ service, area }) => {
  const displayService = service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ');
  const displayArea = area.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Example sub-suburbs; customize based on area
  const subSuburbs = ['Newtown', 'Marrickville', 'Ashfield', 'Summer Hill', 'Leichhardt', 'Dulwich Hill'];

  return (
    <section className="quote-section position-relative overflow-hidden py-5">
      <div className="marble-bg position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="velvet-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="crystal-particles position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container position-relative z-index-2">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="quote-card premium-glass-card shadow-3xl border-0 rounded-3xl p-5 position-relative overflow-hidden">
              <div className="diamond-cut position-absolute top-0 start-0 w-100 h-100"></div>
              <h2 className="card-title mb-4 text-center fw-black text-ebony position-relative z-index-3 display-5">
                Indulge in Exquisite {displayService} for {displayArea} Sydney
                <span className="elegant-swirl position-absolute bottom-0 start-50 translate-middle-x"></span>
              </h2>
              <p className="lead mb-5 text-center text-silver opacity-95 position-relative z-index-3 font-serif">
                Immerse your {displayArea} sanctuary in opulent hues and enduring elegance. At Contact Building Services, we orchestrate symphonies of color and protection—engage us for a bespoke, complimentary consultation and quotation.
              </p>
              <div className="contact-info mb-5 position-relative z-index-3">
                <p className="fs-4 d-flex align-items-center justify-content-center mb-3 contact-item ethereal-hover">
                  <i className="bi bi-telephone-fill me-3 fs-3 icon-crystal"></i>
                  <Link href="tel:0410570721" className="text-decoration-none text-ebony hover-emerald">Call Us: 0410 570 721</Link>
                </p>
                <p className="fs-4 d-flex align-items-center justify-content-center mb-3 contact-item ethereal-hover delay-1">
                  <i className="bi bi-geo-alt-fill me-3 fs-3 icon-crystal"></i>
                  Service Areas: {subSuburbs.join(', ')}, and the distinguished environs of {displayArea}
                </p>
                <p className="fs-4 d-flex align-items-center justify-content-center mb-4 contact-item ethereal-hover delay-2">
                  <i className="bi bi-envelope-fill me-3 fs-3 icon-crystal"></i>
                  <Link href="mailto:info@contactbuildingservices.com.au" className="text-decoration-none text-ebony hover-emerald">Email: info@contactbuildingservices.com.au</Link>
                </p>
              </div>
              <div className="text-center position-relative z-index-3">
                <Link href="#contact" className="btn premium-luxe-btn shadow-lg">
                  Commission Your Signature Quote
                  <i className="bi bi-brush-fill ms-2 icon-elegant-spin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;