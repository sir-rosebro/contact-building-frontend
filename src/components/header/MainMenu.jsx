"use client"
import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul>
                {/* <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}>Home <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/">Home One</Link></li>
                            <li><Link href="/home2">Home Two</Link></li>
                            <li><Link href="/home3">Home Three</Link></li>
                        </ul>
                    </div>
                </li> */}
                {/* <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}>Pages <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/project-details/1">Project Details</Link></li>
                            <li><Link href="/teams">Teams</Link></li>
                            <li><Link href="/team-details/1">Team Details</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                        </ul>
                    </div>
                </li> */}
                <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}> Services <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/service/renovation">Bathroom & Kitchen Renovation</Link></li>
                            <li><Link href="/service/waterproofing">Waterproofing</Link></li>
                            <li><Link href="/service/painting">Painting</Link></li>
                            <li><Link href="/service/general-fixes">General Fixes</Link></li>
                            <li><Link href="/service/tiling">Tiling</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}> Tools <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/services">Cost Estimation Calculator</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link href="about">Blogs</Link>
                </li>
                <li>
                    <Link href="about">Why Us?</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;