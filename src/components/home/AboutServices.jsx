'use client';

import Image from "next/image";

export default function AboutContactBuildingServices() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-md-6">
            {/* <h2 className="fw-bold mb-3">Introducing Contact Building Services</h2> */}
            <p className="text-muted">
              With over 15 years of hands-on experience, Contact Building Services is your trusted partner for renovations, handyman work, and building maintenance across Sydney.
            </p>
            <p className="text-muted">
              Our team is made up of seasoned professionals who have worked in both residential and commercial spaces. We bring craftsmanship, reliability, and a deep understanding of Sydney’s unique building regulations.
            </p>
            <p className="text-muted">
              From fixing minor issues to handling full renovations, we’re here to make property upkeep stress-free and professional.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 text-center">
            <Image 
                src="/assets/images/resource/main-service.jpg"
                width={500} 
                height={233} 
                alt="Technician from behind with Contact Building Services on uniform" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
