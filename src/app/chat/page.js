import React from 'react';

import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';

import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import Hero from '@/src/components/Hero/Hero';
import ChatInterface from '@/src/components/ChatInterface/ChatInterface';


export const metadata = {
    title: "About - Euildint Construction Building NextJS Template"
}

const About = () => {
    return (
        <>
            <HeaderV1 />
            <Hero page="Chat" />
                <ChatInterface/>
            <FooterV1 />
        </>
    );
};

export default About;