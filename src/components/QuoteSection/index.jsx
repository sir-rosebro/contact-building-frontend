'use client';

import React from 'react';
import Link from 'next/link';

import './quote-section.css';

const QuoteSection = ({ service, area }) => {
  const displayService = service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ');
  const displayArea = area.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const subSuburbs = ['Newtown', 'Marrickville', 'Ashfield', 'Summer Hill', 'Leichhardt', 'Dulwich Hill'];

  return (
    <section className="quote-section text-center my-5 py-20 md:px-8 lg:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="justify-content-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ebony mb-6 leading-tight tracking-tight">
              Get a Free Quote for Professional {displayService} Services in {displayArea}, Sydney
            </h2>
            
            <p className="lead text-lg md:text-xl text-silver my-4">
              Looking for reliable {service} in {displayArea}? Contact Building Services offers top-quality {displayService.toLowerCase()} for residential and commercial properties in {displayArea} and surrounding Sydney suburbs. Request your no-obligation quote today for expert craftsmanship and durable results.
            </p>
            
            <div className="mb-8">
              <p className="fs-5 mb-3 call-us">
                <i className="bi bi-telephone-fill me-2 text-theme"></i>
                <Link href="tel:0410570721" className="text-decoration-none text-ebony hover:text-theme">300 513 529</Link>
              </p>
              <p className="fs-5 mb-3">
                <i className="bi bi-geo-alt-fill me-2 text-theme"></i>
                Service areas include {subSuburbs.join(', ')}, and surrounding {displayArea} suburbs in Sydney
              </p>
              <p className="fs-5 mb-3">
                <i className="bi bi-envelope-fill me-2 text-theme"></i>
                <Link href="mailto:info@contactbuildingservices.com.au" className="text-decoration-none text-ebony hover:text-theme fs-5" style={{ color: "#747474" }}>Email us at info@contactbuildingservices.com.au</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;