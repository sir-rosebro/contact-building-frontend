export const services = [
  "painting",
  "general-fixes",
  "tiling",
  "waterproofing",
  "renovations"
];
export const suburbs = [
  "sydney-cbd",
  "inner-west-council",
  "bayside-council",
  "randwick-council",
  "northern-beaches-council",
  "mosman-council",
  "north-sydney-council",
  "willoughby-council",
  "lane-cove-council",
  "ku-ring-gai-council",
  "hornsby-council",
  "ryde-council",
  "hunters-hill-council",
  "hills-shire-council",
  "blacktown-council",
];

export const getServiceContent = (service) => {
  switch (service) {
    case "painting":
      return {
        title: "Painting Services in Sydney | Professional Painters",
        intro:
          "Transform your property with our expert painting services across Sydney suburbs. We offer interior, exterior, and commercial painting solutions for homes and businesses using high-quality materials.",
        heroTitle: "Professional Painting in Sydney",
        servicesList: [
          "Interior Painting: Vibrant, lasting finishes for homes and apartments. Our interior painting services bring new life to your living spaces with high-quality, low-VOC paints that are safe for families and pets.",
          "Exterior Painting: Weather-resistant coatings for durability. Protect your property from Sydney&apos;s harsh weather with premium, fade-resistant paints that enhance curb appeal and increase value.",
          "Commercial Painting: High-quality finishes for offices and retail spaces. We minimize disruption to your business with flexible scheduling and efficient execution for professional results.",
        ],
        whyChoose:
          "Skilled craftsmen, premium paints, and 15+ years of trusted service in Sydney.",
      };
    case "general-fixes":
      return {
        title: "General Fixes in Sydney | Expert Handyman Services",
        intro:
          "Reliable repairs and maintenance services across Sydney suburbs. Our handyman team handles plumbing, electrical, carpentry, and more for homes and businesses with quick, efficient solutions.",
        heroTitle: "Expert General Fixes Across Sydney",
        servicesList: [
          "Plumbing Repairs: Fixing leaks, pipes, and fixtures promptly. We handle everything from minor drips to major installations, ensuring your plumbing system runs smoothly and efficiently.",
          "Electrical Fixes: Safe, compliant solutions for lighting and wiring. Our licensed electricians troubleshoot and repair electrical issues, prioritizing safety and energy efficiency.",
          "Carpentry: Custom repairs for doors, frames, and furniture. We restore and build wooden structures with precision, using quality materials for long-lasting results.",
        ],
        whyChoose:
          "Fast, affordable, and professional handyman services with over 15 years of expertise.",
      };
    case "tiling":
      return {
        title: "Tiling Services in Sydney | Precision Tile Installation",
        intro:
          "High-quality tiling services across Sydney suburbs. We specialize in bathroom, kitchen, and outdoor tiling for homes and businesses, delivering durable and stylish installations.",
        heroTitle: "Precision Tiling for Sydney Properties",
        servicesList: [
          "Bathroom Tiling: Waterproof and stylish designs for wet areas. We create beautiful, functional bathrooms with expert tile selection and installation techniques.",
          "Kitchen Tiling: Durable backsplashes and floors for high-traffic areas. Our kitchen tiling enhances aesthetics while providing easy-to-clean, long-lasting surfaces.",
          "Outdoor Tiling: Patios and terraces with weather-resistant materials. We install tiles that withstand Sydney&apos;s climate, creating inviting outdoor living spaces.",
        ],
        whyChoose:
          "Expert tilers, premium materials, and flawless installations across Sydney.",
      };
    case "waterproofing":
      return {
        title: "Waterproofing Services in Sydney | Leak Protection",
        intro:
          "Protect your property from leaks and moisture with our expert waterproofing services across Sydney suburbs. We provide comprehensive solutions for bathrooms, balconies, basements, and roofs in homes and businesses.",
        heroTitle: "Expert Waterproofing in Sydney",
        servicesList: [
          "Bathroom & Shower Waterproofing: Prevent leaks in wet areas with high-quality membranes. Our solutions ensure long-term protection against water damage and mold growth in humid environments.",
          "Balcony & Terrace Waterproofing: Durable protection for outdoor spaces against rain and weathering. We apply weather-resistant sealants to safeguard your balconies from water ingress and structural damage.",
          "Basement & Roof Waterproofing: Guard against rain and groundwater with comprehensive sealing. Our basement and roof waterproofing prevents flooding and extends the life of your property&apos;s foundation.",
        ],
        whyChoose:
          "Certified specialists, premium materials, and 15+ years of reliable service.",
      };
    case "renovations":
      return {
        title: "Renovations Services in Sydney | Bathroom & Kitchen Specialists",
        intro:
          "Elevate your home with our specialized renovation services across Sydney suburbs. We focus exclusively on bathroom and kitchen renovations for residential properties, delivering modern, functional transformations using quality materials.",
        heroTitle: "Expert Bathroom & Kitchen Renovations in Sydney",
        servicesList: [
          "Bathroom Renovations: Complete makeovers for modern, spa-like retreats. We handle everything from layout design to fixture installation, creating waterproof, stylish bathrooms tailored to your needs.",
          "Kitchen Renovations: Functional upgrades for contemporary cooking spaces. Our kitchen renovations optimize workflow with custom cabinetry, countertops, and appliances for efficient, beautiful results.",
        ],
        whyChoose:
          "Specialized renovators with premium materials and 15+ years of trusted service in Sydney.",
      };
    default:
      return {};
  }
};

export const getSuburbBlurb = (service, suburb) => {
  const displaySuburb = suburb.charAt(0).toUpperCase() + suburb.slice(1).replace('-', ' ');
  switch (service) {
    case 'painting':
      return `Professional painting services in ${displaySuburb}, refreshing homes and businesses with vibrant, durable finishes by Contact Building Services.`;
    case 'general-fixes':
      return `Expert general fixes in ${displaySuburb}, covering plumbing, electrical, and carpentry with 15+ years of Sydney experience.`;
    case 'tiling':
      return `Precision tiling services in ${displaySuburb}, ideal for modern bathrooms, kitchens, and outdoor spaces by Contact Building Services.`;
    case 'waterproofing':
      return `Reliable waterproofing in ${displaySuburb}, protecting properties from leaks and moisture in Sydney’s climate with our expert team.`;
    case 'renovations':
      return `Bathroom and kitchen renovations in ${displaySuburb}, transforming spaces with modern designs by Contact Building Services.`;
    default:
      return '';
  }
};