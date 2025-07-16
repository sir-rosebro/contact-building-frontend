import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/src/app/area-we-serve/Services.css'
const AreaWeServeContent = () => {
  return (
//     <Head>
//     <title>Waterproofing Services Sydney | Bathroom, Balcony & Commercial</title>
//     <meta
//       name="description"
//       content="Expert waterproofing services in Sydney CBD, Hills District, Surry Hills & more. Bathroom, balcony, roof & strata solutions. Free quote: 0410 570 721."
//     />
//     <script type="application/ld+json">
//       {JSON.stringify({
//         '@context': 'https://schema.org',
//         '@type': 'LocalBusiness',
//         name: 'Hills Waterproofing',
//         address: {
//           '@type': 'PostalAddress',
//           addressLocality: 'Sydney',
//           addressRegion: 'NSW',
//           postalCode: '2000',
//           addressCountry: 'AU',
//         },
//         telephone: '0410 570 721',
//         email: 'info@hillswaterproofing.com.au',
//         service: {
//           '@type': 'Service',
//           serviceType: 'Waterproofing',
//           areaServed: ['Sydney CBD', 'Hills District', 'Surry Hills', 'Pyrmont'],
//         },
//       })}
//     </script>
//   </Head>

<div className="container my-5">
{/* Hero Section */}
<div className="row text-center bg-light py-5">
  <div className="col">
    <h1 className="display-4">Handyman Services in Sydney & Hills District</h1>
    <p className="lead">
      Hills Waterproofing & Handyman Services offers expert waterproofing, painting, tiling, renovations, and general handyman fixes across Sydney CBD, Hills District, Surry Hills, Pyrmont, Darlinghurst, Chippendale, Ultimo, and more. Protect and enhance your property with our certified professionals.
    </p>
    <a href="tel:0410570721" className="btn btn-primary btn-lg m-2">Call Now: 0410 570 721</a>
    <a href="#quote-form" className="btn btn-outline-primary btn-lg">Request Free Quote</a>
  </div>
</div>

{/* Services Section */}
<div className="row my-5">
  <div className="col">
    <h2>Our Comprehensive Handyman Services</h2>
    <p>
      Sydney’s humid climate and frequent rain demand top-quality solutions. Our team delivers tailored waterproofing, painting, tiling, renovations, and handyman services for homes, apartments, and businesses in Sydney CBD, Hills District, and beyond.
    </p>
  </div>
</div>
<div className="row g-4">
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/bathroom-waterproofing.jpg"
        alt="Bathroom waterproofing in Sydney CBD apartment"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Bathroom & Shower Waterproofing</h3>
        <p className="card-text">
          Protect your bathroom from leaks, mold, and tile damage with our high-grade membrane solutions. Perfect for apartments in Sydney CBD, Darlinghurst, and Pyrmont. <Link href="/services/bathroom-waterproofing">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/balcony-waterproofing.jpg"
        alt="Balcony waterproofing in Sydney high-rise"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Balcony & Terrace Waterproofing</h3>
        <p className="card-text">
          Safeguard balconies in Sydney CBD high-rises from water ingress. Our solutions suit tiled surfaces and strata-managed properties in Surry Hills and Pyrmont. <Link href="/services/balcony-waterproofing">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/roof-waterproofing.jpg"
        alt="Roof waterproofing in Sydney city building"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Roof & Gutter Waterproofing</h3>
        <p className="card-text">
          Prevent leaks in rooftop terraces and flat roofs with our expert waterproofing and gutter sealing in Sydney CBD, Pyrmont, and Ultimo. <Link href="/services/roof-waterproofing">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/basement-waterproofing.jpg"
        alt="Basement waterproofing in Surry Hills"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Basement & Retaining Wall Waterproofing</h3>
        <p className="card-text">
          Protect underground car parks and basements from rising damp in Ultimo, Surry Hills, and Chippendale. <Link href="/services/basement-waterproofing">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/painting-services.jpg"
        alt="Interior painting in Hills District home"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Painting Services</h3>
        <p className="card-text">
          Transform your home or business with professional interior and exterior painting in Sydney CBD, Hills District, and Surry Hills. <Link href="/services/painting">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/tiling-services.jpg"
        alt="Tiling services in Sydney CBD apartment"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Tiling Services</h3>
        <p className="card-text">
          Expert tiling for bathrooms, kitchens, and outdoor areas in Pyrmont, Darlinghurst, and beyond. <Link href="/services/tiling">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/renovations.jpg"
        alt="Home renovations in Surry Hills"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Home Renovations</h3>
        <p className="card-text">
          From kitchen upgrades to full home makeovers in Sydney CBD, Hills District, and Chippendale. <Link href="/services/renovations">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <Image
        src="/images/handyman-services.jpg"
        alt="Handyman services in Pyrmont"
        width={400}
        height={300}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">General Handyman Services</h3>
        <p className="card-text">
          Quick fixes, installations, and maintenance for homes and businesses in Ultimo, Surry Hills, and Sydney CBD. <Link href="/services/handyman">Learn More</Link>.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Why Choose Us Section */}
<div className="row my-5 bg-light py-5">
  <div className="col">
    <h2>Why Choose Hills Waterproofing & Handyman Services?</h2>
    <ul>
      <li><strong>Local Experts</strong>: Serving Sydney CBD, Hills District, and surrounding areas.</li>
      <li><strong>Certified Professionals</strong>: Over 10 years of experience in all services.</li>
      <li><strong>Premium Materials</strong>: Eco-friendly membranes, paints, and tiles.</li>
      <li><strong>Affordable Pricing</strong>: Competitive rates with free consultations.</li>
      <li><strong>Warranty</strong>: Industry-leading warranties on all work.</li>
    </ul>
  </div>
</div>

{/* Areas We Serve Section */}
<div className="row my-5">
  <div className="col">
    <h2>Areas We Serve</h2>
    <p>
      We provide handyman services across Sydney and the Hills District, tackling projects of all sizes in homes, apartments, and businesses.
    </p>
    <div className="row g-4">
      {[
        'Sydney CBD',
        'Hills District',
        'Surry Hills',
        'Pyrmont',
        'Darlinghurst',
        'Chippendale',
        'Ultimo',
      ].map((area) => (
        <div className="col-6 col-md-3" key={area}>
copy
          <Link href={`/services/${area.toLowerCase().replace(' ', '-')}`}>
            {area}
          </Link>
        </div>
      ))}
    </div>
    <div className="mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52990.95623574205!2d151.16567687989205!3d-33.87084605941826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b783f%3A0x5017d681632ccc0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1697051234567!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-100"
      ></iframe>
    </div>
  </div>
</div>

{/* Signs You Need Our Services Section */}
<div className="row my-5">
  <div className="col">
    <h2>Signs You Need Our Services</h2>
    <p>Don’t let small issues become costly repairs. Watch for these signs:</p>
    <ul>
      <li><strong>Water Damage</strong>: Stains, mold, or peeling paint in bathrooms or basements.</li>
      <li><strong>Cracked Tiles</strong>: Damaged or loose tiles in kitchens or outdoor areas.</li>
      <li><strong>Faded Paint</strong>: Worn or peeling paint on walls or exteriors.</li>
      <li><strong>Structural Wear</strong>: Cracks or damage needing renovation.</li>
      <li><strong>Minor Repairs</strong>: Loose fixtures or broken fittings.</li>
    </ul>
  </div>
</div>

{/* Testimonials Section */}
<div className="row my-5 bg-light py-5">
  <div className="col">
    <h2>What Our Customers Say</h2>
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p className={styles.testimonial}>
            "Hills Waterproofing fixed our Sydney CBD apartment’s bathroom leaks perfectly!" – Sarah T., Sydney CBD
          </p>
        </div>
        <div className="carousel-item">
          <p className={styles.testimonial}>
            "Their painting services refreshed our Hills District home. Amazing work!" – James L., Hills District
          </p>
        </div>
        <div className="carousel-item">
          <p className={styles.testimonial}>
            "Perfect tiling for our Surry Hills kitchen. Highly recommend!" – Emma R., Surry Hills
          </p>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>

{/* FAQ Section */}
<div className="row my-5">
  <div className="col">
    <h2>Frequently Asked Questions</h2>
    <h3>How long does waterproofing last?</h3>
    <p>Our premium membranes ensure waterproofing lasts 10–15 years with proper care.</p>
    <h3>What’s the cost of bathroom waterproofing in Sydney?</h3>
    <p>Costs depend on project size. Contact us for a free, tailored quote.</p>
    <h3>Do you offer warranties?</h3>
    <p>Yes, we provide industry-leading warranties on all services.</p>
    <h3>Can you handle strata properties?</h3>
    <p>We work with strata managers for compliant solutions in multi-residential units.</p>
  </div>
</div>

{/* Contact Form Section */}
<div className="row my-5" id="quote-form">
  <div className="col">
    <h2>Contact Us for a Free Quote</h2>
    <p>Don’t let leaks, worn paint, or broken fixtures compromise your property. Get in touch today!</p>
    <form action="/api/submit-quote" method="POST">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="service" className="form-label">Service Needed</label>
        <select className="form-select" id="service">
          <option>Waterproofing</option>
          <option>Painting</option>
          <option>Tiling</option>
          <option>Renovations</option>
          <option>Handyman Services</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="4" placeholder="Tell us about your project"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Request Free Quote</button>
    </form>
    <p className="mt-3">
      📞 Call Us: <a href="tel:0410570721">0410 570 721</a><br />
      📧 Email: <a href="mailto:info@hillswaterproofing.com.au">info@hillswaterproofing.com.au</a><br />
      📍 Service Areas: Sydney CBD, Hills District, Surry Hills, Pyrmont, Darlinghurst, Chippendale, Ultimo
    </p>
  </div>
</div>
</div>

  )
}

export default AreaWeServeContent
