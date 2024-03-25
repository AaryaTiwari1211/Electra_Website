import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const ShopMap = ({ lng, lat }) => {
    console.log()
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 14,
        });

        new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map);

        return () => map.remove();
    }, [lng, lat]);

    return <div ref={mapContainer} style={{ width: '450px', height: '400px' , overflow:'hidden' }} />;
};

function Map() {
    const shopLocation = {
        lng: 86.395770, // Longitude of your shop
        lat: 23.919850, // Latitude of your shop
    };

    return (
        <div className="map" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ShopMap lng={shopLocation.lng} lat={shopLocation.lat} />
        </div >
    );
}

export default Map