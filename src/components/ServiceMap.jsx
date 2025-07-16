'use client';
import { useEffect, useRef, useState } from 'react';

export default function ServiceAreaMap() {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [activeInfoWindows, setActiveInfoWindows] = useState([]); // Track all InfoWindows
  const [markers, setMarkers] = useState([]); // Track all markers

  useEffect(() => {
    const loadMap = () => {
      const initialCenter = { lat: -33.732, lng: 151.283 };
      const initialZoom = 12;
      const initialStyles = [
        { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] },
        { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
        { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
        { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
        { featureType: 'road.arterial', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dadada' }] },
        { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
        { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
        { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
        { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#aaacae' }] },
        { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
      ];

      const map = new window.google.maps.Map(mapRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        attributionControl: false,
        styles: initialStyles,
      });

      setMapInstance(map);

      const serviceAreaCoords = [
        { lat: -33.677, lng: 151.260 },
        { lat: -33.684, lng: 151.320 },
        { lat: -33.722, lng: 151.326 },
        { lat: -33.761, lng: 151.325 },
        { lat: -33.787, lng: 151.308 },
        { lat: -33.785, lng: 151.268 },
        { lat: -33.760, lng: 151.245 },
        { lat: -33.730, lng: 151.245 },
      ];

      const serviceArea = new window.google.maps.Polygon({
        paths: serviceAreaCoords,
        strokeColor: '#F60',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#F60',
        fillOpacity: 0.15,
      });
      serviceArea.setMap(map);

      const bounds = new window.google.maps.LatLngBounds();
      serviceAreaCoords.forEach(coord => bounds.extend(coord));
      map.fitBounds(bounds);

      const buttonDiv = document.createElement('div');
      buttonDiv.style.margin = '1rem 2rem 0 0';
      buttonDiv.style.display = 'flex';
      buttonDiv.style.alignItems = 'center';

      const button = document.createElement('button');
      button.textContent = 'View Service Areas';
      button.style.cssText = 'background-color:#F60;border: none;padding:12px 20px;border-radius:30px;color:white;font-weight:bold;font-size:14px;cursor:pointer;margin-right:10px;';
      button.addEventListener('click', () => {
        activeInfoWindows.forEach(infoWindow => infoWindow.close());
        setActiveInfoWindows([]);
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
        map.setOptions({ styles: initialStyles });
        map.setZoom(initialZoom);
        map.setCenter(initialCenter);
        renderMarkers(map, service_rendered, initialStyles, initialZoom, initialCenter);
      });

      const labelDiv = document.createElement('div');
      labelDiv.textContent = 'Locations of our service area around Sydney*';
      labelDiv.style.color = '#616161';
      labelDiv.style.fontSize = '0.9rem';
      labelDiv.style.marginRight = '0.5rem';
      labelDiv.style.fontStyle = 'italic';

      buttonDiv.appendChild(labelDiv);
      buttonDiv.appendChild(button);

      map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(buttonDiv);

      const service_rendered = [
        {
          lat: -33.732,
          lng: 151.283,
          Name: 'Emy Watson',
          service: 'Painting',
          cost: 30,
          description: 'Interior wall painting for living room and kitchen.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/emy_painting_7b928a9945.webp'],
        },
        {
          lat: -33.740,
          lng: 151.270,
          Name: 'John Smith',
          service: 'Tiling',
          cost: 45,
          description: 'Floor tiling for bathroom renovation.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/john_floor_tiling_bathroom_reno_0916ff279d.webp'],
        },
        {
          lat: -33.725,
          lng: 151.295,
          Name: 'Sarah Lee',
          service: 'Waterproofing',
          cost: 50,
          description: 'Basement wbaaterproofing to prevent leaks.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/sarah_waterproofing_3c24654823.webp'],
        },
        {
          lat: -33.750,
          lng: 151.260,
          Name: 'Michael Brown',
          service: 'General Fixes',
          cost: 25,
          description: 'Repaired broken door hinges and light fixtures.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/michel_general_fixes_5f2f597092.webp'],
        },
        {
          lat: -33.720,
          lng: 151.300,
          Name: 'Lisa Davis',
          service: 'Bathroom Renovation',
          cost: 120,
          description: 'Complete bathroom remodel with new fixtures.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/lisa_bathroom_reno_b2c67c6e70.webp' ],
        },
        {
          lat: -33.735,
          lng: 151.275,
          Name: 'David Wilson',
          service: 'Painting',
          cost: 35,
          description: 'Exterior house painting with weather-resistant paint.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/david_painting_021bf50157.webp'],
        },
        {
          lat: -33.745,
          lng: 151.290,
          Name: 'Emma Thompson',
          service: 'Tiling',
          cost: 40,
          description: 'Kitchen backsplash tiling with ceramic tiles.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/ema_kitchen_tiling_f960eb82e4.webp'],
        },
        {
          lat: -33.728,
          lng: 151.265,
          Name: 'James Taylor',
          service: 'Waterproofing',
          cost: 55,
          description: 'Waterproofing for rooftop terrace.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/james_waterproofing_16ccdf7bba.webp'],
        },
        {
          lat: -33.738,
          lng: 151.280,
          Name: 'Olivia Martinez',
          service: 'General Fixes',
          cost: 20,
          description: 'Fixed leaking faucet and patched drywall.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/Olivia_faucet_78cbcf0a51.webp'],
        },
        {
          lat: -33.742,
          lng: 151.288,
          Name: 'William Clark',
          service: 'Kitchen Renovation',
          cost: 150,
          description: 'Modernized kitchen with new cabinets and countertops.',
          images: ['https://funny-virtue-0648592741.media.strapiapp.com/kitchen_reno_william_d75faa25bd.webp'],
        },
      ];

      const groupNearby = (locations, threshold = 0.0008) => {
        const groups = [];
        locations.forEach((loc) => {
          let found = false;
          for (const group of groups) {
            const dx = group[0].lat - loc.lat;
            const dy = group[0].lng - loc.lng;
            if (Math.sqrt(dx * dx + dy * dy) < threshold) {
              group.push(loc);
              found = true;
              break;
            }
          }
          if (!found) groups.push([loc]);
        });
        return groups;
      };

      const renderMarkers = (map, locations, styles, zoom, center) => {
        const grouped = groupNearby(locations);
        const newMarkers = [];

        grouped.forEach((group) => {
          const isCluster = group.length > 1;
          const { lat, lng } = group[0];

          const marker = new window.google.maps.Marker({
            position: { lat, lng },
            map,
            icon: {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="18" fill="#F60" />
                  ${isCluster
                    ? `<text x="22" y="27" font-size="16" text-anchor="middle" fill="black" font-family="Arial">${group.length}</text>`
                    : `<text x="22" y="27" font-size="18" text-anchor="middle" fill="black" font-family="Arial">📍</text>`}
                </svg>
              `)}`,
              scaledSize: new window.google.maps.Size(44, 44),
              anchor: new window.google.maps.Point(22, 22),
            },
          });

          newMarkers.push(marker);

          marker.addListener('click', () => {
            map.setZoom(15);
            map.setOptions({ styles: null });
            map.panTo({ lat, lng });

            activeInfoWindows.forEach(infoWindow => infoWindow.close());
            setActiveInfoWindows([]);

            if (isCluster) {
              markers.forEach(m => m.setMap(null));
              setMarkers([]);

              const clusterMarkers = [];
              group.forEach((location) => {
                const pin = new window.google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map,
                  icon: {
                    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="14" fill="#F60" />
                        <text x="20" y="25" font-size="16" text-anchor="middle" fill="black" font-family="Arial">📍</text>
                      </svg>
                    `)}`,
                    scaledSize: new window.google.maps.Size(40, 40),
                    anchor: new window.google.maps.Point(20, 20),
                  },
                });

                clusterMarkers.push(pin);

                pin.addListener('click', () => {
                  const content = `
                    <div style="max-width:250px; font-family:Arial, sans-serif; background:#fff; border-radius:8px; padding:15px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
                      <h6 style="margin:0 0 10px; color:#F60; font-size:18px; font-weight:600;">${location.Name}</h6>
                      <p style="margin:5px 0; font-size:14px;"><strong style="color:#333;">Service:</strong> ${location.service}</p>
                      <p style="margin:5px 0; font-size:14px;"><strong style="color:#333;">Cost:</strong> $${location.cost}</p>
                      <p style="margin:5px 0; font-size:14px;"><strong style="color:#333;">Description:</strong> ${location.description}</p>
                      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;">
                        ${location.images.length > 0
                          ? location.images
                              .map(
                                (img) =>
                                  `<img src="${img}" width="80" height="80" style="border-radius:6px; object-fit:cover;" />`
                              )
                              .join('')
                          : '<p style="font-size:14px; color:#666;">No images available</p>'}
                      </div>
                    </div>
                  `;
                  activeInfoWindows.forEach(infoWindow => infoWindow.close());
                  const infoWindow = new window.google.maps.InfoWindow({ content });
                  infoWindow.open(map, pin);
                  setActiveInfoWindows([infoWindow]);
                });
              });
              marker.setMap(null);
              setMarkers(clusterMarkers);
            } else {
              const customer = group[0];
              const content = `
                <div style="max-width:250px; font-family:Arial, sans-serif; background:#fff; border-radius:8px; padding:15px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
                  <h6 style="margin:0 0 10px; color:#F60; font-size:18px; font-weight:600;">${customer.Name}</h6>
                  <p style="margin:5px 0; font-size:14px;"><strong style="color:#333;">Service:</strong> ${customer.service}</p>
                  <p style="margin:5px 0; font-size:14px;"><strong style="color:#333;">Cost:</strong> $${customer.cost}</p>
                  <p style="margin:5px 0; font-size:14px;"><strong style="color:#333;">Description:</strong> ${customer.description}</p>
                  <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;">
                    ${customer.images.length > 0
                      ? customer.images
                          .map(
                            (img) =>
                              `<img src="${img}" width="80" height="80" style="border-radius:6px; object-fit:cover;" />`
                          )
                          .join('')
                      : '<p style="font-size:14px; color:#666;">No images available</p>'}
                  </div>
                </div>
              `;
              activeInfoWindows.forEach(infoWindow => infoWindow.close());
              const infoWindow = new window.google.maps.InfoWindow({ content });
              infoWindow.open(map, marker);
              setActiveInfoWindows([infoWindow]);
            }
          });
        });

        setMarkers(newMarkers);
      };

      renderMarkers(map, service_rendered, initialStyles, initialZoom, initialCenter);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDoh5hxF_-IB-i5gkD-HYKnlrjEkKv51wM';
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div className="my-4">
      <div className="container">
        <div className="section-main-title text-center mb-4">
          <h2>Explore our recent service locations around Sydney</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-muted text-center mb-5" style={{ maxWidth: '700px' }}>
            With over 15 years of hands-on experience, Contact Building Services is your trusted partner for renovations, handyman work, and building maintenance across Sydney.
          </p>
        </div>
      </div>
      <div
        ref={mapRef}
        style={{ height: '600px', width: '100vw', backgroundColor: '#eaeaea', maxWidth: '100%' }}
        className="border rounded shadow-sm"
      />
    </div>
  );
}