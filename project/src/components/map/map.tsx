import {memo, useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import L, {Icon, Marker} from 'leaflet';
import {Location} from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapPoint = {
  id: string,
  location: Location,
}

type MapProps = {
  cityLocation: Location,
  points: MapPoint[],
  selectedPoint: MapPoint | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

let markerGroup: L.LayerGroup;

function Map({cityLocation, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      if (markerGroup) {
        markerGroup.clearLayers();
      }
      markerGroup = L.layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerGroup);
      });
    }
  }, [map, points, selectedPoint]);

  useEffect(() => {
    if (map) {
      map.setView([cityLocation.latitude, cityLocation.longitude]);
    }
  }, [map, cityLocation]);

  return <div style={{minHeight: '100%', maxWidth: '1144px', marginLeft: 'auto', marginRight: 'auto'}} ref={mapRef}/>;
}

export default memo(Map);
