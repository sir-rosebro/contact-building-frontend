import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlogV1 = ({ blog }) => {
    const { id, animation, title, fullDate, comments, dateIcon, commentIcon, text, authorThumb, author, btnIcon } = blog

    return (
        <>
            <div className={`blog-single-box ${animation}`}>
                <div className="blog-content">
                    <div className="blog-title">
                        <h4><Link href={`/blog-details/${id}`}>{title}</Link></h4>
                    </div>
                    <div className="blog-meta">
                        <span><i className={dateIcon}></i>{fullDate}</span>
                        <span><i className={commentIcon}></i> {comments} Comment</span>
                    </div>
                    <div className="blog-discription">
                        <p>{text}</p>
                    </div>
                    <div className="blog-bottom-shape">
                        <Image src={`/assets/images/blog/${authorThumb}`} alt="image" width={45} height={45} />
                    </div>
                    <div className="blog-bottom-title">
                        <h4>{author}</h4>
                    </div>
                    <div className="blog-btn">
                        <Link href={`/blog-details/${id}`}>Learn More <i className={btnIcon}></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;