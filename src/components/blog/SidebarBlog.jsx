import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import smallFirstBlogPost from '@/public/assets/images/home/painting-blog.jpg'
import smallSecondBlogPost from '@/public/assets/images/home/quick-fixes-blog.jpg'
import smallThirdBlogPost from '@/public/assets/images/home/renovation-blog.jpg'
import { formatDate } from '@/src/utils/common'

const SidebarBlog = ({ blogs }) => {


  return blogs.map(blog => {
    return (
      <Link href={`/blog/${blog?.slug}`} className="text-decoration-none text-dark" key={blog.id}>
        <div className="d-flex flex-row align-items-center mb-1">
          <div className="col-4 position-relative">
            <Image 
              src={blog?.cover?.url} 
              className="img-fluid rounded" 
              width={150}
              height={15}
              alt={blog?.cover?.alternativeText   || 'Sidebar Image'}
            />
            <span
              className="position-absolute bottom-0 start-0 m-1 px-1 py-0 text-white"
              style={{ backgroundColor: 'var(--theme-color)', fontSize: '0.65rem', borderRadius: '0.2rem' }}
            >
              {blog?.category?.name}
            </span>
          </div>
          <div className="col-8 ps-3 d-flex flex-column justify-content-center">
            <h6 className="mb-2">{blog?.title}</h6>
            <div className="text-muted small d-flex gap-2 justify-content-right align-items-center">
              <span>{formatDate(blog.publishedAt)}</span>
              <span className='seperator-circle'></span>
              <span>3 min read</span>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: '#555', borderWidth: '1px', marginBlock: '1.5rem' }} />
      </Link>
    )
  })

  // return (
  //   <>
  //           <Link href="/blog/painting-tips" className="text-decoration-none text-dark">
  //             <div className="d-flex flex-row align-items-center mb-1">
  //               <div className="col-4 position-relative">
  //                 <Image src={smallFirstBlogPost} className="img-fluid rounded" alt="Painting Tips" />
  //                 <span
  //                   className="position-absolute bottom-0 start-0 m-1 px-1 py-0 text-white"
  //                   style={{ backgroundColor: 'var(--theme-color);', fontSize: '0.65rem', borderRadius: '0.2rem' }}
  //                 >
  //                   Painting
  //                 </span>
  //               </div>
  //               <div className="col-8 ps-3 d-flex flex-column justify-content-center">
  //                 <h6 className="mb-2">Top Painting Mistakes to Avoid</h6>
  //                 <div className="text-muted small d-flex gap-3">
  //                   <span>May 10, 2025</span>
  //                   <span>3 min read</span>
  //                 </div>
  //               </div>
  //             </div>
  //             <hr style={{ borderColor: '#555', borderWidth: '1px', marginBlock: '1.5rem' }} />
  //           </Link>

  //           {/* Post 2 */}
  //           <Link href="/blog/general-fixes" className="text-decoration-none text-dark">
  //             <div className="d-flex flex-row align-items-center mb-1">
  //               <div className="col-4 position-relative">
  //                 <Image src={smallSecondBlogPost} className="img-fluid rounded" alt="General Fixes" />
  //                 <span
  //                   className="position-absolute bottom-0 start-0 m-1 px-1 py-0 text-white"
  //                   style={{ backgroundColor: 'var(--theme-color);', fontSize: '0.65rem', borderRadius: '0.2rem' }}
  //                 >
  //                   General Fixes
  //                 </span>
  //               </div>
  //               <div className="col-8 ps-3 d-flex flex-column justify-content-center">
  //                 <h6 className="mb-2">Quick Fixes for Common Household Issues</h6>
  //                 <div className="text-muted small d-flex gap-3">
  //                   <span>May 8, 2025</span>
  //                   <span>4 min read</span>
  //                 </div>
  //               </div>
  //             </div>
  //             <hr style={{ borderColor: '#555', borderWidth: '1px', marginBlock: '1.5rem' }} />
  //           </Link>

  //           {/* Post 3 */}
  //           <Link href="/blog/kitchen-bathroom-reno" className="text-decoration-none text-dark">
  //             <div className="d-flex flex-row align-items-center">
  //               <div className="col-4 position-relative">
  //                 <Image src={smallThirdBlogPost} className="img-fluid rounded" alt="Renovation Tips" />
  //                 <span
  //                   className="position-absolute bottom-0 start-0 m-1 px-1 py-0 text-white"
  //                   style={{ backgroundColor: 'var(--theme-color);', fontSize: '0.65rem', borderRadius: '0.2rem' }}
  //                 >
  //                   Renovation
  //                 </span>
  //               </div>
  //               <div className="col-8 ps-3 d-flex flex-column justify-content-center">
  //                 <h6 className="mb-2">Kitchen & Bathroom Reno: Where to Start</h6>
  //                 <div className="text-muted small d-flex gap-3">
  //                   <span>May 6, 2025</span>
  //                   <span>6 min read</span>
  //                 </div>
  //               </div>
  //             </div>
  //           </Link>  
  //   </>
  // )
}

export default SidebarBlog
