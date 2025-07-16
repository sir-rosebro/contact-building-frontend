"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import blogStandard1 from '@/public/assets/images/blog/blog-standard1.png'
import blogStandard2 from '@/public/assets/images/blog/blog-standard2.png'
import blogStandard3 from '@/public/assets/images/blog/blog-standard3.png'
import TagsWidget from '../widgets/TagsWidget';
import SearchWidget from '../widgets/SearchWidget';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import Slider from 'react-slick';
import PopularPostWidget from '../widgets/PopularPostWidget';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BlogStandardContent = () => {

    const [isOpen, setOpen] = useState(false);
    const [slider, setSlider] = useState(null);

    // Custom arrow components
    const handlePrevious = () => {
        slider?.slickPrev();
    };

    const handleNext = () => {
        slider?.slickNext();
    };

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 5000
    }

    return (
        <>
            <div className="blog-standard-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="blog-quote-box mb-40">
                                        <div className="blog-quote-conent">
                                            <i className="fas fa-quote-right"></i>
                                            <p>{`Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horseTosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get`}</p>
                                            <h4>Silvester Scot</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-standard-box">
                                        <div className="blog-standard-thumb">
                                            <Image src={blogStandard1} alt="" />
                                            <div className="blog-single-video inline-block">
                                                <div className="blog-video-icon inline-block">
                                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BS4TUd7FJSg" onClose={() => setOpen(false)} />
                                                    <Link href={{ javascript: void (0) }} scroll={false} className="video-vemo-icon venobox vbox-item" onClick={() => setOpen(true)}>
                                                        <i className="bi bi-play-fill"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-standard-meta">
                                            <span>By Admin</span>
                                            <span>17 Aug 2023 </span>
                                            <span className="meta">Construction</span>
                                        </div>
                                        <div className="blog-standard-content">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>Best Practices Construction Law Construction</Link></h4>
                                            <p>Why Roofing are factmake 17 Reason EasierForesee the pain & trouble that are bounds too ensue equalidea off denouncing pleasures and praising pain was borncomplete account and expound the actual teachings the great the master-builder of human happiness. In a free hour...</p>
                                        </div>
                                        <div className="eulding-btn standard">
                                            <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-standard-box">
                                        <div className="blog-standard-thumb">
                                            <Image src={blogStandard2} alt="image" />
                                        </div>
                                        <div className="blog-standard-meta">
                                            <span>By Admin</span>
                                            <span>17 Aug 2023 </span>
                                            <span className="meta">Construction</span>
                                        </div>
                                        <div className="blog-standard-content">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>All the Greatest Moments of Thoroughbred</Link></h4>
                                            <p>Why Roofing are factmake 17 Reason EasierForesee the pain & trouble that are bounds too ensue equalidea off denouncing pleasures and praising pain was borncomplete account and expound the actual teachings the great the master-builder of human happiness. In a free hour...</p>
                                        </div>
                                        <div className="eulding-btn standard">
                                            <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-20">
                                    <div className="blog-standard-box">
                                        <div className="row">
                                            <div className="blog_list owl-carousel">
                                                <Slider {...settings} ref={setSlider}>
                                                    <div className="col-lg-12">
                                                        <div className="blog-standard-thumb">
                                                            <Image src={blogStandard3} alt="Image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="blog-standard-thumb">
                                                            <Image src={blogStandard2} alt="Image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="blog-standard-thumb">
                                                            <Image src={blogStandard1} alt="Image" />
                                                        </div>
                                                    </div>
                                                </Slider>
                                                <div className="blog-standard-nav">
                                                    <button className="nav-prev" onClick={handlePrevious}>
                                                        <i className="bi bi-chevron-left"></i></button>
                                                    <button className="nav-next" onClick={handleNext}>
                                                        <i className="bi bi-chevron-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-standard-meta">
                                            <span>By Admin</span>
                                            <span>17 Aug 2023 </span>
                                            <span className="meta">Construction</span>
                                        </div>
                                        <div className="blog-standard-content">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>All the Greatest Moments of Thoroughbred</Link></h4>
                                            <p>Why Roofing are factmake 17 Reason EasierForesee the pain & trouble that are bounds too ensue equalidea off denouncing pleasures and praising pain was borncomplete account and expound the actual teachings the great the master-builder of human happiness. In a free hour...</p>
                                        </div>
                                        <div className="eulding-btn standard">
                                            <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="as-pagination text-center">
                                        <ul>
                                            <li><Link href="#" onClick={handleSmoothScroll}>1</Link></li>
                                            <li><Link href="#" onClick={handleSmoothScroll}>2</Link></li>
                                            <li><Link href="#" onClick={handleSmoothScroll}><i className="bi bi-chevron-double-right"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <SearchWidget />
                            <PopularPostWidget />
                            <TagsWidget />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;