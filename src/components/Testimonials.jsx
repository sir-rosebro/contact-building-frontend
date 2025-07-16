// components/Testimonials.js
//AIzaSyDoh5hxF_-IB-i5gkD-HYKnlrjEkKv51wM
import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "John repaired our roof in Bondi after a storm. Fast, reliable, and top-quality work!",
      name: "Sarah M.",
      role: "Homeowner, Bondi, Sydney",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "Fixed our plumbing in Surry Hills. Professional and affordable service!",
      name: "Michael T.",
      role: "Apartment Owner, Surry Hills, Sydney",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "Renovated our cafe in Newtown. Exceptional craftsmanship!",
      name: "Emily R.",
      role: "Business Owner, Newtown, Sydney",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote: "Installed lighting in our Manly home. Amazing results!",
      name: "David L.",
      role: "Homeowner, Manly, Sydney",
      image: "https://randomuser.me/api/portraits/men/88.jpg",
    },
  ];

  const serviceAreas = [
    "Bondi",
    "Surry Hills",
    "Newtown",
    "Manly",
    "Parramatta",
    "Chatswood",
    "Cronulla",
    "Sydney CBD",
  ];

  return (
    <section className={`${styles.serviceSection} py-5`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${styles.sectionTitle}`}>
          Our Sydney Service Area
        </h2>
        {/* Map Section */}
        <div className={`${styles.mapContainer} mb-5 position-relative`}>
          <Image
            src="/sydney-map.jpg" // Replace with your map image
            alt="Sydney Service Area Map"
            layout="fill"
            objectFit="cover"
            className={styles.mapImage}
            priority
          />
          <div className={`${styles.pin} position-absolute`}>
            <Image
              src="/map-pin.png" // Replace with your pin image
              alt="Service Location Pin"
              width={40}
              height={40}
              className={styles.pinImage}
            />
          </div>
          <div className={`${styles.descriptionBox} position-absolute bg-white p-3 shadow rounded`}>
            <h4>Sydney Handyman Services</h4>
            <p>
              We proudly serve the following Sydney areas:{" "}
              {serviceAreas.join(", ")}.
            </p>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="row g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={`${styles.testimonialCard} card border-0 shadow-sm h-100`}>
                <div className="card-body text-center">
                  <blockquote className={`blockquote mb-4 ${styles.quote}`}>
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`${styles.customerImage} rounded-circle me-3`}
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <p className={`text-muted ${styles.customerRole}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}