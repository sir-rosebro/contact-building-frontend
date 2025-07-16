"use client"
import React, { useState } from 'react';
import NavigationMenuBar from './NavigationMenuBar';

const HeaderSearchContent = ({ handleSearchClose }) => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [showToolsSubmenu, setToolsSubmenu] = useState(false)

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    return (
        <>
            <div className="search-popup">
                {/* <button className="close-search style-two" onClick={handleSearchClose} scroll={false ? "true" : undefined}>
                    <span className="flaticon-multiply">
                        <i className="far fa-times-circle"></i>
                    </span>
                </button> */}
                {/* <NavigationMenuBar/> */}
                {/* <div className='main-menu d-flex justify-content-center align-items-center'>
                    <ul>
                        <li>
                            Why Contact
                        </li>
                        <li onClick={toggleSubmenu} style={{ cursor: 'pointer' }}>
                                Our Services
                            <i
                                className={`fas fa-chevron-${showSubmenu ? 'up' : 'down'}`}
                                style={{ marginLeft: '8px', fontSize: '1.2rem' }}
                            ></i>
                         
                                <ul className={`submenu ${showSubmenu ? 'open' : ''}`} style={{ marginRight: '1.5rem', marginTop: '0.5rem' }}>
                                    <li><i className="bi bi-arrow-right" style={{ marginRight: '1rem', fontSize: '1.5rem' }}></i>Waterproofing</li>
                                    <li><i className="bi bi-arrow-right" style={{ marginRight: '1rem', fontSize: '1.5rem' }}></i>Painting</li>
                                    <li><i className="bi bi-arrow-right" style={{ marginRight: '1rem', fontSize: '1.5rem' }}></i>General Fixes</li>
                                    <li><i className="bi bi-arrow-right" style={{ marginRight: '1rem', fontSize: '1.5rem' }}></i>Renovation</li>
                                </ul>

                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li onClick={() => setToolsSubmenu(!showToolsSubmenu)}>
                            Tools
                            <i
                                className={`fas fa-chevron-${showToolsSubmenu ? 'up' : 'down'}`}
                                style={{ marginLeft: '8px', fontSize: '1.2rem' }}
                            ></i>
                         
                                 <ul className={`submenu ${showToolsSubmenu ? 'open' : ''}`} style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                    <li><i className="bi bi-arrow-right" style={{ marginRight: '1rem', fontSize: '1.5rem' }}></i>Cost Estimation Calculator</li>
                                </ul>
                        
                        </li>
                    </ul>
                </div> */}
            </div>
        </>
    );
};

export default HeaderSearchContent;
