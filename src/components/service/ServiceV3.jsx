"use client";

import Link from "next/link";

const services = [
  {
    title: "Bathroom & Kitchen Renovation",
    description: "Upgrade your kitchen or bathroom with our expert remodeling.",
    image: "https://funny-virtue-0648592741.media.strapiapp.com/kitchen_renovation_7ea6b18a54.jpg",
    slug: "renovation",
  },
  {
    title: "Waterproofing",
    description: "Protect your property with high-quality waterproofing.",
    image: "https://funny-virtue-0648592741.media.strapiapp.com/water_proofing_875e0830df.jpg",
    slug: "waterproofing",
  },
  {
    title: "Painting",
    description: "Interior and exterior painting done with precision and care.",
    image: "https://funny-virtue-0648592741.media.strapiapp.com/paint_service_34aae5ebea.jpg",
    slug: "painting",
  },
  {
    title: "General Fixes",
    description: "Quick repairs and maintenance jobs, no matter how small.",
    image: "https://funny-virtue-0648592741.media.strapiapp.com/general_fixes_4d5f5869cd.jpg",
    slug: "general-fixes",
  },
  {
    title: "Tiling",
    description: "Professional tiling services for floors, walls, and more.",
    image: "https://funny-virtue-0648592741.media.strapiapp.com/6790_737f4e5a62.jpg",
    slug: "tiling",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-main-title work mb-4">
            <h2>Services We Offer</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-muted text-center mb-5" style={{ maxWidth: "700px" }}>
            From renovations, paintings, waterproofing, tiling, to repairs, we deliver reliable and expert handyman solutions you can trust.
          </p>
        </div>
        {/* Row 1 */}
        <div className="row g-4 mb-4">
          <div className="col-md-8">{renderService(services[0], true)}</div>
          <div className="col-md-4 d-flex flex-column gap-4">
            {renderService(services[1], false)}
            {renderService(services[2], false)}
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-4">
          <div className="col-md-6">{renderService(services[3], true)}</div>
          <div className="col-md-6">{renderService(services[4], true)}</div>
        </div>
      </div>
    </section>
  );
}

function renderService(service, large = false) {
  return (
    <Link href={`/service/${service.slug}`}>
      <div
        className={`card h-100 shadow-sm service-card ${large ? "large-card" : "small-card"}`}
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div className="card-img-overlay d-grid p-4">
          <div className="text-white">
            <h3 className="card-title fs-5 fw-bold mb-2" style={{ color: "var(--theme-color)" }}>
              {service.title}
            </h3>
            <div className="d-flex align-items-center gap-2">
              <p className="card-text fs-6 opacity-75 mb-0">{service.description}</p>
              <i
                className="bi bi-arrow-right fs-5"
                style={{ color: "var(--theme-color)" }}
                aria-label={`Learn more about ${service.title}`}
              ></i>
            </div>
          </div>
        </div>

        {/* Custom CSS for hover effect and responsive heights */}
        <style jsx>{`
          .service-card {
            transition: all 0.3s ease;
          }
          .service-card:hover {
            box-shadow: 0 4px 16px rgba(255, 102, 0, 0.3); /* var(--theme-color); shadow */
            filter: brightness(0.8);
          }
          .card-img-overlay {
            display: grid;
            align-content: end;
          }
          .large-card {
            min-height: 700px;
          }
          .small-card {
            min-height: 350px;
          }
          @media (max-width: 767.98px) {
            .large-card {
              min-height: 500px;
            }
            .small-card {
              min-height: 250px;
            }
          }
          @media (max-width: 575.98px) {
            .large-card {
              min-height: 400px;
            }
            .small-card {
              min-height: 200px;
            }
          }
        `}</style>
      </div>
    </Link>
  );
}