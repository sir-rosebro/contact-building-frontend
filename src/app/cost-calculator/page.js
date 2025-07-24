    import React from 'react';
import AboutV1 from '@/src/components/about/AboutV1';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import ContactV1 from '@/src/components/contact/ContactV1';
import FaqV2 from '@/src/components/faq/FaqV2';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import TeamV1 from '@/src/components/team/TeamV1';
import TestimonialV2 from '@/src/components/testimonial/TestimonialV2';
import PriceCalculator from '@/src/components/banner/PriceCalculator';
import Hero from '@/src/components/Hero/Hero';

export const metadata = {
    title: "About - Euildint Construction Building NextJS Template"
}

const About = () => {
    return (
        <>
            <Hero 
                page="Cost Estimation Calculator"
                description="Get an instant, accurate estimate for your bathroom or kitchen renovation in Sydney using our free online cost calculator."
            />
            <PriceCalculator/>
            <FooterV1/>
        </>
    );x
};

export default About;