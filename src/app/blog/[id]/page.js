import React from 'react';
import qs from 'qs'
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import BlogDetailsContent from '@/src/components/blog/BlogDetailsContent';
import BlogV1Data from '../../../../public/assets/jsonData/blog/BlogV1Data.json'
import HeaderV1 from '@/src/components/header/HeaderV1';
import NotFound from '../../not-found';
import Hero from '@/src/components/Hero/Hero';

export const metadata = {
    title: "Blog Details - Euildint Construction Building NextJS Template"
}

async function fetchCurrentArticle(slug) {
  if (!slug) {
    console.error('Error: No slug provided');
    return null;
  }

  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        cover: {
          fields: ['url', 'alternativeText'],
        },
        author: {
          fields: ['name'],
        },
        category: {
          fields: ['name'],
        },
        blocks: {
          on: {
            'shared.rich-text': { populate: '*' },
            'shared.media': { populate: { file: true } },
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const apiUrl = `https://funny-virtue-0648592741.strapiapp.com/api/articles?${query}`;
  // console.log('Strapi API URL:', apiUrl); // Debug: Log the URL

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status}`);
      return null;
    }
    const data = await res.json();
    console.log('Strapi response:', JSON.stringify(data, null, 2));                     

    if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
      console.error('No blog found for slug:', slug);
      return null;
    }

    if (data.data.length > 1) {
      console.warn('Multiple blogs returned for slug:', slug, 'Returning first match');
    }

    return data.data[0]; // Return the matching blog
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

async function fetchNextArticle(currentPublishedAt) {
  const query = qs.stringify(
    {
      filters: {
        publishedAt: {
          $gt: currentPublishedAt,
        },
      },
      sort: ['publishedAt:asc'],
      pagination: {
        limit: 1,
      },
      fields: ['title', 'slug'], // Only title and slug needed
      populate: {
        cover: {
          fields: ['url', 'alternativeText'], // Thumbnail
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const apiUrl = `https://funny-virtue-0648592741.strapiapp.com/api/articles?${query}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.data[0] || null;
}

async function fetchPreviousArticle(currentPublishedAt) {
  const query = qs.stringify(
    {
      filters: {
        publishedAt: {
          $lt: currentPublishedAt,
        },
      },
      sort: ['publishedAt:desc'],
      pagination: {
        limit: 1,
      },
      fields: ['title', 'slug'], // Only title and slug needed
      populate: {
        cover: {
          fields: ['url', 'alternativeText'], // Thumbnail
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const apiUrl = `https://funny-virtue-0648592741.strapiapp.com/api/articles?${query}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.data[0] || null;
}

// export async function getServerSideProps({ params }) {
//   const { slug } = params;
  
//   const currentArticle = await fetchCurrentArticle(slug);
  
//   if (!currentArticle) {
//     return { notFound: true };
//   }
  
//   const currentPublishedAt = currentArticle.attributes.publishedAt;
  
//   // Parallel fetch for prev and next
//   const [nextArticle, previousArticle] = await Promise.all([
//     fetchNextArticle(currentPublishedAt),
//     fetchPreviousArticle(currentPublishedAt),
//   ]);
  
//   return {
//     props: {
//       currentArticle,
//       nextArticle,
//       previousArticle,
//     },
//   };
// }

  
async function generateMetadata({ params }) {
    const article = await fetchArticle(params.id);

    if (!article) return { title: 'Article Not Found' };
  
    const { title, description, cover } = article;
    const coverImageUrl = cover?.url || 'https://via.placeholder.com/1200x600';
    const blogUrl = `https://your-domain.com/blog-details/${params.id}`; // Replace with your domain
  
    return {
      title: `${title} | HomeFix Insights`,
      description,
      openGraph: {
        title,
        description,
        url: blogUrl,
        images: [{ url: coverImageUrl, width: 1200, height: 600, alt: title }],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [coverImageUrl],
      },
    };
  }

const SingleBlog = async ({ params }) => {
  const { id: slug } = params
    // console.log('Slug from params:', params); // Debug: Log the slug
    const blog = await fetchCurrentArticle(slug);

    if (!blog) {
        return <NotFound />;
    }

    // console.log(blog)
    const currentPublishedAt = blog.publishedAt;

    const [nextArticle, previousArticle] = await Promise.all([
      fetchNextArticle(currentPublishedAt),
      fetchPreviousArticle(currentPublishedAt),
    ]);

    console.log('Next Article:', nextArticle);

    return (
        <>
            <Hero 
                page={blog.title || 'Blog Details'}
                description="Get an instant, accurate estimate for your bathroom or kitchen renovation in Sydney using our free online cost calculator."
            />
            <BlogDetailsContent lsContent blogInfo={blog} nextArticle={nextArticle} previousArticle={previousArticle}/>
            <FooterV1 />
        </>
    );
};

export default SingleBlog;