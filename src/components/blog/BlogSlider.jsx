"use client"
import React, { useState } from 'react';
import SingleBlogSlider from './SingleBlogSlider';
import Slider from 'react-slick';

const BlogSlider = () => {

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
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div className="row mt-40 ">
                <div className="blog_list-two position-relative">
                    <Slider {...settings} ref={setSlider}>
                        <SingleBlogSlider />
                        <SingleBlogSlider />
                    </Slider>
                    <div className="blog-slider-nav">
                        <button className="nav-prev" onClick={handlePrevious}>
                            <i className="bi bi-chevron-left"></i> Previous</button>
                        <button className="nav-next" onClick={handleNext}>
                            Next <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSlider;