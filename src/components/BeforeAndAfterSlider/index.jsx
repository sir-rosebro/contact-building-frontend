'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './index.css';

export default function BeforeAfterSlider({ imageOne, imageTwo }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const sliderRef = useRef(null);
  const blurOverlayRef = useRef(null);
  const verticalLineRef = useRef(null);
  const beforeLabelRef = useRef(null);
  const afterLabelRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const slider = sliderRef.current;
    const blurOverlay = blurOverlayRef.current;
    const verticalLine = verticalLineRef.current;
    const beforeLabel = beforeLabelRef.current;
    const afterLabel = afterLabelRef.current;

    let isDragging = false;

    const updateSliderPosition = (x) => {
      const bounds = container.getBoundingClientRect();
      const position = Math.max(0, Math.min(x, bounds.width));
      overlay.style.width = `${position}px`;
      slider.style.left = `${position}px`;
      blurOverlay.style.left = `${position}px`;
      verticalLine.style.left = `${position}px`;

      // Fade labels based on slider position
      const threshold = bounds.width * 0.2;
      const fadeRange = bounds.width * 0.1;
      const beforeOpacity = Math.max(0, Math.min(1, (position - threshold) / fadeRange));
      const afterOpacity = Math.max(0, Math.min(1, (bounds.width - position - threshold) / fadeRange));
      beforeLabel.style.opacity = beforeOpacity;
      afterLabel.style.opacity = afterOpacity;
    };

    const startDrag = (e) => {
      e.preventDefault();
      isDragging = true;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      const bounds = container.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      updateSliderPosition(x);
    };

    const onTouchDrag = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const bounds = container.getBoundingClientRect();
      const x = touch.clientX - bounds.left;
      updateSliderPosition(x);
    };

    // Set initial position to center
    const initializeSlider = () => {
      const bounds = container.getBoundingClientRect();
      const initialPosition = bounds.width / 2;
      updateSliderPosition(initialPosition);
    };

    slider.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', onDrag);
    slider.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', onTouchDrag);
    slider.addEventListener('dragstart', (e) => e.preventDefault());

    // Handle window resize
    window.addEventListener('resize', initializeSlider);
    initializeSlider();

    return () => {
      slider.removeEventListener('mousedown', startDrag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('mousemove', onDrag);
      slider.removeEventListener('touchstart', startDrag);
      window.removeEventListener('touchend', stopDrag);
      window.removeEventListener('touchmove', onTouchDrag);
      slider.removeEventListener('dragstart', (e) => e.preventDefault());
      window.removeEventListener('resize', initializeSlider);
    };
  }, []);

  return (
    <div className="before-after-wrapper mb-5" ref={containerRef}>
      <div className="after-layer">
        <Image
          src={imageOne}
          alt="Before waterproofing by Contact Building Services in Sydney"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw" // Ensure proper image sizing
        />
        <span className="label after-label" ref={afterLabelRef}>
          After
        </span>
      </div>
      <div className="before-layer" ref={overlayRef}>
        <Image
          src={imageTwo}
          alt="After waterproofing by Contact Building Services in Sydney"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        <span className="label before-label" ref={beforeLabelRef}>
          Before
        </span>
      </div>
      <div className="slider-blur-overlay" ref={blurOverlayRef}></div>
      <div className="slider-vertical-line" ref={verticalLineRef}></div>
      <div className="slider-handle" ref={sliderRef}>
        <span className="slider-text">slide</span>
      </div>
    </div>
  );
}