import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleFeatureV1 = ({ feature }) => {
    const { activeClass, featureNumber, thumb, titleFirst, titleLast, icon, image } = feature

    return (
        <>
            <div className={`feature-single-box ${activeClass}`}>
                <div className="feature-content d-flex">
                    <div className='feature-title-top'>
                      {image? <Image src={image} alt="image" width={42} height={20}/> : <h3>{titleFirst}</h3>}
                    </div>
                    <div className="feature-title d-flex justify-content-center align-items-center ">
                        <h4><Link href="#" onClick={handleSmoothScroll}>{titleLast}</Link></h4>
                    </div>
                 
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV1;