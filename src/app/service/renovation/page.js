import React from 'react';
import FooterV1 from '@/src/components/footer/FooterV1';
import ServiceDetailsContent from '@/src/components/service/ServiceDetailsContent';
import ServiceV3Data from '../../../../public/assets/jsonData/service/ServiceV3Data.json'
import NotFound from '../../not-found';
import RenovationDetailsContent from '../../../components/service/RenovationDetailsContent'

import Hero from '@/src/components/Hero/Hero';
import CostEstimationWidgetPrompt from '@/src/components/service/CostEstimationWidgetPrompt';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = ServiceV3Data.serviceData.find(service => service.slug === slug);

  if (!data) {
    return {
      title: 'Not Found - Euildint Construction Building NextJS Template',
    };
  }

  return {
    title: `${data.title} - Euildint Construction Building NextJS Template`,
  };
}


export async function generateStaticParams() {
  return ServiceV3Data.serviceData.map(service => ({
    slug: service.slug,
  }));
}

const SingleService = ({ params = {} }) => {
  const { slug } = params;
  console.log("Service Slug:", slug);

  // Filter data by slug (add 'slug' field to your JSON if not present, e.g., 'bathroom-renovation')
  const data = ServiceV3Data.serviceData.find(service => service.slug === slug);

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      <Hero
        page={`${data.title} Services in Sydney`} // Dynamic based on data
        description={`Professional ${data.title.toLowerCase()} services in Sydney transform your home's essential spaces into modern, functional areas. From updating fixtures, tiling, and waterproofing to custom cabinetry, appliances, and layouts, experienced renovators deliver high-quality, durable results tailored to your style and needs.`}
      />
      <RenovationDetailsContent serviceInfo={data} />
      <CostEstimationWidgetPrompt />
      <FooterV1 />
    </>
  );
};

export default SingleService;