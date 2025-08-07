import React from 'react';
import FooterV1 from '@/src/components/footer/FooterV1';
import ServiceDetailsContent from '@/src/components/service/ServiceDetailsContent';
import ServiceV3Data from '../../../../public/assets/jsonData/service/ServiceV3Data.json'
import NotFound from '../../not-found';
import TilingDetailsContent from '../../../components/service/TilingDetailsContent'

import Hero from '@/src/components/Hero/Hero';
import CostEstimationWidgetPrompt from '@/src/components/service/CostEstimationWidgetPrompt';

export const metadata = {
    title: "Service Details - Euildint Construction Building NextJS Template"
}

const SingleService = ({ params = {} }) => {

    const { id } = params
    const data = ServiceV3Data.serviceData.filter(service => service.id === parseInt(id))[0]

    // if (!data) {
    //     return NotFound();
    // }

    return (
        <>
            <Hero
                page="Tiling Services in Sydney"
                description="Professional tiling services in Sydney offer high-quality floor and wall tiling solutions. Whether it's updating a bathroom or installing outdoor patios, skilled tilers ensure a precise, durable finish with attention to detail."
            />
            <TilingDetailsContent serviceInfo={data} />
            <CostEstimationWidgetPrompt />
            <FooterV1 />
        </>
    );
};

export default SingleService;