// @/src/components/SuburbMap.jsx
'use client';

import React, { useEffect, useRef } from 'react';

const loadGoogleMaps = (() => {
  let callbacks = [];
  let loaded = false;
  let loading = false;

  return (callback) => {
    callbacks.push(callback);

    if (loaded) {
      callback();
      return;
    }

    if (loading) return;

    loading = true;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoh5hxF_-IB-i5gkD-HYKnlrjEkKv51wM`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      loaded = true;
      loading = false;
      callbacks.forEach((cb) => cb());
      callbacks = [];
    };

    script.onerror = () => {
      loading = false;
      console.error('Failed to load Google Maps script');
    };

    document.head.appendChild(script);
  };
})();

const SuburbMap = ({ lat, lng, name }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadGoogleMaps(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 12,
        mapTypeId: 'satellite',
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        rotateControl: false,
        scaleControl: false,
        scrollwheel: false,
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [{ saturation: -100 }],
          },
          {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: name,
      });
    });
  }, [lat, lng, name]);

  return <div ref={mapRef} style={{ width: '100%', height: '200px', marginBottom: '1rem' }} />;
};

export default SuburbMap;