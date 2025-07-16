import React from 'react';
import SingleBlogV2 from './SingleBlogV2';
import PopularPostWidget from '../widgets/PopularPostWidget';
import CTABlock from '../service/CTABlock';

const BlogV2 = ({ blogs }) => {
  if (!Array.isArray(blogs)) {
    return <div>Error: No blogs available</div>;
  }

  return (
    <section className="blog-area pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row gy-4">
              {blogs.map((blog) => (
                <div className="col-12 col-md-6 col-lg-6 d-flex" key={blog.id}>
                  <SingleBlogV2 blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <PopularPostWidget blogs={blogs}/>
            <CTABlock />
          </div>
        </div>
        <div className="as-pagination mt-5">
          <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
          </ul>
      </div>
      </div>
    </section>
  );
};

export default BlogV2;