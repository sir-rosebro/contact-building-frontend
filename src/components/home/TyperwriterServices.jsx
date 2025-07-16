// pages/index.js (if using Pages Router)
// or app/page.js (if using App Router)
"use client"

import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className='text-whtite mb-4'>
        <h4 className='text-white fw-normal'> with expert help in </h4>
      <h1 className='fw-medium fs-1' style={{ color: '#f60'}}>
        <Typewriter
          options={{
            strings: ['Painting', 'Water Proofing', 'Kitchen and Bathroom Renovation', 'General Fixing', 'Tiling'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}
