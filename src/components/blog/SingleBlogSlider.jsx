import Image from 'next/image';
import React from 'react';
import blogStyle1 from '@/public/assets/images/blog/blog-style1.png'
import blogStyle2 from '@/public/assets/images/blog/blog-style2.png'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleBlogSlider = () => {
    return (
        <>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="blog-details-item">
                            <div className="blog-item-thumb">
                                <Image src={blogStyle1} alt="image" />
                            </div>
                            <div className="blog-item-content">
                                <h4><Link href="#" onClick={handleSmoothScroll}>This Place Really Place For Awesome</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="blog-details-item two">
                            <div className="blog-item-thumb two">
                                <Image src={blogStyle2} alt="image" />
                            </div>
                            <div className="blog-item-content">
                                <h4><Link href="#" onClick={handleSmoothScroll}>Marketing Compliance </Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogSlider;