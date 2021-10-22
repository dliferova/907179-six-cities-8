import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {Location} from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapPoint = {
  title: string,
  location: Location,
}

type MapProps = {
  cityLocation: Location,
  points: MapPoint[],
  selectedPoint: MapPoint | undefined;
}

//для отображения всех маркеров
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//для отображения выбранного пользователем маркера
const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({cityLocation, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  //добавления маркеров на карту
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map map" style={{height: '500px'}} ref={mapRef}/>;
}

export default Map;
