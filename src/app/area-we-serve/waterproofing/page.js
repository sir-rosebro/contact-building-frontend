import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FooterV1 from '@/src/components/footer/FooterV1';
import Hero from '@/src/components/Hero/Hero';
import AreaWeServeContent from '@/src/components/AreaWeServeContent';
import styles from './waterproofing.css'

export const metadata = {
    title: "Contact - Euildint Construction Building NextJS Template"
}

const areas = [
    { name: 'Sydney CBD', desc: 'Waterproofing for apartments, townhouses, and commercial buildings in Sydney’s bustling heart.', lat: -33.8688, lng: 151.2093 },
    { name: 'Hills District', desc: 'Trusted waterproofing for homes in Hills Shire, protecting against rain and runoff.', lat: -33.7400, lng: 150.9900 },
    { name: 'Surry Hills', desc: 'Expert solutions for urban homes and strata buildings in Surry Hills.', lat: -33.8908, lng: 151.2127 },
    { name: 'Pyrmont', desc: 'Protecting Pyrmont’s high-rise apartments and commercial spaces from leaks.', lat: -33.8699, lng: 151.1940 },
    { name: 'Darlinghurst', desc: 'Tailored waterproofing for heritage and modern properties in Darlinghurst.', lat: -33.8794, lng: 151.2193 },
    { name: 'Chippendale', desc: 'Reliable waterproofing for Chippendale’s urban homes and apartments.', lat: -33.8868, lng: 151.2005 },
    { name: 'Ultimo', desc: 'Safeguarding Ultimo’s basements and buildings from water damage.', lat: -33.8786, lng: 151.1969 },
    { name: 'Inner West Council', desc: 'Efficient waterproofing for urban homes and strata in Inner West.', lat: -33.8964, lng: 151.1400 },
    { name: 'Bayside Council', desc: 'Protecting Bayside homes from leaks and moisture damage.', lat: -33.9590, lng: 151.2234 },
    { name: 'Randwick Council', desc: 'Combating sea air and heavy rains with expert waterproofing in Randwick.', lat: -33.9142, lng: 151.2410 },
    { name: 'Northern Beaches Council', desc: 'Salt-resistant waterproofing for Northern Beaches coastal properties.', lat: -33.7511, lng: 151.2874 },
    { name: 'Mosman Council', desc: 'Premium waterproofing for Mosman’s high-end homes and coastal properties.', lat: -33.8278, lng: 151.2443 },
    { name: 'North Sydney Council', desc: 'Waterproofing for dense urban environments in North Sydney.', lat: -33.8346, lng: 151.2071 },
    { name: 'Willoughby Council', desc: 'Fast, reliable waterproofing to protect Willoughby homes.', lat: -33.8050, lng: 151.2000 },
    { name: 'Lane Cove Council', desc: 'Tailored waterproofing solutions for Lane Cove properties.', lat: -33.8130, lng: 151.1700 },
    { name: 'Ku-ring-gai Council', desc: 'Durable waterproofing for leafy Ku-ring-gai suburbs.', lat: -33.7333, lng: 151.0833 },
    { name: 'Hornsby Council', desc: 'Protecting Hornsby homes from rain, runoff, and rising damp.', lat: -33.7036, lng: 151.1009 },
    { name: 'Ryde Council', desc: 'Smart waterproofing systems for Ryde’s bathrooms and balconies.', lat: -33.8118, lng: 151.1060 },
    { name: 'Hunters Hill Council', desc: 'Waterproofing for heritage and modern properties in Hunters Hill.', lat: -33.8333, lng: 151.1397 },
    { name: 'Blacktown Council', desc: 'Reliable waterproofing solutions for Blacktown residents.', lat: -33.7710, lng: 150.9080 },
  ];


const Contact = () => {
    return (
        <>
            <Hero 
                page="Area We Serve"
                description="Expert Waterproofing, painting, tiling, renovations and handyman services in Sydney"
            />
      <Head>
        <title>Waterproofing Services Sydney | Hills Waterproofing</title>
        <meta
          name="description"
          content="Top waterproofing services in Sydney CBD, Hills District, Inner West, Randwick, Northern Beaches, and more. Expert bathroom, balcony, roof, and basement solutions. Free quote: 0410 570 721."
        />
        <meta
          name="keywords"
          content="waterproofing services Sydney, bathroom waterproofing Sydney CBD, balcony waterproofing Hills District, roof waterproofing Surry Hills, basement waterproofing Pyrmont, commercial waterproofing Randwick, waterproofing Inner West, waterproofing Northern Beaches"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Hills Waterproofing & Handyman Services',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Sydney',
              'addressRegion': 'NSW',
              'postalCode': '2000',
              'addressCountry': 'AU',
            },
            'telephone': '0410 570 721',
            'email': 'info@hillswaterproofing.com.au',
            'openingHours': 'Mo-Sa 08:00-21:00',
            'service': {
              '@type': 'Service',
              'serviceType': 'Waterproofing',
              'description': 'Professional waterproofing for bathrooms, balconies, roofs, basements, and commercial properties across Sydney and surrounding areas.',
              'areaServed': areas.map((area) => ({ '@type': 'Place', 'name': area.name })),
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How long does waterproofing last in Sydney?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Our premium membranes ensure waterproofing lasts 10–15 years, ideal for Sydney’s humid and coastal climate.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What’s the cost of waterproofing a bathroom in Sydney CBD?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Costs vary by project size. Contact us for a free, tailored quote for your Sydney CBD property.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Do you offer warranties on waterproofing services?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we provide industry-leading warranties for all waterproofing projects across Sydney.',
                },
              },
            ],
          })}
        </script>
      </Head>

      <Head>
        <title>Waterproofing Services Sydney | Hills Waterproofing</title>
        <meta
          name="description"
          content="Top waterproofing services in Sydney CBD, Hills District, Inner West, Randwick, Northern Beaches, and more. Expert bathroom, balcony, roof, and basement solutions. Free quote: 0410 570 721."
        />
        <meta
          name="keywords"
          content="waterproofing services Sydney, bathroom waterproofing Sydney CBD, balcony waterproofing Hills District, roof waterproofing Surry Hills, basement waterproofing Pyrmont, commercial waterproofing Randwick, waterproofing Inner West, waterproofing Northern Beaches"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Hills Waterproofing & Handyman Services',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Sydney',
              'addressRegion': 'NSW',
              'postalCode': '2000',
              'addressCountry': 'AU',
            },
            'telephone': '0410 570 721',
            'email': 'info@hillswaterproofing.com.au',
            'openingHours': 'Mo-Sa 08:00-21:00',
            'service': {
              '@type': 'Service',
              'serviceType': 'Waterproofing',
              'description': 'Professional waterproofing for bathrooms, balconies, roofs, basements, and commercial properties across Sydney and surrounding areas.',
              'areaServed': areas.map((area) => ({ '@type': 'Place', 'name': area.name })),
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How long does waterproofing last in Sydney?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Our premium membranes ensure waterproofing lasts 10–15 years, ideal for Sydney’s humid and coastal climate.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What’s the cost of waterproofing a bathroom in Sydney CBD?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Costs vary by project size. Contact us for a free, tailored quote for your Sydney CBD property.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Do you offer warranties on waterproofing services?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we provide industry-leading warranties for all waterproofing projects across Sydney.',
                },
              },
            ],
          })}
        </script>
      </Head>

      <div className="container my-5">
        {/* Hero Section */}
        <div className={`${styles.hero} row text-center bg-dark text-white py-5 rounded-3 shadow-lg`}>
          <div className="col">
            <h1 className="display-4 fw-bold">Expert Waterproofing Services in Sydney</h1>
            <p className="lead">
              Hills Waterproofing delivers top-tier waterproofing solutions across Sydney CBD, Hills District, Inner West, Randwick, Northern Beaches, and more. Protect your home, apartment, or commercial property from leaks, water damage, and rising damp with our certified expertise.
            </p>
            <a href="tel:0410570721" className="btn btn-primary btn-lg m-2">Call Now: 0410 570 721</a>
            <a href="#quote-form" className="btn btn-outline-light btn-lg">Request Free Quote</a>
          </div>
        </div>

        {/* Waterproofing Services Section */}
        <div className="row my-5">
          <div className="col">
            <h2 className="fw-bold">Our Waterproofing Services in Sydney</h2>
            <p>
              Sydney’s humid climate, coastal conditions, and frequent rainfall demand robust waterproofing to protect your property from costly damage. At Hills Waterproofing, we use premium-grade membranes and sealants, tailored for urban apartments, heritage buildings, and commercial properties across Sydney CBD, Hills District, Inner West, and beyond. Our certified team ensures long-lasting protection for every project.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {[
            {
              title: 'Bathroom & Shower Waterproofing',
              desc: 'Prevent leaks, mold, and tile damage in Sydney CBD, Darlinghurst, and Inner West apartments with our high-grade membrane solutions. Perfect for renovations and older units.',
              link: '/services/waterproofing/bathroom',
            },
            {
              title: 'Balcony & Terrace Waterproofing',
              desc: 'Protect high-rise balconies in Sydney CBD, Surry Hills, and Pyrmont from water ingress. Tailored for tiled surfaces and strata-managed properties.',
              link: '/services/waterproofing/balcony',
            },
            {
              title: 'Roof & Gutter Waterproofing',
              desc: 'Stop leaks in flat roofs and rooftop terraces in Sydney CBD, Pyrmont, and North Sydney with our expert sealing solutions.',
              link: '/services/waterproofing/roof',
            },
            {
              title: 'Basement & Retaining Wall Waterproofing',
              desc: 'Safeguard basements, car parks, and retaining walls in Ultimo, Chippendale, and Bayside from rising damp and water damage.',
              link: '/services/waterproofing/basement',
            },
            {
              title: 'Commercial & Strata Waterproofing',
              desc: 'Compliant waterproofing for commercial buildings and strata units in Sydney CBD, Randwick, and Inner West, working with property managers.',
              link: '/services/waterproofing/commercial',
            },
          ].map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`${styles.cardHover} card h-100 shadow-sm rounded-3`}>
                <div className="card-body">
                  <h3 className="card-title fw-bold">{service.title}</h3>
                  <p className="card-text">{service.desc} <Link href={service.link}>More Details</Link>.</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="row my-5 bg-light py-5 rounded-3 shadow-sm">
          <div className="col">
            <h2 className="fw-bold">Why Choose Hills Waterproofing?</h2>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i><strong>Sydney CBD Specialists</strong>: Experts in apartments, commercial, and strata properties.</li>
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i><strong>Certified Professionals</strong>: Over 10 years of waterproofing expertise in Sydney.</li>
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i><strong>Premium Materials</strong>: Eco-friendly, high-grade membranes and sealants.</li>
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i><strong>Affordable Pricing</strong>: Competitive rates with free on-site consultations.</li>
              <li><i className="bi bi-check-circle-fill text-primary me-2"></i><strong>Guaranteed Results</strong>: Industry-leading warranties for peace of mind.</li>
            </ul>
            <p>
              Need other services? Explore our <Link href="/areas-we-serve/painting">Painting</Link>, <Link href="/areas-we-serve/tiling">Tiling</Link>, <Link href="/areas-we-serve/renovations">Renovations</Link>, or <Link href="/areas-we-serve/handyman">Handyman Services</Link>.
            </p>
          </div>
        </div>

        {/* Areas We Serve Section */}
        <div className="row my-5">
          <div className="col">
            <h2 className="fw-bold">Areas We Serve for Waterproofing</h2>
            <p>
              Hills Waterproofing provides expert services across Sydney, protecting homes, apartments, and commercial properties in urban and coastal areas. From Sydney CBD’s high-rises to Northern Beaches’ coastal homes, we’ve got you covered.
            </p>
            <div className="row g-4">
              {areas.map((area) => (
                <div className="col-12 col-md-6 col-lg-4" key={area.name}>
                  <div className={`${styles.cardHover} card h-100 shadow-sm rounded-3`}>
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d${area.lng}!3d${area.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(area.name)}!5e0!3m2!1sen!2sau!4v1697051234567!5m2!1sen!2sau`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-top"
                    ></iframe>
                    <div className="card-body">
                      <h4 className="card-title fw-bold">{area.name}</h4>
                      <p className="card-text">{area.desc} <Link href={`/services/waterproofing/${area.name.toLowerCase().replace(/ /g, '-')}`}>More Details</Link>.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Signs You Need Waterproofing Section */}
        <div className="row my-5">
          <div className="col">
            <h2 className="fw-bold">Signs You Need Waterproofing in Sydney</h2>
            <p>Sydney’s coastal climate and heavy rainfall can wreak havoc on unprotected properties. Spot these signs early to avoid costly repairs:</p>
            <ul>
              <li><strong>Mold or Mildew</strong>: Musty odors or visible mold in bathrooms, basements, or balconies in Sydney CBD, Randwick, or Northern Beaches.</li>
              <li><strong>Water Stains</strong>: Discoloration on walls, ceilings, or floors in Surry Hills, Pyrmont, or Inner West properties.</li>
              <li><strong>Peeling Paint</strong>: Bubbling or flaking paint due to moisture in Darlinghurst, Mosman, or Hills District homes.</li>
              <li><strong>Cracked Tiles</strong>: Damaged tiles from water ingress in Bayside, Chippendale, or Ku-ring-gai properties.</li>
              <li><strong>Damp Walls</strong>: Wet or soft walls in basements or retaining walls in Ultimo, Blacktown, or Ryde.</li>
              <li><strong>Efflorescence</strong>: White, powdery deposits on concrete or masonry in coastal areas like Northern Beaches or Mosman.</li>
              <li><strong>Leaking Balconies</strong>: Water pooling or seeping through tiles in Sydney CBD or Pyrmont high-rises.</li>
            </ul>
          </div>
        </div>

        {/* Waterproofing Tips Section */}
        <div className="row my-5 bg-light py-5 rounded-3 shadow-sm">
          <div className="col">
            <h2 className="fw-bold">Waterproofing Tips for Sydney Properties</h2>
            <p>Protect your Sydney home or business with these expert tips from Hills Waterproofing:</p>
            <ul>
              <li><strong>Regular Inspections</strong>: Check bathrooms, balconies, and roofs annually, especially in coastal areas like Randwick or Northern Beaches, to catch leaks early.</li>
              <li><strong>Use Quality Membranes</strong>: Invest in high-grade waterproofing membranes for long-term protection in Sydney CBD apartments or Hills District homes.</li>
              <li><strong>Maintain Gutters</strong>: Clear gutters in North Sydney or Hornsby properties to prevent water buildup and roof leaks.</li>
              <li><strong>Address Cracks Promptly</strong>: Seal cracks in concrete or tiles in Inner West or Bayside properties to stop water ingress.</li>
              <li><strong>Ventilation</strong>: Ensure proper ventilation in bathrooms and basements in Ultimo or Chippendale to reduce mold risk.</li>
              <li><strong>Hire Certified Professionals</strong>: Choose licensed waterproofers like Hills Waterproofing for compliant, durable solutions in Sydney.</li>
            </ul>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="row my-5">
          <div className="col">
            <h2 className="fw-bold">What Our Sydney Customers Say</h2>
            <div className="carousel slide" data-bs-ride="carousel" id="testimonialsCarousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p className={styles.testimonial}>
                    Hills Waterproofing saved our Sydney CBD apartment from bathroom leaks. Professional and fast! – Sarah T., Sydney CBD
                  </p>
                </div>
                <div className="carousel-item">
                  <p className={styles.testimonial}>
                    Their balcony waterproofing in Pyrmont was flawless. Saved our strata property! – John M., Pyrmont
                  </p>
                </div>
                <div className="carousel-item">
                  <p className={styles.testimonial}>
                    Expert roof waterproofing in Surry Hills. Highly recommend! – Emma R., Surry Hills
                  </p>
                </div>
                <div className="carousel-item">
                  <p className={styles.testimonial}>
                    Our basement in Chippendale is now dry thanks to Hills Waterproofing! – Michael L., Chippendale
                  </p>
                </div>
                <div className="carousel-item">
                  <p className={styles.testimonial}>
                    Top-notch commercial waterproofing in Randwick. Great service! – Lisa K., Randwick
                  </p>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row my-5">
          <div className="col">
            <h2 className="fw-bold">Frequently Asked Questions About Waterproofing</h2>
            <h3>How long does waterproofing last in Sydney?</h3>
            <p>Our premium membranes ensure waterproofing lasts 10–15 years, ideal for Sydney’s humid and coastal climate in areas like Northern Beaches or Randwick.</p>
            <h3>What’s the cost of waterproofing a bathroom in Sydney CBD?</h3>
            <p>Costs vary by project size and complexity. Contact us for a free quote tailored to your Sydney CBD, Inner West, or Hills District property.</p>
            <h3>Do you offer warranties on waterproofing services?</h3>
            <p>Yes, we provide industry-leading warranties for all projects across Surry Hills, Pyrmont, and beyond.</p>
            <h3>Can you handle strata and commercial waterproofing?</h3>
            <p>We work with strata managers and property owners for compliant waterproofing in Sydney CBD, Randwick, and Inner West commercial buildings.</p>
            <h3>Do you service coastal areas like Northern Beaches or Mosman?</h3>
            <p>Yes, we offer salt-resistant waterproofing for coastal properties in Northern Beaches, Mosman, and Bayside.</p>
            <h3>How do I know if my balcony needs waterproofing?</h3>
            <p>Look for pooling water, cracked tiles, or leaks in Sydney CBD or Pyrmont balconies. Call us for a free inspection.</p>
            <h3>What’s the best waterproofing for heritage properties?</h3>
            <p>We use specialized membranes for heritage properties in Hunters Hill and Darlinghurst, ensuring compliance and durability.</p>
          </div>
        </div>

        {/* Updated Contact Form Section */}
        <div className="row my-5" id="quote-form">
          <div className="col">
            <h2 className="fw-bold">Get a Free Waterproofing Quote in Sydney</h2>
            <p>
              Protect your property from leaks in Sydney CBD, Hills District, Inner West, Randwick, or Northern Beaches. Enter your phone number below for a callback within an hour, or reach out instantly via call, WhatsApp, or email!
            </p>
            <form action="/api/submit-callback" method="POST" className={`${styles.form} p-4 bg-light rounded-3 shadow-sm`}>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="number"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Request Callback</button>
            </form>
            <div className="mt-3 text-center">
              <a href="tel:0410570721" className="btn btn-primary btn-lg m-2">
                <i className="bi bi-telephone-fill me-2"></i>Call Now: 0410 570 721
              </a>
              <a
                href="https://wa.me/61410570721"
                className="btn btn-success btn-lg m-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp Us
              </a>
              <a
                href="mailto:info@hillswaterproofing.com.au"
                className="btn btn-outline-primary btn-lg m-2"
              >
                <i className="bi bi-envelope-fill me-2"></i>Email Us
              </a>
            </div>
            <p className="mt-3">
              📍 Service Areas: Sydney CBD, Hills District, Inner West, Bayside, Randwick, Northern Beaches, Mosman, North Sydney, Willoughby, Lane Cove, Ku-ring-gai, Hornsby, Ryde, Hunters Hill, Blacktown<br />
              🕒 Hours: Monday–Saturday, 8:00 AM–9:00 PM
            </p>
          </div>
        </div>
      </div>
          <FooterV1 />
        </>
    );
};

export default Contact;