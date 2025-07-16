"use client"
import React from 'react';
import ContactFormV2 from '../form/ContactFormV2';

const ContactContent = () => {
    return (
        <>
            <div className="contact-us-area">
                <div className="container ">
                   
                    <div className="contact row">
                    <div className="col-lg-6">
  <h2 className="mb-3">Contact the Best Handyman & Waterproofing Services in Sydney</h2>
  <p className="mb-4">
    Looking for reliable <strong>waterproofing</strong>, <strong>general repairs</strong>, or <strong>handyman painting</strong> in Sydney? You&apos;ve come to the right place.
    We offer <strong>5-star handyman services</strong> across the Northern Beaches and Greater Sydney, tailored to your unique property needs.
  </p>

  <div className="contact-single-box d-flex align-items-start gap-3 mb-4" aria-label="Phone">
    <div className="contact-icon">
      <i className="bi bi-telephone-fill fs-4 text-primary" aria-hidden="true"></i>
    </div>
    <div className="contact-content fs-6">
      <strong>Phone:</strong><br />
      <a href="tel:1300513529" className="text-dark">1300 513 529</a><br />
      <span className="text-muted">Available 24/7 for urgent repairs</span>
    </div>
  </div>

  <div className="contact-single-box d-flex align-items-start gap-3 mb-4" aria-label="Email">
    <div className="contact-icon">
      <i className="bi bi-envelope-open-fill fs-4 text-primary" aria-hidden="true"></i>
    </div>
    <div className="contact-content fs-6">
      <strong>Email:</strong><br />
      <a href="mailto:inquiry@contactbuildingservices.com.au" className="text-dark">inquiry@contactbuildingservices.com.au</a><br />
      <span className="text-muted">Send us your query anytime</span>
    </div>
  </div>

  <div className="contact-single-box d-flex align-items-start gap-3 mb-4" aria-label="Location">
    <div className="contact-icon">
      <i className="bi bi-geo-alt-fill fs-4 text-primary" aria-hidden="true"></i>
    </div>
    <div className="contact-content fs-6">
      <strong>Location:</strong><br />
      <address className="mb-0">
        10 - 14 Hardie Street<br />
        Neutral Bay, NSW 2089
      </address>
      <span className="text-muted">Serving all Sydney suburbs</span>
    </div>
  </div>

  <div className="contact-benefits mt-4">
    <h5 className="fw-bold mb-3">Why Choose Us?</h5>
    <ul className="list-unstyled">
      <li className="mb-2">✅ Long-lasting waterproofing backed by warranty</li>
      <li className="mb-2">✅ Affordable handyman services for homes & businesses</li>
      <li className="mb-2">✅ Free site inspections and no-obligation quotes</li>
      <li className="mb-2">✅ Emergency repairs available 24/7</li>
    </ul>
  </div>
</div>
                        <div className="contact-box col-lg-6">
                            <div className="contact-title">
                                <h2>Have be any question?</h2>
                                <h2>feel free to Contact</h2>
                            </div>
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