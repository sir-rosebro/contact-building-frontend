import Image from 'next/image';
import React from 'react';
import user1 from '@/public/assets/images/blog/user1.png'
import user2 from '@/public/assets/images/blog/user2.png'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BlogComments = () => {
    return (
        <>
            <div className="col-lg-12">
                <div className="blog-details-comment">
                    <h5>Comments (2)</h5>
                    <div className="blog-comment-list">
                        <ul>
                            <li>
                                <div className="blog-comment-box mb-60">
                                    <div className="blog-comment-thumb">
                                        <Image src={user1} alt="user image" />
                                    </div>
                                    <div className="blog-comment-content">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <h6 className="title">Isaac Herman</h6>
                                                <span className="date">June 14, 2023 / 12:00 AM</span>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="text-sm-end">
                                                    <Link className="replay-link" href="#" onClick={handleSmoothScroll}>Replay</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-main">
                                            <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat</p>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="blog-comment-box inner">
                                            <div className="blog-comment-thumb">
                                                <Image src={user2} alt="user image" />
                                            </div>
                                            <div className="blog-comment-content">
                                                <div className="row">
                                                    <div className=" col-lg-6 col-md-6">
                                                        <h6 className="title">George Clooney</h6>
                                                        <span className="date">June 14, 2024 / 12:10 AM</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="text-sm-end">
                                                            <Link className="replay-link" href="#" onClick={handleSmoothScroll}>Replay</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-main">
                                                    <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogComments;