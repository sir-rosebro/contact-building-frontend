"use client"

import Image from 'next/image';
import first from '@/public/assets/images/service/general-fixes.jpg';
import professionalIcon from '@/public/assets/images/about/icons/professional_icon.png'
import trustIcon from '@/public/assets/images/about/icons/trust_icon.png'
import qualityIcon from '@/public/assets/images/about/icons/quality_icon.png'
import affordableIcon from '@/public/assets/images/about/icons/affordable.png'
import localExpertiseIcon from '@/public/assets/images/about/icons/local_expertise.png'
import whyUsImage from '@/public/assets/images/why-us/why-us.jpg'
import leafySVG from '@/public/assets/images/leaf-mask.svg'
import siteOnLaptop from '@/public/assets/images/why-us/site-laptop.png';
import paintingBucketImg from '@/public/assets/images/why-us/painting-buckect.jpg'
import renovationImg from '@/public/assets/images/why-us/renovation.jpg'
import Hero from '../Hero/Hero';

import './WhyChooseUs.css'

export default function WaterproofingHero() {
  return (
    <>
    <section className="pb-5 bg-white border-bottom test">
      <Hero page="Why Us" description="Reliable, Affordable, and Local Handyman Services in Sydney"/>
      <div className="container mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5 order-md-1">
            <h1 className="display-5 fw-bold text-dark my-3">
              Welcome to Contact Building Service!
            </h1>
            <p className="lead text-muted">
              For over 15 years, we have been providing top-quality handyman services to the residents of Sydney. Our small but dedicated team of skilled professionals 
              is committed to delivering exceptional workmanship and unparalleled customer service.
            </p>

            <div className="row mb-3 theme-background shadow">
              <div className="col-2 text-center d-flex justify-content-center align-items-center p-0">
                <div className='rounded-orange'>
                  <Image className="orangeMask" src={professionalIcon} height={50} width={50} alt="professsional icon" />
                </div>
              </div>
              <div className="col-10">
                <strong>Experienced Professionals</strong>
                <p className="text-muted mb-2">
                  Our team consists of skilled handymen with extensive training and years of hands-on experience in home repairs and maintenance.
                </p>
              </div>
            </div>

            <div className="row mb-3 theme-background shadow">
              <div className="col-2 text-center d-flex justify-content-center align-items-center p-0">
              <div className='rounded-orange'>
              <Image className='orangeMask' src={trustIcon} height={50} width={50} alt="professsional icon" />
              </div>
              </div>
              {/* Text Column */}
              <div className="col-10">
                <strong>Reliable and Trustworthy</strong>
                <p className="text-muted mb-2">
                  We thoroughly vet and background-check all our team members to ensure reliability and trustworthiness for your peace of mind.
                </p>
              </div>
            </div>

            <div className="row mb-3 theme-background shadow">
              {/* Icon Column */}
              <div className="col-2 text-center d-flex justify-content-center align-items-center p-0">
              <div className='rounded-orange'>
                <Image className='orangeMask' src={qualityIcon} height={50} width={50} alt="professsional icon" />
                </div>
              </div>
              {/* Text Column */}
              <div className="col-10">
                <strong>Quality Workmanship</strong>
                <p className="text-muted mb-2">
                  We use top-quality materials and the latest techniques to ensure every job meets the highest standards and exceeds your expectations.
                </p>
              </div>
            </div>

            <div className="row mb-3 theme-background shadow">
              {/* Icon Column */}
              <div className="col-2 text-center d-flex justify-content-center align-items-center p-0">
              <div className='rounded-orange'>
              <Image className='orangeMask' src={affordableIcon} height={50} width={50} alt="professsional icon" />
              </div>
              </div>
              {/* Text Column */}
              <div className="col-10">
                <strong>Affordable Rates</strong>
                <p className="text-muted mb-2">
                  We provide competitive pricing with clear, upfront quotes and no hidden fees, ensuring you get great value for top-notch services.
                </p>
              </div>
            </div>

            {/* <div className="row mb-3">
          
              <div className="col-2 text-center d-flex justify-content-center align-items-center">
                <Image className='orangeMask' src={localExpertiseIcon} height={50} width={50} alt="professsional icon" />
              </div>
         
              <div className="col-10">
                <strong>Local Expertise</strong>
                <p className="text-muted mb-2">
                  As a Sydney-based business, we understand the unique needs of local homes and provide tailored solutions perfect for Sydney’s climate and style.
                </p>
              </div>
            </div> */}

          </div>

          {/* Right: Image with rotated text */}
          <div className="col-md-6 order-md-2 position-relative text-center align-self-end">
            <div className="d-flex flex-column align-items-center">
              <Image
                src={whyUsImage}
                alt="Handyman Experts"
                className="rounded shadow"
                ßstyle={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <div
                className="text-white d-flex"
                style={{
                  background: 'var(--theme-color)',  // Dark orange color
                  padding: '1rem 2rem',
                  borderRadius: '3rem',
                  transform: 'translateY(-50%)',
                  gap: '1rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem' }}>Years Of Service</span>
                  <p className='fw-bold m-0'>15+</p>
                </div>
                <div className='border-start border-end border-white px-3 border-2 dashed-border'>
                  <span style={{ fontSize: '0.8rem' }}>Project Done</span>
                  <p className='fw-bold m-0'>1000</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem' }}>Happy Clients</span>
                  <p className='fw-bold m-0'>150+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="visionMission my-5">
        <div className="container">
          <div className="row g-4 align-items-center" style={{ marginBlock: '10rem' }}>

            <div className={`col-lg-6 imageContainer`}>
            <div className="imageWrapper">
        

          <div className="imageEightyPercent">
            <Image
              src={paintingBucketImg}
              alt="Handyman repairing a wall"
              fill
              className="image"
            />
          </div>

          <div className="imageFullHeight">
            <Image
              src={renovationImg}
              alt="Handyman fixing a kitchen sink"
              fill
              className="image"
            />
          </div>
        </div>

            </div>
            <div className="col-lg-6">
              <div className={`mb-4`}>
                <div>
                  <div className="d-flex align-items-center mb-3">
                    <h2>Vision and Mission</h2>
                  </div>
                  <p className='text-highlight'>
                  <span>Contact Building Services</span> is your expert handyman mate, forever committed to supporting our customers and communities in crafting exceptional 
                  homes.
                  </p>
                  <p className="card-text">
                    At Contact, our vision is to redefine home repair excellence in Sydney, transforming spaces with unmatched craftsmanship. Our mission is to deliver
                    exceptional handyman services with precision, care, and affordability, creating
                    lasting value for every home we touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="shadow container position-relative py-5 diagonal-split">
      <div className=" position-relative">
        <div className="row align-items-center justify-content-between">

          {/* Image Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="overflow-hidden">
              <Image
                src={siteOnLaptop}
                alt="Handyman Booking Screenshot"
                className="img-fluid"
                placeholder="blur"
                style={{ maxWidth: '500px' }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="col-md-5">
            <h2 className="mb-3">See What Makes Us Different</h2>
            <p className="text-muted">
              Booking a handyman has never been easier. Our simple online system lets you request quotes, book jobs, and manage everything from your phone or computer — no phone tag, no stress.
            </p>
            <ul className="list-unstyled mb-4">
              {[
                'Quick 60-second quote form',
                'Real-time job tracking',
                'Mobile-first design'
              ].map((text, i) => (
                <li key={i} className="d-flex align-items-center mb-2">
                  <span
                    className="d-inline-flex justify-content-center align-items-center rounded-circle me-2"
                    style={{
                      backgroundColor: '#ffe5cc',
                      width: '28px',
                      height: '28px',
                      color: 'var(--theme-color)',
                      fontSize: '1rem'
                    }}
                  >
                    <i className="bi bi-check"></i>
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <a
              href="/quote"
              className="btn text-white px-4 py-2"
              style={{
                backgroundColor: 'var(--theme-color)',
                borderRadius: '2rem',
              }}
            >
              Get Your Free Quote
            </a>
          </div>

        </div>
      </div>
    </section>

 
    </section>
    </>
  );
}




