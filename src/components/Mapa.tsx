import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Mapa = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const loader = new Loader({
    apiKey: 'AIzaSyC5Nx3hYxzv9hFW93pY7sd4LHCFA-5CLpc', 
    version: 'weekly',
    libraries: ['places'], 
  });

  useEffect(() => {
    loader.load().then(async (googleMaps) => {
      if (mapRef.current) {
        const map = new googleMaps.maps.Map(mapRef.current, {
          center: { lat: -23.04789, lng: -43.40108 },
          zoom: 12, 
        });

    
        const radiusInMeters = 9112; 
   
        const circle = new googleMaps.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map,
          center: { lat: -23.04789, lng: -43.40108 }, 
          radius: radiusInMeters, 
        });


        const { Marker }: { Marker: typeof google.maps.Marker } = await googleMaps.maps.importLibrary('marker') as any;
        
        circle.addListener('click', () => {
          window.alert('Este é o círculo da área de atuação!');
        });

        const marker = new Marker({
          position: { lat: -23.04789, lng: -43.40108 }, 
          map,
          title: 'Centro da Área de Atuação',
        });

        // Opcional: você pode adicionar um evento ao círculo ou marcador
        marker.addListener('click', () => {
          window.alert('Este é o centro da área de atuação!');
        });
      }
    });
  }, [loader]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default Mapa;
