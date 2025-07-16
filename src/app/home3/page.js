import React from 'react';
import AboutV3 from '@/src/components/about/AboutV3';
import BannerV3 from '@/src/components/banner/BannerV3';
import BlogV2 from '@/src/components/blog/BlogV2';
import BrandV1 from '@/src/components/brand/BrandV1';
import CallToActionV2 from '@/src/components/callToAction/CallToActionV2';
import ContactV1 from '@/src/components/contact/ContactV1';
import FaqV2 from '@/src/components/faq/FaqV2';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderTopBarV2 from '@/src/components/header/HeaderTopBarV2';
import HeaderV2 from '@/src/components/header/HeaderV2';
import WorkProgressV1 from '@/src/components/progress/WorkProgressV1';
import ServiceV3 from '@/src/components/service/ServiceV3';
import TestimonialV2 from '@/src/components/testimonial/TestimonialV2';

export const metadata = {
    title: "Home Three - Euildint Construction Building NextJS Template"
}

const Home3 = () => {
    return (
        <>
            <HeaderTopBarV2 topBarclassName="style-three" />
            <HeaderV2 headerclassName="three" />
            <BannerV3 />
            <AboutV3 />
            <ContactV1 />
            <ServiceV3 />
            <FaqV2 />
            <WorkProgressV1 />
            <CallToActionV2 />
            <TestimonialV2 />
            <BrandV1 />
            <BlogV2 />
            <FooterV1 />
        </>
    );
};

export default Home3;