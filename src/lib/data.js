export const services = ['painting', 'general-fixes', 'tiling', 'waterproofing'];

export const suburbs = [
  'sydney-cbd', 'inner-west-council', 'bayside-council', 'randwick-council', 'northern-beaches-council', 'mosman-council', 'north-sydney-council', 'willoughby-council', 'lane-cove-council', 'ku-ring-gai-council', 'hornsby-council', 'ryde-council', 'hunters-hill-council', 'hills-shire-council', 'blacktown-council'
];

export const getServiceContent = (service) => {
  switch (service) {
    case 'painting':
      return {
        title: 'Painting Services in Sydney | Professional Painters',
        intro: 'Transform your property with our expert painting services across Sydney suburbs for homes and businesses.',
        heroTitle: 'Professional Painting in Sydney',
        servicesList: [
          'Interior Painting: Vibrant, lasting finishes for homes and apartments. Our interior painting services bring new life to your living spaces with high-quality, low-VOC paints that are safe for families and pets. We handle everything from preparation to cleanup, ensuring a flawless finish that lasts for years.',
          'Exterior Painting: Weather-resistant coatings for durability. Protect your property from Sydney\'s harsh weather conditions with our exterior painting solutions. We use premium, fade-resistant paints that withstand rain, sun, and wind, enhancing curb appeal and increasing property value.',
          'Commercial Painting: High-quality finishes for offices and retail spaces. Our commercial painting services are designed to minimize disruption to your business. With flexible scheduling and efficient execution, we deliver professional results that create an inviting atmosphere for customers and employees alike.',
        ],
        whyChoose: 'Skilled craftsmen, premium paints, and 15+ years of trusted service in Sydney.',
      };
    case 'general-fixes':
      return {
        title: 'General Fixes in Sydney | Expert Handyman Services',
        intro: 'Reliable repairs and maintenance for homes and businesses in Sydney.',
        heroTitle: 'Expert General Fixes Across Sydney',
        servicesList: [
          'Plumbing Repairs: Leaks, pipes, and fixtures.',
          'Electrical Fixes: Safe, compliant solutions for lighting and wiring.',
          'Carpentry: Custom repairs for doors, frames, and furniture.',
        ],
        whyChoose: 'Fast, affordable, and professional handyman services with over 15 years of expertise.',
      };
    case 'tiling':
      return {
        title: 'Tiling Services in Sydney | Precision Tile Installation',
        intro: 'High-quality tiling for bathrooms, kitchens, and floors in Sydney.',
        heroTitle: 'Precision Tiling for Sydney Properties',
        servicesList: [
          'Bathroom Tiling: Waterproof and stylish designs.',
          'Kitchen Tiling: Durable backsplashes and floors.',
          'Outdoor Tiling: Patios and terraces with lasting quality.',
        ],
        whyChoose: 'Expert tilers, premium materials, and flawless installations across Sydney.',
      };
    case 'waterproofing':
      return {
        title: 'Waterproofing Services in Sydney | Leak Protection',
        intro: 'Protect your property from leaks and moisture with our expert waterproofing solutions in Sydney.',
        heroTitle: 'Expert Waterproofing in Sydney',
        servicesList: [
          'Bathroom & Shower Waterproofing: Prevent leaks in wet areas.',
          'Balcony & Terrace: Durable protection for outdoor spaces.',
          'Basement & Roof: Guard against rain and groundwater.',
        ],
        whyChoose: 'Certified specialists, premium materials, and 15+ years of reliable service.',
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
    default:
      return '';
  }
};