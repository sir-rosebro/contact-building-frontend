import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterV1 from '@/src/components/footer/FooterV1';
import Hero from '@/src/components/Hero/Hero';
import CostEstimationWidgetPrompt from '@/src/components/service/CostEstimationWidgetPrompt';
import { getServiceContent, getSuburbBlurb, suburbs } from '@/src/lib/data';
import NotFound from '../../not-found';
import styles from './style.module.css';
import SuburbMap from '@/src/components/SuburbMap'; // Assume this is created as 'use client'

const areas = [
  { name: 'sydney-cbd', desc: 'Painting services in the heart of Sydney, designed for apartments, townhouses, and commercial buildings.', lat: -33.8688, lng: 151.2093 },
  { name: 'inner-west-council', desc: 'The Inner West’s trusted team for reliable, efficient painting for urban homes and strata buildings.', lat: -33.8964, lng: 151.1400 },
  { name: 'bayside-council', desc: 'Providing expert painting services across Bayside to enhance homes with fresh, durable finishes.', lat: -33.9590, lng: 151.2234 },
  { name: 'randwick-council', desc: 'Expert painting in Randwick to refresh and protect against sea air, heavy rains, and wear.', lat: -33.9142, lng: 151.2410 },
  { name: 'northern-beaches-council', desc: 'Offering weather-resistant painting for Northern Beaches homes exposed to coastal elements.', lat: -33.7511, lng: 151.2874 },
  { name: 'mosman-council', desc: 'Premium painting solutions in Mosman for high-end homes and coastal properties.', lat: -33.8278, lng: 151.2443 },
  { name: 'north-sydney-council', desc: 'Revitalizing North Sydney homes with top-quality painting for dense urban environments.', lat: -33.8346, lng: 151.2071 },
  { name: 'willoughby-council', desc: 'Offering fast, efficient painting across Willoughby to beautify homes with lasting color.', lat: -33.8050, lng: 151.2000 },
  { name: 'lane-cove-council', desc: 'Keeping Lane Cove properties vibrant with tailored painting and surface enhancement solutions.', lat: -33.8130, lng: 151.1700 },
  { name: 'ku-ring-gai-council', desc: 'Painting services in Ku-ring-gai built to last—ideal for leafy suburbs and multi-level properties.', lat: -33.7333, lng: 151.0833 },
  { name: 'hornsby-council', desc: 'Delivering professional painting in Hornsby to refresh homes against weather and time.', lat: -33.7036, lng: 151.1009 },
  { name: 'ryde-council', desc: 'Protecting Ryde properties with smart painting systems for interiors, exteriors, and more.', lat: -33.8118, lng: 151.1060 },
  { name: 'hunters-hill-council', desc: 'Hunters Hill homes are revitalized by our expert painting—tailored for heritage and modern properties alike.', lat: -33.8333, lng: 151.1397 },
  { name: 'hills-shire-council', desc: 'The Hills District trusts Contact Building Services for high-quality, long-lasting painting transformations.', lat: -33.7400, lng: 150.9900 },
  { name: 'blacktown-council', desc: 'Blacktown residents trust us for reliable, vibrant painting solutions for all property types.', lat: -33.7710, lng: 150.9080 },
];

export async function generateStaticParams() {
  return ['painting', 'general-fixes', 'tiling', 'waterproofing'].map((service) => ({ service }));
}

export const metadata = {
  title: 'Painting Areas - Contact Building Services',
};

const ServiceAreas = ({ params = {} }) => {
  const { service } = params;
  const content = getServiceContent(service);
  const displayService = service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ');

  if (!content.title) {
    return <NotFound />;
  }

  const getServiceIcon = (serviceItem) => {
    if (serviceItem.includes('Painting')) return 'bi-brush-fill';
    if (serviceItem.includes('Fixes')) return 'bi-tools';
    if (serviceItem.includes('Tiling')) return 'bi-grid-3x3-gap-fill';
    if (serviceItem.includes('Waterproofing')) return 'bi-droplet-fill';
    return 'bi-gear-fill';
  };

  const capitalizeSuburb = (name) => {
    return name.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expert painting services in Sydney CBD, Hills District, Inner West, Randwick, Northern Beaches, and more. High-quality solutions by Contact Building Services with 15+ years of experience. Free quote: [Your Phone Number]."
        />
        <meta
          name="keywords"
          content="painting services Sydney, painting Sydney CBD, painting Hills District, painting Surry Hills, painting Inner West, painting Northern Beaches"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Contact Building Services',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Sydney',
              'addressRegion': 'NSW',
              'postalCode': '2000',
              'addressCountry': 'AU',
            },
            'telephone': '[Your Phone Number]',
            'email': 'info@contactbuildingservices.com.au',
            'openingHours': 'Mo-Sa 08:00-18:00',
            'description': 'Professional painting services for homes and businesses across Sydney, backed by over 15 years of experience.',
            'service': {
              '@type': 'Service',
              'serviceType': 'Painting',
              'description': 'Expert painting for homes, apartments, and commercial properties across Sydney suburbs.',
              'areaServed': areas.map((area) => ({ '@type': 'Place', 'name': capitalizeSuburb(area.name) })),
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
                'name': 'How long does painting last in Sydney?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Our painting services use premium paints suited for Sydney’s climate, ensuring vibrant finishes last 7–10 years.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What’s the cost of painting in Sydney CBD?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Costs vary by project size and scope. Contact us for a free, tailored quote for your Sydney CBD property.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Do you offer warranties on painting services?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we provide industry-leading warranties for all painting projects across Sydney.',
                },
              },
            ],
          })}
        </script>
      </Head>

      <Hero
        page="Painting Areas in Sydney"
        description="Expert painting services across all Sydney suburbs. Transform your property with Contact Building Services, backed by 15+ years of experience."
      />

      <div className={styles.container}>
        <div className="row">
          <div className={styles.sidebar + " col-md-3"}>
            <div className={styles.sidebarInner}>
              <h3 className={styles.sidebarHeading}>
                Suburbs We Serve
              </h3>
              <ul className={styles.sidebarList}>
                {areas.map((area, idx) => (
                  <li key={idx} className={styles.sidebarItem}>
                    <Link href={`/area-we-serve/painting/${area.name}`} className={styles.sidebarLink}>
                      <i className={`bi bi-geo-alt-fill ${styles.sidebarIcon}`}></i>
                      <span className={styles.sidebarText}>{capitalizeSuburb(area.name)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.mainContent + " col-md-9"}>
            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Contact Building Services – Expert Painting Services in Sydney</h2>
                <p className={styles.subheading}>Your Reliable Painting Professionals in Sydney City & Nearby Regions</p>
                <p className={styles.intro}>
                  At Contact Building Services, we offer high-quality painting services in Sydney CBD, revitalizing homes, multi-story apartments, traditional buildings, and commercial spaces with fresh, durable finishes. Our experienced team applies top-quality paints and proven methods suited for urban architectures and busy city lifestyles. Whether you need interior wall refreshing, exterior weatherproofing, or full property makeovers, we`@apos`re committed to delivering vibrant, long-lasting results that enhance aesthetics and protection year-round.
                </p>
                {/* <div className={styles.ctaWrapper}>
                  <Link href="tel:[Your Phone Number]" className={styles.ctaButton}>Call Now: [Your Phone Number]</Link>
                  <Link href="#quote-form" className={styles.ctaButtonSecondary}>Request Free Quote</Link>
                </div> */}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Our Painting Services in Sydney</h2>
                <p className={styles.intro}>{content.intro}</p>
              </div>
              <div className={styles.grid}>
                {content.servicesList.map((item, idx) => (
                  <div className={styles.card} key={idx}>
                    <i className={`bi ${getServiceIcon(item)} ${styles.icon}`} />
                    <h5 className={styles.cardTitle}>{item.split(':')[0]}</h5>
                    <p className={styles.cardText}>{item.split(':')[1]}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Why Choose Contact Building Services?</h2>
                <p className={styles.intro}>{content.whyChoose}</p>
              </div>
              <div className={styles.whyChooseList}>
                <ul className={styles.list}>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />CBD Experts: Apartment, commercial, and strata painting.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Covering Sydney: Sydney City, Surry Hills, Pyrmont, Darlinghurst, and beyond.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Certified Professionals: Over 15 years of painting expertise.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Premium Paints: High-quality, durable coatings.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Cost-Effective Pricing: Competitive rates with free consultations.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Guaranteed Finishes: Industry-leading warranties.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Free On-Site Estimate: Tailored quotes for your project.</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Areas We Serve for Painting</h2>
                <p className={styles.intro}>
                  Contact Building Services delivers expert painting across Sydney, from urban apartments in Sydney CBD to coastal homes in Northern Beaches, with 15+ years of craftsmanship.
                </p>
              </div>
              <div className={styles.grid}>
                {areas.map((area, idx) => (
                  <div className={styles.card} key={idx}>
                    <SuburbMap lat={area.lat} lng={area.lng} name={capitalizeSuburb(area.name)} />
                    <div className='p-2'>
                      <h5 className={styles.cardTitle}>{capitalizeSuburb(area.name)}</h5>
                      <p className={styles.cardText}>{area.desc}</p>
                      <Link href={`/area-we-serve/painting/${area.name}`} className={styles.moreDetails}>More Details</Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <CostEstimationWidgetPrompt />
      <FooterV1 />
    </>
  );
};

export default ServiceAreas;