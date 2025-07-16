import React from 'react';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import BlogV1Data from '../../../public/assets/jsonData/blog/BlogV1Data.json'
import Image from 'next/image';
import SingleBlogV1 from './SingleBlogV1';

const BlogV1 = ({ showFull = false }) => {
	return (
		<>
			<div className="blog-area animate__animated animate__slideInUp">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<div className="section-main-title blog">
									<h2>{BlogV1Data.title}</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						{showFull ?
							<>
								{BlogV1Data.blogData.map(blog =>
									<div className="col-lg-4 col-md-6" key={blog.id}>
										<SingleBlogV1 blog={blog} />
									</div>
								)}
							</>
							: <>
								{BlogV1Data.blogData.slice(0, 3).map(blog =>
									<div className="col-lg-4 col-md-6" key={blog.id}>
										<SingleBlogV1 blog={blog} />
									</div>
								)}
							</>}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogV1;