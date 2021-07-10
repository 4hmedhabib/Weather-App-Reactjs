import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({coord}) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic29zbG9wZXIiLCJhIjoiY2txOGI4enVtMDNsMjJubHdmdDdvcTI4aSJ9.moBBrAHMGhUfjwpd56eE7Q';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(44.0697);
  const [lat, setLat] = useState(9.565);
  const [zoom, setZoom] = useState(11);

    useEffect(() => {
      if (map.current) return; 
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
      console.log(coord);
      console.log('Running..')
    }, []);

   if(coord.lon !== lng && coord.lat !== lat){
        setLng(coord.lon);
        setLat(coord.lat);
      }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
