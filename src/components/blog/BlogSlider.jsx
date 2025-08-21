"use client"
import React, { useState } from 'react';
import SingleBlogSlider from './SingleBlogSlider';
import Slider from 'react-slick';

const BlogSlider = ({ nextArticle, previousArticle }) => {

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
                        <SingleBlogSlider nextArticle={nextArticle} previousArticle={previousArticle} />
                        <SingleBlogSlider nextArticle={nextArticle} previousArticle={previousArticle} reversePosition/>
                    </Slider>
                    <div className="blog-slider-nav">
                        <button className="nav-prev shadow" onClick={handlePrevious}>
                            <i className="bi bi-chevron-left"></i> </button>
                        <button className="nav-next shadow" onClick={handleNext}>
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSlider;