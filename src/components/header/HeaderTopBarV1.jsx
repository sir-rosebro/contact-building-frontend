import React from 'react';
import SocialShare from '../utilities/SocialShare';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const HeaderTopBarV1 = () => {
    return (
        <>
          <div className='container'>
            <div className=' p-3'>
                <ul className='d-flex gap-5 text-white align-items-center justify-content-center'>
                    <li>Tiling</li>
                    <li>Renovations</li>
                    <li>Painting</li>
                    <li>Waterprofing</li>
                    <li>General Fixes</li>
                </ul>
            </div>
          </div>
        </>
    );
};

export default HeaderTopBarV1;