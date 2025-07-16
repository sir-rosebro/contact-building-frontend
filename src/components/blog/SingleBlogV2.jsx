import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlogV2 = ({ blog }) => {
  if (!blog) {
    return <div>Error: Invalid blog data</div>;
  }

  const {
    id,
    title,
    slug,
    cover,
    author,
    category,
    publishedAt,
  } = blog;

  const title2 = title || 'Untitled';
  const coverUrl = cover?.url || '/assets/images/blog/default.png';
  const coverAlt = cover?.alternativeText || 'Blog cover';
  const authorName = author?.name || 'Unknown';
  const categoryName = category?.name || 'Uncategorized';


  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : 'Unknown date';
  const [day, month] = formattedDate.split(' ');


  const authorIcon = 'bi bi-person'; // Bootstrap icon for author
  const animation = ''; // Set to empty or a default animation class (e.g., 'fade-in')
  const blogSpace = ''; // Set to empty or a default spacing class (e.g., 'mb-4')

  return (
    <div className={`blog-single-box style-two ${animation} ${blogSpace}`}>
      <div className="blog-thumb">
        <Image
          src={coverUrl}
          alt={coverAlt}
          width={415}
          height={330}
          className='w-100'
        />
      </div>
      <div className="blog-content style-two">
        <div className="blog-meta style-two">
          <div className="blog-meta-date">
            <h5>{day}</h5>
            <span>{month}</span>
          </div>
          <div className="blog-meta-info">
            <span>
              <i className={`${authorIcon} text-black`}></i> {authorName}
            </span>
            <span className="category d-inline-flex flex-nowrap">
              <i className="bi bi-tag me-1"></i> {categoryName}
            </span>
          </div>
        </div>
        <div className="blog-title style-two">
          <h4>
            <Link href={`/blog-details/${slug}`}>{title2}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogV2;