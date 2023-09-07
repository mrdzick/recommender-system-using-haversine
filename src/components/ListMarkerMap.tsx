import L from "leaflet";
import {Marker, Popup} from "react-leaflet";
import {RecommendedSellers, Sellers} from "../services/api.ts";

type ListMarkerMapProps = {
  dataMarker: Sellers[] | RecommendedSellers[];
  typeMarker: 'buyer' | 'seller';
  fallbackEventClick?: (lat: number, long: number) => void;
  iconMarker: string;
}

const ListMarkerMap = ({ dataMarker, typeMarker, iconMarker, fallbackEventClick }: ListMarkerMapProps) => {
  return dataMarker.map((item ) => {
    return (
      <Marker key={item?.id || item.sellerId} position={[item.latitude, item.longitude]}
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
