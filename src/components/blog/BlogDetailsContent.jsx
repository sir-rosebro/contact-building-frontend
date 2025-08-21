import React from 'react';
import qs from 'qs';
import SearchWidget from '../widgets/SearchWidget';
import PopularPostWidget from '../widgets/PopularPostWidget';
import TagsWidget from '../widgets/TagsWidget';
import Image from 'next/image';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import blogTeam from '@/public/assets/images/blog/blog-team.png';
import BlogSlider from './BlogSlider';
import BlogComments from './BlogComments';
import BlogForm from '../form/BlogForm';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

import './blogDetailsContent.css';
import { notFound } from 'next/navigation';
import CTABlock from '../service/CTABlock';
import CostEstimationWidgetPrompt from '../service/CostEstimationWidgetPrompt';

const BlogDetailsContent = async ({ blogInfo, nextArticle, previousArticle }) => {
 
  const {
    title = 'Untitled',
    description = 'No description available',
    publishedAt = null,
    cover = null,
    author = null,
    category = null, 
    blocks = [],
  } = blogInfo;

  const coverImageUrl = cover?.url || 'https://via.placeholder.com/1200x600';

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Date unavailable';

  const blogUrl = `http://localhost:3002/blog-details/lnukmkbsn0iu9pw79m57g90v`; // Replace with your domain

  const renderBlock = (block, index) => {
    if (!block || !block.__component) {
      console.warn(`Invalid block at index ${index}:`, block);
      return null;
    }

    switch (block.__component) {
      case 'shared.rich-text':
        return (
          <div
            key={index}
            className="content mb-5"
            style={{ animationDelay: `${index * 0.2}s` }}
            dangerouslySetInnerHTML={{ __html: block.body || 'No content' }}
          />
        );
      case 'shared.quote':
        return (
          <blockquote
            key={index}
            className="blockquote-custom mb-5"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <p className="mb-2 fs-5">{block.body || 'No quote text'}</p>
            {block.title && (
              <footer className="blockquote-footer mt-2">{block.title}</footer>
            )}
          </blockquote>
        );
      case 'shared.media':
        const file = block.file;
        const mediaUrl =
          file?.formats?.medium?.url || file?.url || 'https://via.placeholder.com/600x400';
        const altText = file?.alternativeText || 'Media content';
        const caption = file?.caption || '';

        return (
          <div
            key={index}
            className="text-center mb-5"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Image
              src={mediaUrl}
              alt={altText}
              className="img-fluid rounded"
              width={file?.formats?.medium?.width || file?.width || 600}
              height={file?.formats?.medium?.height || file?.height || 400}
              sizes="(max-width: 768px) 100vw, 600px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6ZAAAAABJRU5ErkJggg=="
            />
            {caption && <p className="text-muted mt-2">{caption}</p>}
          </div>
        );
      case 'shared.slider':
        return (
          <div
            key={index}
            className="carousel slide mb-5"
            data-bs-ride="carousel"
            id={`carousel-${index}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="https://via.placeholder.com/800x400"
                  className="d-block w-100 rounded"
                  alt="Slider placeholder 1"
                />
              </div>
              <div className="carousel-item">
                <Image
                  src="https://via.placeholder.com/800x400/333"
                  className="d-block w-100 rounded"
                  alt="Slider placeholder 2"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel-${index}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel-${index}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
      default:
        console.warn(`Unknown block type: ${block.__component}`);
        return (
          <div key={index} className="text-muted mb-5">
            [Unknown block type: {block.__component}]
          </div>
        );
    }
  };

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author?.name || 'Unknown Author',
    },
    datePublished: publishedAt || '2025-06-08',
    image: coverImageUrl,
    url: blogUrl,
    publisher: {
      '@type': 'Organization',
      name: 'HomeFix Insights',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/logo.png', // Replace with your logo
      },
    },
  };

  return (
    <>
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <article className="">
                  <Image
                    src={coverImageUrl}
                    className="card-img-top"
                    alt={title}
                    loading="lazy"
                    width={900}
                    height={600}
                  />
                  <div className="pt-5">
                    <h1 className="main-heading mb-4">{title}</h1>
                    <p className="lead mb-4">{description}</p>
                    <header className="blog-meta d-flex justify-content-between align-items-center text-muted mb-4">
                      <div className="d-flex gap-1 justify-content-start align-items-center">
                        <div className="d-flex gap-2">
                          <Image
                            className="author-img"
                            src="https://funny-virtue-0648592741.media.strapiapp.com/saroj_c92b97eb31.png"
                            alt="Author Image"
                            width={50}
                            height={50}
                          />
                          <div className="d-flex flex-column justify-content-center">
                            <span className="author-name lh-1">
                              <strong className="fw-medium">
                                {author?.name || 'Unknown Author'}
                              </strong>
                            </span>
                            <span className="author-position lh-1">
                              <small>Content Writer</small>
                            </span>
                          </div>
                        </div>

                        <span className="category">
                          <i className="bi-tag me-1"></i>
                          {category?.name || 'Uncategorized'}
                        </span>
                      </div>
                      <span>
                        <i className="bi bi-calendar-week me-2"></i>
                        <time dateTime={publishedAt}>{formattedDate}</time>
                      </span>
                    </header>
                    {blocks.length > 0 ? (
                      blocks.map((block, index) => renderBlock(block, index))
                    ) : (
                      <p className="text-muted">No content blocks available.</p>
                    )}
                  </div>
                </article>
                <CostEstimationWidgetPrompt />
                <div className="row line align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="blog-details-tag">
                      <Link href="#" onClick={handleSmoothScroll}>
                        Waterproofing
                      </Link>
                      <Link href="#" onClick={handleSmoothScroll}>
                        Tiling
                      </Link>
                      <Link href="#" onClick={handleSmoothScroll}>
                        Gneral Fixes
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="ba-blog-details-social-icons">
                      <SocialShare />
                    </div>
                  </div>
                </div>
                <BlogSlider nextArticle={nextArticle} previousArticle={previousArticle} />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <PopularPostWidget />
              <CTABlock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
