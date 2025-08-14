import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterV1 from '@/src/components/footer/FooterV1';
import Hero from '@/src/components/Hero/Hero';
import CostEstimationWidgetPrompt from '@/src/components/service/CostEstimationWidgetPrompt';
import { getServiceContent } from '@/src/lib/data';
import NotFound from '../../../not-found';
import styles from './style.module.css';
import SuburbMap from '@/src/components/SuburbMap';
import QuoteSection from '@/src/components/QuoteSection';
import Image from 'next/image';


const areas = [
  { name: 'sydney-cbd', desc: '[SERVICE] services in the heart of Sydney, designed for apartments, townhouses, and commercial buildings.', lat: -33.8688, lng: 151.2093 },
  { name: 'inner-west-council', desc: 'The Inner West’s trusted team for reliable, efficient [SERVICE] for urban homes and strata buildings.', lat: -33.8964, lng: 151.1400 },
  { name: 'bayside-council', desc: 'Providing expert [SERVICE] services across Bayside to enhance homes with fresh, durable finishes.', lat: -33.9590, lng: 151.2234 },
  { name: 'randwick-council', desc: 'Expert [SERVICE] in Randwick to refresh and protect against sea air, heavy rains, and wear.', lat: -33.9142, lng: 151.2410 },
  { name: 'northern-beaches-council', desc: 'Offering weather-resistant [SERVICE] for Northern Beaches homes exposed to coastal elements.', lat: -33.7511, lng: 151.2874 },
  { name: 'mosman-council', desc: 'Premium [SERVICE] solutions in Mosman for high-end homes and coastal properties.', lat: -33.8278, lng: 151.2443 },
  { name: 'north-sydney-council', desc: 'Revitalizing North Sydney homes with top-quality [SERVICE] for dense urban environments.', lat: -33.8346, lng: 151.2071 },
  { name: 'willoughby-council', desc: 'Offering fast, efficient [SERVICE] across Willoughby to beautify homes with lasting color.', lat: -33.8050, lng: 151.2000 },
  { name: 'lane-cove-council', desc: 'Keeping Lane Cove properties vibrant with tailored [SERVICE] and surface enhancement solutions.', lat: -33.8130, lng: 151.1700 },
  { name: 'ku-ring-gai-council', desc: '[SERVICE] services in Ku-ring-gai built to last—ideal for leafy suburbs and multi-level properties.', lat: -33.7333, lng: 151.0833 },
  { name: 'hornsby-council', desc: 'Delivering professional [SERVICE] in Hornsby to refresh homes against weather and time.', lat: -33.7036, lng: 151.1009 },
  { name: 'ryde-council', desc: 'Protecting Ryde properties with smart [SERVICE] systems for interiors, exteriors, and more.', lat: -33.8118, lng: 151.1060 },
  { name: 'hunters-hill-council', desc: 'Hunters Hill homes are revitalized by our expert [SERVICE]—tailored for heritage and modern properties alike.', lat: -33.8333, lng: 151.1397 },
  { name: 'hills-shire-council', desc: 'The Hills District trusts Contact Building Services for high-quality, long-lasting [SERVICE] transformations.', lat: -33.7400, lng: 150.9900 },
  { name: 'blacktown-council', desc: 'Blacktown residents trust us for reliable, vibrant [SERVICE] solutions for all property types.', lat: -33.7710, lng: 150.9080 },
];

const subSuburbsByArea = {
  'sydney-cbd': [
    { name: 'Barangaroo', desc: 'Providing professional [SERVICE] in Barangaroo for modern apartments, offices, and waterfront properties.', lat: -33.8614, lng: 151.2017 },
    { name: 'The Rocks', desc: 'Expert [SERVICE] services in The Rocks for heritage buildings, pubs, and historic homes.', lat: -33.86, lng: 151.208 },
    { name: 'Millers Point', desc: '[SERVICE] solutions in Millers Point designed to refresh colonial architecture and contemporary residences.', lat: -33.86, lng: 151.210 },
    { name: 'Haymarket', desc: 'Delivering vibrant [SERVICE] in Haymarket for bustling commercial spaces and urban apartments.', lat: -33.880, lng: 151.210 },
    { name: 'Ultimo', desc: 'Trusted [SERVICE] in Ultimo to enhance student accommodations, tech hubs, and creative studios.', lat: -33.8792, lng: 151.1969 },
    { name: 'Pyrmont', desc: 'Professional [SERVICE] services in Pyrmont for harborside homes, casinos, and media offices.', lat: -33.8692, lng: 151.1924 },
    { name: 'Woolloomooloo', desc: '[SERVICE] experts in Woolloomooloo, protecting wharf apartments and luxury residences from coastal wear.', lat: -33.8692, lng: 151.225 },
    { name: 'Darlinghurst', desc: 'Comprehensive [SERVICE] in Darlinghurst for trendy cafes, Victorian terraces, and nightlife venues.', lat: -33.880, lng: 151.220 },
    { name: 'Surry Hills', desc: 'Tailored [SERVICE] in Surry Hills, revitalizing creative agencies, boutiques, and inner-city homes.', lat: -33.880, lng: 151.220 },
    { name: 'Potts Point', desc: 'High-quality [SERVICE] in Potts Point for elegant apartments, hotels, and art deco buildings.', lat: -33.870, lng: 151.224 },
    { name: 'Redfern', desc: 'Reliable [SERVICE] services in Redfern for street art-inspired homes, warehouses, and community spaces.', lat: -33.8917, lng: 151.2083 },
    { name: 'Glebe', desc: 'Expert [SERVICE] in Glebe to preserve bohemian charm in terraces, markets, and university surrounds.', lat: -33.8778, lng: 151.185 },
  ],
  'inner-west-council': [
    { name: 'Newtown', desc: 'Providing professional [SERVICE] in Newtown for terraces, bathrooms, and apartment buildings prone to wear.', lat: -33.900, lng: 151.180 },
    { name: 'Marrickville', desc: 'Expert [SERVICE] services in Marrickville for homes, units, and commercial properties.', lat: -33.910, lng: 151.160 },
    { name: 'Ashfield', desc: '[SERVICE] solutions in Ashfield designed to protect residential and commercial buildings from weather.', lat: -33.890, lng: 151.130 },
    { name: 'Leichhardt', desc: 'Delivering premium [SERVICE] across Leichhardt’s homes, units, and heritage properties.', lat: -33.880, lng: 151.160 },
    { name: 'Dulwich Hill', desc: 'Trusted [SERVICE] in Dulwich Hill to prevent damage and enhance homes.', lat: -33.900, lng: 151.140 },
    { name: 'Haberfield', desc: 'High-quality [SERVICE] in Haberfield for homes with tiled roofs, balconies, and older bathrooms.', lat: -33.880, lng: 151.140 },
    { name: 'Petersham', desc: 'Comprehensive [SERVICE] in Petersham for rooftops, basements, and strata-managed properties.', lat: -33.890, lng: 151.160 },
    { name: 'Stanmore', desc: '[SERVICE] experts in Stanmore, protecting inner-city homes from leaks and water ingress.', lat: -33.890, lng: 151.160 },
    { name: 'Annandale', desc: 'Delivering tailored [SERVICE] in Annandale, addressing specific needs of heritage and contemporary homes.', lat: -33.880, lng: 151.170 },
    { name: 'Balmain', desc: 'Specializing in [SERVICE] services in Balmain, protecting historic residences and modern homes.', lat: -33.860, lng: 151.180 },
    { name: 'Rozelle', desc: 'Offering professional [SERVICE] services in Rozelle, safeguarding properties from wear.', lat: -33.860, lng: 151.170 },
    { name: 'Enmore', desc: 'Vibrant [SERVICE] solutions in Enmore for creative spaces and residential properties.', lat: -33.900, lng: 151.170 },
  ],
  'bayside-council': [
    { name: 'Arncliffe', desc: 'Providing expert [SERVICE] in Arncliffe to enhance family homes and apartment complexes.', lat: -33.936, lng: 151.148 },
    { name: 'Banksia', desc: 'Expert [SERVICE] services in Banksia to revitalize suburban residences and local businesses.', lat: -33.945, lng: 151.142 },
    { name: 'Banksmeadow', desc: 'Industrial and commercial [SERVICE] solutions in Banksmeadow for warehouses and offices.', lat: -33.962, lng: 151.212 },
    { name: 'Bardwell Park', desc: 'Delivering durable [SERVICE] in Bardwell Park for parkside homes and units.', lat: -33.935, lng: 151.126 },
    { name: 'Bardwell Valley', desc: 'Trusted [SERVICE] in Bardwell Valley to protect valley homes from environmental wear.', lat: -33.933, lng: 151.133 },
    { name: 'Bexley', desc: 'High-quality [SERVICE] services in Bexley for heritage houses and modern apartments.', lat: -33.95, lng: 151.117 },
    { name: 'Bexley North', desc: 'Comprehensive [SERVICE] in Bexley North for family-oriented suburbs.', lat: -33.938, lng: 151.114 },
    { name: 'Botany', desc: 'Coastal [SERVICE] solutions in Botany to refresh homes near the bay.', lat: -33.946, lng: 151.196 },
    { name: 'Brighton-Le-Sands', desc: 'Beachside [SERVICE] in Brighton-Le-Sands for waterfront properties and restaurants.', lat: -33.96, lng: 151.158 },
    { name: 'Carlton', desc: 'Professional [SERVICE] in Carlton for residential and commercial spaces.', lat: -33.972, lng: 151.121 },
    { name: 'Daceyville', desc: 'Tailored [SERVICE] in Daceyville for garden city style homes.', lat: -33.93, lng: 151.225 },
    { name: 'Dolls Point', desc: 'Expert [SERVICE] in Dolls Point to enhance seaside apartments and houses.', lat: -33.994, lng: 151.145 },
  ],
  // Continue adding for other areas with researched lat, lng values
  'randwick-council': [
    { name: 'Centennial Park', desc: 'Providing professional [SERVICE] in Centennial Park for luxury homes and park-adjacent properties.', lat: -33.896, lng: 151.232 },
    { name: 'Chifley', desc: 'Expert [SERVICE] services in Chifley to protect coastal residences from salt and wind.', lat: -33.967, lng: 151.241 },
    { name: 'Clovelly', desc: 'Beachside [SERVICE] solutions in Clovelly for apartments and family homes.', lat: -33.912, lng: 151.258 },
    { name: 'Coogee', desc: 'Vibrant [SERVICE] in Coogee for seaside units, cafes, and hotels.', lat: -33.92, lng: 151.255 },
    { name: 'Kensington', desc: 'Comprehensive [SERVICE] in Kensington for university surrounds and residential areas.', lat: -33.92, lng: 151.223 },
    { name: 'Kingsford', desc: 'Affordable [SERVICE] services in Kingsford for student housing and family dwellings.', lat: -33.924, lng: 151.228 },
    { name: 'La Perouse', desc: 'Durable [SERVICE] in La Perouse to withstand coastal conditions for historic sites.', lat: -34.0, lng: 151.233 },
    { name: 'Little Bay', desc: 'Premium [SERVICE] in Little Bay for modern developments and golf course views.', lat: -33.981, lng: 151.244 },
    { name: 'Malabar', desc: 'Protective [SERVICE] solutions in Malabar for beachfront properties.', lat: -33.962, lng: 151.248 },
    { name: 'Maroubra', desc: 'Expert [SERVICE] in Maroubra to refresh surfside homes and apartments.', lat: -33.95, lng: 151.237 },
    { name: 'Matraville', desc: 'Reliable [SERVICE] services in Matraville for suburban family homes.', lat: -33.963, lng: 151.231 },
    { name: 'Randwick', desc: 'Tailored [SERVICE] in Randwick for racecourse-adjacent residences and businesses.', lat: -33.914, lng: 151.241 },
  ],
  'northern-beaches-council': [
    { name: 'Avalon Beach', desc: 'Weather-resistant [SERVICE] in Avalon Beach for coastal homes and beach houses.', lat: -33.633, lng: 151.327 },
    // Add more with coords
  ],
  // Similarly for all other councils
};

export async function generateStaticParams() {
  const services = ['painting', 'general-fixes', 'tiling', 'waterproofing'];
  return services.flatMap(service => areas.map(area => ({ service, area: area.name })));
}

export const metadata = {
  title: 'Painting Areas - Contact Building Services',
};

const AreaPage = ({ params = {} }) => {
  const { service, area: areaName } = params;
  const content = getServiceContent(service);
  const areaData = areas.find(a => a.name === areaName);
  const subSuburbs = subSuburbsByArea[areaName] || [];

  // Define images for painting categories (interior, exterior, commercial, etc.). Use actual Strapi URLs or placeholders.
  const serviceImages = {
    'Interior Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/interior_painting_edaae691d1.jpg',
    'Exterior Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/exterior_painting_6c475253fe.jpg',
    'Commercial Painting': 'https://funny-virtue-0648592741.media.strapiapp.com/commercial_painting_4339a4d7a4.jpg',
    // Add more categories as needed, e.g., 'Strata Painting', 'Roof Painting', etc.
    // For non-painting services, you can extend this object or handle conditionally based on 'service'
  };

  if (!content.title || !areaData) {
    return <NotFound />;
  }

  const capitalizeSuburb = (name) => {
    return name.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const displayArea = capitalizeSuburb(areaName);
  const displayService = service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ');

  const getServiceIcon = (serviceItem) => {
    if (serviceItem.includes('Painting')) return 'bi-brush-fill';
    if (serviceItem.includes('Fixes')) return 'bi-tools';
    if (serviceItem.includes('Tiling')) return 'bi-grid-3x3-gap-fill';
    if (serviceItem.includes('Waterproofing')) return 'bi-droplet-fill';
    return 'bi-gear-fill';
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
              'areaServed': subSuburbs.map((sub) => ({ '@type': 'Place', 'name': sub.name })),
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
        page={`${displayService} in ${displayArea}`}
        description={`Expert ${service} services across all ${displayArea} suburbs. Transform your property with Contact Building Services, backed by 15+ years of experience.`}
      />

      <div className={styles.container}>
        <div className="row">
          <div className={styles.sidebar + " col-md-3"}>
            <div className={styles.sidebarInner}>
              <h3 className={styles.sidebarHeading}>
                Areas We Serve
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
                  At <strong>Contact Building Services</strong>, we offer high-quality {service} services in <strong>{displayArea}</strong>, revitalizing homes, 
                  multi-story apartments, traditional buildings, and commercial spaces with fresh, durable finishes. Our experienced team applies top-quality paints 
                  and proven methods suited for urban architectures and busy city lifestyles. Whether you need interior wall refreshing, exterior weatherproofing, 
                  or full property makeovers, we&apos;re committed to delivering vibrant, long-lasting results that enhance aesthetics and protection year-round.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>Our {displayService} Services in {displayArea}</h2>
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
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />{displayArea} Experts: Apartment, commercial, and strata {service}.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Covering {displayArea}: {subSuburbs.slice(0, 4).map(s => s.name).join(', ')}, and beyond.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Certified Professionals: Over 15 years of {service} expertise.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Premium Materials: High-quality, durable coatings.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Cost-Effective Pricing: Competitive rates with free consultations.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Guaranteed Finishes: Industry-leading warranties.</li>
                  <li className={styles.listItem}><i className={`bi bi-check-circle-fill ${styles.listIcon}`} />Free On-Site Estimate: Tailored quotes for your project.</li>
                </ul>
              </div>
              <QuoteSection service={service} area={areaName} />
            </section>

            <section className={styles.section}>
              <div className={styles.headerWrapper}>
                <h2 className={styles.heading}>{displayService} in {displayArea} Suburbs</h2>
                <p className={`${styles.subheading} lead`}>Trusted {displayService} services across {displayArea} and nearby suburbs. </p>
              </div>
              <div className={styles.grid}>
                {subSuburbs.map((sub, idx) => (
                  <div className={styles.card} key={idx}>
                    <SuburbMap lat={sub.lat} lng={sub.lng} name={sub.name} />
                    <div className='p-2'>
                      <h5 className={styles.cardTitle}>{sub.name}</h5>
                      <p className={styles.cardText}>{sub.desc}</p>
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

export default AreaPage;