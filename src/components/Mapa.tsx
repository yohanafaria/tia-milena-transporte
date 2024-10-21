import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Mapa = () => {
  const mapRef = useRef<HTMLDivElement>(null); // Inicializando com HTMLDivElement
  const loader = new Loader({
    apiKey: 'AIzaSyC5Nx3hYxzv9hFW93pY7sd4LHCFA-5CLpc', // Substitua pela sua chave
    version: 'weekly',
  });

  useEffect(() => {
    loader.load().then((google) => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: -23.01220769176777, lng: -43.4600314526614 },
          zoom: 10,
        });

        // Raio em metros para a área de atuação
        const radiusInMeters = 4000; // Altere para o valor desejado

        // Criar círculo para representar a área de atuação
        const circle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map,
          center: { lat: -23.01220769176777, lng: -43.4600314526614 },
          radius: radiusInMeters, // Raio em metros
        });

        // Adiciona um marcador para indicar o centro do raio
        const marker = new google.maps.Marker({
          position: { lat: -3.745, lng: -38.523 },
          map,
          title: 'Área de Atuação',
        });
      }
    });
  }, [loader]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default Mapa;
