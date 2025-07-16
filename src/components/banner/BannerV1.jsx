"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import handleSmoothScroll from '../utilities/handleSmoothScroll';
import Typewriter from '../home/TyperwriterServices';
import HeaderV1 from '../header/HeaderV1';

import 'bootstrap/dist/css/bootstrap.min.css';
import CTAButton from './CTAButton';

const BannerV1 = () => {
  return (
    <>
      <div
        className="home-banner container d-flex align-items-center justify-content-center"
        style={{ maxWidth: '1000px' }}
      >
        <div className="text-center">
          <div className="slider-main-title">
            <h1>Transforming Aussie Homes,</h1>
            <Typewriter />
            <CTAButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV1;