"use client"
import Image from 'next/image';
import React from 'react';
import logoMini from '@/public/assets/images/logo-mini.png'
import Link from 'next/link';
import logo from '@/public/assets/images/contact-logo.png'
import MainMenu from './MainMenu';

const MobileMenu = ({ toggleSubMenu, isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar, isMenuSticky }) => {
    return (
        <>
            <div className={`mobile-menu-area d-block d-lg-none ${isMenuSticky ? "sticky-nav" : ""}`}>
                <div className="header-top d-flex justify-content-center align-items-center">
                    <button onClick={openMobileSidebar}>
                        <i className='bi bi-list'></i>
                    </button>
                    <div className="header-call-section">
                        <div className="header-call-icon">
                            <i className="bi bi-headset"></i>
                        </div>
                        <div className="header-call-title d-flex flex-column align-items-start">
                            <span>Need help? </span>
                            <span><a href="tel:1300513529" style={{ padding: 0 }}>1300 513 529 </a></span>
                        </div>
                    </div>
                </div>
                <div className={`mobile-sidebar-wrap ${isMobileSidebarOpen ? "show" : ""}`}>
                    <div className="sidebar-top d-flex justify-content-between align-items-center">
                        <div className="mobile-sidebar-logo">
                            <Link href="/"><Image src={logo} alt='logo' width={120}/></Link>
                        </div>
                        <div className="sidebar-icon">
                            <button onClick={closeMobileSidebar}>
                                <i className="bi bi-x-square"></i>
                            </button>
                        </div>
                    </div>
                    <div className="sidebar-body">
                        <MainMenu toggleSubMenu={toggleSubMenu} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;