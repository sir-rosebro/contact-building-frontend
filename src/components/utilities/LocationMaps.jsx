import { useEffect, useRef } from 'react';

const loadGoogleMaps = (apiKey) => {
    return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
            resolve(window.google.maps);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            if (window.google && window.google.maps) {
                resolve(window.google.maps);
            } else {
                reject(new Error('Google Maps SDK failed to load.'));
            }
        };

        script.onerror = reject;
        document.head.appendChild(script);
    });
};

const LocationMaps = () => {
    const mapRef = useRef(null);
    const apiKey = 'YOUR_API_KEY_HERE'; // 🔒 Replace this with your actual API key

    useEffect(() => {
        loadGoogleMaps(apiKey).then((maps) => {
            const map = new maps.Map(mapRef.current, {
                center: { lat: -33.8688, lng: 151.2093 }, // Sydney
                zoom: 10,
                mapTypeId: 'roadmap',
            });

            const sydneyPolygonCoords = [
                { lat: -33.578, lng: 150.952 }, // NW
                { lat: -33.578, lng: 151.352 }, // NE
                { lat: -34.118, lng: 151.352 }, // SE
                { lat: -34.118, lng: 150.952 }, // SW
            ];

            const sydneyPolygon = new maps.Polygon({
                paths: sydneyPolygonCoords,
                strokeColor: '#FF8C00',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF8C00',
                fillOpacity: 0.35,
            });

            sydneyPolygon.setMap(map);
        }).catch((err) => {
            console.error('Failed to load Google Maps:', err);
        });
    }, []);

    return (
        <div className="map-area">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div
                            id="map"
                            ref={mapRef}
                            style={{ width: '100%', height: '608px' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationMaps;
