import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Location } from '../../types/map';
import { Offer } from '../../types/offer';

type MapProps = {
  city: Location;
  offers: Offer[];
  className?: string;
};

const createCustomIcon = () =>
  leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

function Map({ city, offers }: MapProps): JSX.Element {
  const points = offers.map((offer: Offer) => ({
    id: offer.id,
    location: offer.location,
    title: offer.title,
  }));

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<leaflet.Map | null>(null);
  const markersLayer = useRef<leaflet.LayerGroup | null>(null);

  useEffect(() => {
    if (mapRef.current && !map.current) {
      map.current = leaflet.map(mapRef.current, {
        center: [city.latitude, city.longitude],
        zoom: city.zoom,
        zoomControl: false,
      });

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(map.current);

      markersLayer.current = leaflet.layerGroup().addTo(map.current);

      leaflet.control
        .zoom({
          position: 'bottomright',
        })
        .addTo(map.current);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [city]);

  useEffect(() => {
    if (map.current && markersLayer.current) {
      markersLayer.current.clearLayers();

      points.forEach((point) => {
        leaflet
          .marker([point.location.latitude, point.location.longitude], {
            icon: createCustomIcon(),
          })
          .addTo(markersLayer.current!)
          .bindPopup(point.title);
      });

      map.current.setView([city.latitude, city.longitude], city.zoom);
    }
  }, [city, points]);

  return <section ref={mapRef} className="cities__map map" />;
}

export default Map;
