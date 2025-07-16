import Image from 'next/image';
import React from 'react';

const SingleWorkProgressV1 = ({ progress }) => {
    const { thumb, shape, number, title, text, linkText } = progress

    return (
        <>
            <div className="work-process-single-box">
                <div className="work-process-thumb">
                    <Image src={`/assets/images/resource/${thumb}`} width={233} height={233} alt="image" />
                    <div className="work-process-number">
                        <h4>{number}</h4>
                    </div>
                    <div className="work-process-content">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                    <div className='mt-2'>
                        <a href="#" className='orange-rounded-btn'>{linkText}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleWorkProgressV1;