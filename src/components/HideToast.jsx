'use client';

import { useEffect } from 'react';

export default function HideToast() {
  useEffect(() => {
    const interval = setInterval(() => {
      const toast = document.querySelector('div[data-nextjs-toast="true"]');
      if (toast && toast.style.display !== 'none') {
        toast.setAttribute('style', 'display: none !important;');
      }
    }, 300); // check every 300ms

    return () => clearInterval(interval);
  }, []);

  return null;
}
