import L from "leaflet";
import {Marker, Popup} from "react-leaflet";
import {Users} from "../services/api.ts";

type ListMarkerMapProps<U> = {
  dataMarker: U[];
  typeMarker: 'buyer' | 'seller';
  fallbackEventClick?: (lat: number, long: number) => void;
  iconMarker: string;
}

const ListMarkerMap = <T extends Users,>({ dataMarker, typeMarker, iconMarker, fallbackEventClick }: ListMarkerMapProps<T>) => {
  return dataMarker.map((item ) => {
    return (
      <Marker key={item.id} position={[item.latitude, item.longitude]}
        icon={L.divIcon({
          className: 'custom-icon-marker',
          html: iconMarker,
        })}

        {...(typeMarker === 'buyer' ? {
          eventHandlers: {
            click: (e) => {
              fallbackEventClick && fallbackEventClick(e.latlng.lat, e.latlng.lng);
            }
          }
        } : {})
      }
      >
        <Popup>
          {item.companyName}
        </Popup>
      </Marker>
    )
  });
};

export default ListMarkerMap;
