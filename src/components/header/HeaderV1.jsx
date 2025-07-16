"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/images/contact-logo.png'
import HeaderTopBarV1 from './HeaderTopBarV1';
import Link from 'next/link';
import MainMenu from './MainMenu';
import HeaderSearchContent from './HeaderSearchContent';
import HeaderSidebar from './HeaderSidebar';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import MobileMenu from './MobileMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';
import useSearchBox from '@/src/hooks/useSearchBox';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSidebarInfo from '@/src/hooks/useSidebarInfo';

const HeaderV1 = () => {

    const isMenuSticky = false // useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const { handleSearchOpen, handleSearchClose } = useSearchBox()
    const { isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useSidebarInfo()

    return (
        <>
            <div className={`header-area ${isMenuSticky ? "sticky-nav" : ""}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo">
                                <Link href="/"><Image src={logo} alt="logo" style={{ width: '60%'}}/></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="header-munu">
                                <div className="social-header">
                                    <ul className="button-list">
                                     
                                        <li className="separator">
                                        <div className="header-call-section">
                                            <div className="header-call-icon">
                                                <i className="bi bi-headset"></i>
                                            </div>
                                            <div className="header-call-title d-flex flex-column align-items-start">
                                                <span>Need help? </span>
                                                <span>
                                                    <a href="tel:1300513529" style={{ padding: 0 }}>1300 {` `}513 {` `}529</a>
                                                </span>
                                            </div>
                                        </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu toggleSubMenu={toggleSubMenu} isMobileSidebarOpen={isMobileSidebarOpen} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} isMenuSticky={isMenuSticky} />
        </>
    );
};

export default HeaderV1;