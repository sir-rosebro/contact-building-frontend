import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import ContactContent from '@/src/components/contact/ContactContent';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import Hero from '@/src/components/Hero/Hero';

export const metadata = {
    title: "Contact - Euildint Construction Building NextJS Template"
}

const Contact = () => {
    return (
        <>
            <Hero 
                page="Cost Estimation Calculator"
                description="Get an instant, accurate estimate for your bathroom or kitchen renovation in Sydney using our free online cost calculator."
            />
            <ContactContent />
            <FooterV1 />
        </>
    );
};

export default Contact;