import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; 
import FooterV1 from '@/src/components/footer/FooterV1';
import Hero from '@/src/components/Hero/Hero';
import CostEstimationWidgetPrompt from '@/src/components/service/CostEstimationWidgetPrompt';
import { getServiceContent, getSuburbBlurb, suburbs } from '@/src/lib/data';
import NotFound from '../../not-found';
import styles from './style.module.css';
import SuburbMap from '@/src/components/SuburbMap'; // Assume this is created as 'use client'
import QuoteSection from '@/src/components/QuoteSection';

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
  return ['painting', 'general-fixes', 'tiling', 'waterproofing', 'bathroom-renovations', 'kitchen-renovations'].map((service) => ({ service }));
}

export const metadata = {
  title: 'Painting Areas - Contact Building Services',
};

  // Define images for painting categories (interior, exterior, commercial, etc.). Use actual Strapi URLs or placeholders.
  const serviceImages = {
    'Interior Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/interior_painting_edaae691d1.jpg',
    'Exterior Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/exterior_painting_6c475253fe.jpg',
    'Commercial Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/commercial_painting_4339a4d7a4.jpg',
    // Add more categories as needed, e.g., 'Strata Painting', 'Roof Painting', etc.
    // For non-painting services, you can extend this object or handle conditionally based on 'service'
  };

const ServiceAreas = ({ params = {} }) => {
  const { service } = params;
  const displayArea = "Sydney"; // Default area for painting services
  const content = getServiceContent(service);
  const displayService = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const serviceLower = service.split('-').join(' ');

  if (!content.title) {
    return <NotFound />;
  }

  const capitalizeSuburb = (name) => {
    return name.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getServiceIcon = (serviceItem) => {
    if (serviceItem.includes('Painting')) return 'bi-brush-fill';
    if (serviceItem.includes('Fixes')) return 'bi-tools';
    if (serviceItem.includes('Tiling')) return 'bi-grid-3x3-gap-fill';
    if (serviceItem.includes('Waterproofing')) return 'bi-droplet-fill';
    return 'bi-gear-fill';
  };

  const areasWithDesc = areas.map(area => ({
    ...area,
    desc: area.desc.replace(/Painting/g, displayService).replace(/painting/g, serviceLower)
  }));

  const introTemplate = `At Contact Building Services, we offer high-quality ${serviceLower} services in Sydney CBD, revitalizing homes, multi-story apartments, traditional buildings, and commercial spaces with fresh, durable finishes. Our experienced team applies top-quality materials and proven methods suited for urban architectures and busy city lifestyles. Whether you need interior updates, exterior protections, or full property makeovers, we're committed to delivering long-lasting results that enhance aesthetics and protection year-round.`;

  const whyChooseItems = [
    `CBD Experts: Apartment, commercial, and strata ${serviceLower}.`,
    `Covering Sydney: Sydney City, Surry Hills, Pyrmont, Darlinghurst, and beyond.`,
    `Certified Professionals: Over 15 years of ${serviceLower} expertise.`,
    `Premium Materials: High-quality, durable products.`,
    `Cost-Effective Pricing: Competitive rates with free consultations.`,
    `Guaranteed Work: Industry-leading warranties.`,
    `Free On-Site Estimate: Tailored quotes for your project.`,
  ];

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Expert ${serviceLower} services in Sydney CBD, Hills District, Inner West, Randwick, Northern Beaches, and more. High-quality solutions by Contact Building Services with 15+ years of experience. Free quote: [Your Phone Number].`}
        />
        <meta
          name="keywords"
          content={`${serviceLower} services Sydney, ${serviceLower} Sydney CBD, ${serviceLower} Hills District, ${serviceLower} Surry Hills, ${serviceLower} Inner West, ${serviceLower} Northern Beaches`}
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
            'description': `Professional ${serviceLower} services for homes and businesses across Sydney, backed by over 15 years of experience.`,
            'service': {
              '@type': 'Service',
              'serviceType': displayService,
              'description': `Expert ${serviceLower} for homes, apartments, and commercial properties across Sydney suburbs.`,
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
                'name': `How long does ${serviceLower} last in Sydney?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Our ${serviceLower} services use premium materials suited for Sydney’s climate, ensuring vibrant finishes last 7–10 years.`,
                },
              },
              {
                '@type': 'Question',
                'name': `What’s the cost of ${serviceLower} in Sydney CBD?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Costs vary by project size and scope. Contact us for a free, tailored quote for your Sydney CBD property.',
                },
              },
              {
                '@type': 'Question',
                'name': `Do you offer warranties on ${serviceLower} services?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Yes, we provide industry-leading warranties for all ${serviceLower} projects across Sydney.`,
                },
              },
            ],
          })}
        </script>
      </Head>

      <Hero
        page={`${displayService} Areas in Sydney`}
        description={`Expert ${serviceLower} services across all Sydney suburbs. Transform your property with Contact Building Services, backed by 15+ years of experience.`}
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
                    <Link href={`/area-we-serve/${service}/${area.name}`} className={styles.sidebarLink}>
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
              <div className="service-details-thumb mb-5">
                    <Image
                      src="https://funny-virtue-0648592741.media.strapiapp.com/4426_07f09425d1.jpg"
                      alt="House and commercial painting in Sydney by Contact Building Services"
                      className="img-fluid rounded shadow-sm"
                      height={500}
                      width={1000}
                      priority
                    />
                  </div>
                  <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Contact Building Services – Expert {displayService} Services in {displayArea}</h2>
                <p className={`${styles.subheading} lead`}>Your Reliable {displayService} Professionals in {displayArea} & Nearby Regions</p>
                <p className={styles.intro}>
                  {introTemplate}
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Our {displayService} Services in Sydney</h2>
                <p className={`${styles.subheading} lead`}>{content.intro}</p>
              </div>
              <div className={styles.grid}>
              {content.servicesList.map((item, idx) => {
                  const title = item.split(':')[0].trim();
                  const desc = item.split(':')[1]?.trim() || '';
                  const imageSrc = serviceImages[title] || 'https://funny-virtue-0648592741.media.strapiapp.com/placeholder_service.jpg'; // Fallback image
                  return (
                    <div className={styles.card} key={idx}>
                      <div className={styles.cardImageWrapper}>
                        <Image
                          src={imageSrc}
                          alt={title}
                          width={400}
                          height={250}
                          className={styles.cardImage}
                          priority={idx < 3}
                        />
                        <div className={styles.cardOverlay}>
                          <i className={`bi ${getServiceIcon(item)} ${styles.iconOverlay}`} />
                        </div>
                        <div className={styles.numberedTitle}>
                          {`${idx + 1}. ${title}`}
                        </div>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={styles.cardText}>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Why Choose Contact Building Services?</h2>
                <p className={`${styles.subheading} lead`}>{content.whyChoose}</p>
              </div>
              <div className={styles.whyChooseList}>
                <ul className={styles.list}>
                  {whyChooseItems.map((item, idx) => (
                    <li key={idx} className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />{item}</li>
                  ))}
                </ul>
              </div>
              <QuoteSection service={service}/>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Areas We Serve for {displayService} service</h2>
                <p className={`${styles.subheading} lead`}>
                  Contact Building Services delivers expert {displayService} service across Sydney, from urban apartments in Sydney CBD to coastal homes in Northern Beaches, with 15+ years of craftsmanship.
                </p>
              </div>
              <div className={styles.grid}>
                {areasWithDesc.map((area, idx) => (
                  <div className={styles.card} key={idx}>
                    <SuburbMap lat={area.lat} lng={area.lng} name={capitalizeSuburb(area.name)} />
                    <div className='p-2'>
                      <h5 className={styles.cardTitle}>{capitalizeSuburb(area.name)}</h5>
                      <p className={styles.cardText}>{area.desc}</p>
                      <Link href={`/area-we-serve/${service}/${area.name}`} className={styles.moreDetails}>More Details</Link>
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