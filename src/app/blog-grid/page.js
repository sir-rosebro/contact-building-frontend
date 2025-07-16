import React from 'react';
import BlogV2 from '@/src/components/blog/BlogV2';
import FooterV1 from '@/src/components/footer/FooterV1';
import Hero from '@/src/components/Hero/Hero';

export const metadata = {
  title: "Blog Grid - Euildint Construction Building NextJS Template"
};


const fetchBlogs = async () => {
  try {
    const res = await fetch(
        'https://funny-virtue-0648592741.strapiapp.com/api/articles?populate[cover][fields][0]=url&populate[cover][fields][1]=alternativeText&populate[author][fields][0]=name&populate[category][fields][0]=name',
        { cache: 'no-store' }
      );
    const data = await res.json();
    return data?.data || [];
  } catch (err) {       
    console.error('Error fetching blogs:', err);
    return [];
  }
};

const BlogGrid = async () => {
  const blogs = await fetchBlogs();
  // You can get first blog title for Hero from blogs[0]
  const heroTitle = blogs[0]?.attributes?.title || "Latest Blog Posts";

  return (
    <>
      <Hero 
        page={heroTitle}
        description="Get an instant, accurate estimate for your bathroom or kitchen renovation in Sydney using our free online cost calculator."
      />
      <BlogV2 blogs={blogs} />
      <FooterV1 />
    </>
  );
};

export default BlogGrid;
