import Image from 'next/image'
import Link from 'next/link'
import bigBlogPost from '@/public/assets/images/home/waterproofing-blog.jpg'
import BlogV1Data from '../../../public/assets/jsonData/blog/BlogV1Data.json'
import SidebarBlog from './SidebarBlog'
import { formatDate } from '@/src/utils/common'

const NewBlog = ({ blogs }) => {
  // Check if blogs is empty or not an array
  if (!Array.isArray(blogs) || blogs.length === 0) {
    console.error('No blogs fetched:', blogs);
    return <div>No blog posts found.</div>;
  }

  // Extract main blog and sidebar blogs
  const [mainBlog, ...sidebarBlogs] = blogs;
  console.log(mainBlog)
  // Ensure mainBlog and mainBlog.attributes exist

  // Construct full image URL for main blog
  const strapiUrl = 'https://funny-virtue-0648592741.strapiapp.com';
  const mainBlogImageUrl = mainBlog.cover.url ?? 'https://via.placeholder.com/600x400';

  // Fallback author image
  const mainBlogAuthorImageUrl = 'https://via.placeholder.com/50';

  return (
    <section className="py-5">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-main-title blog">
            <h2>Latest Blog Posts</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 mb-4 d-flex">
            <Link
              href={`/blog/${mainBlog.slug}`}
              className="text-decoration-none text-dark w-100"
            >
              <div className="card w-100 d-flex flex-column border-0">
                <div className="position-relative">
                  <Image
                    src={mainBlogImageUrl}
                    width={600}
                    height={400}
                    className="card-img-top rounded"
                    alt={mainBlog?.cover?.alternativeText || 'Main blog cover image'}
                  />
                  <span
                    className="position-absolute bottom-0 start-0 m-2 px-2 py-1 text-white"
                    style={{ backgroundColor: 'var(--theme-color)', fontSize: '0.75rem', borderRadius: '0.2rem' }}
                  >
                    {blogs?.category?.name}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{mainBlog.title}</h5>
                  <div className="d-flex text-muted gap-2 mb-2 justify-content-right align-items-center">
                    <span>{formatDate(mainBlog.publishedAt)}</span>
                    <span className='seperator-circle'></span>
                    <span>5 min read</span>
                  </div>
                  <p className="card-text">{mainBlog.description || 'No description available.'}</p>
                  <div className="mt-3 d-flex align-items-center">
                     <Image
                            className="author-img"
                            src="https://funny-virtue-0648592741.media.strapiapp.com/saroj_c92b97eb31.png"
                            alt="Author Image"
                            width={50}
                            height={50}
                      />
                    <div className="ms-2">
                      <strong>{mainBlog.author.name}</strong>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                        Content Writer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-5 d-flex flex-column">
            <SidebarBlog blogs={sidebarBlogs} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewBlog
