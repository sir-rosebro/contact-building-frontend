import React from 'react';
import AboutV2 from '@/src/components/about/AboutV2';
import BannerV2 from '@/src/components/banner/BannerV2';
import BlogV2 from '@/src/components/blog/BlogV2';
import BrandV1 from '@/src/components/brand/BrandV1';
import CallToActionV1 from '@/src/components/callToAction/CallToActionV1';
import FeatureV2 from '@/src/components/feature/FeatureV2';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderTopBarV2 from '@/src/components/header/HeaderTopBarV2';
import HeaderV2 from '@/src/components/header/HeaderV2';
import HistoryV1 from '@/src/components/history/HistoryV1';
import ServiceV2 from '@/src/components/service/ServiceV2';
import TeamV1 from '@/src/components/team/TeamV1';
import TestimonialV1 from '@/src/components/testimonial/TestimonialV1';

export const metadata = {
    title: "Home Two- Euildint Construction Building NextJS Template"
}

const Home2 = () => {
    return (
        <>
            <HeaderTopBarV2 topBarclassName="style-two" />
            <HeaderV2 />
            <BannerV2 />
            <FeatureV2 />
            <AboutV2 />
            <HistoryV1 />
            <CallToActionV1 />
            <ServiceV2 />
            <BrandV1 />
            <TeamV1 />
            <TestimonialV1 />
            <BlogV2 />
            <FooterV1 />
        </>
    );
};

export default Home2;