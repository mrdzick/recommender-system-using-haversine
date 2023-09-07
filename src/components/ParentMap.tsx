import { TileLayer, MapContainer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import {Buyers, RecommendedSellers, Sellers} from "../services/api.ts";
import ListMarkerMap from "./ListMarkerMap.tsx";
import ListPolylineMap from "./ListPolylineMap.tsx";
import Legend from "./Legend.tsx";

type ParentMapProps = {
  sellers: Sellers[] | null | RecommendedSellers[];
  buyers: Buyers[] | null;
  recommendedSellers: RecommendedSellers[] | null;
  centerPositionOfMap: [number, number];
  centerPositionPolyline: number[][];
  positionTargetBuyer: [number, number];
  fallbackMarkerClick?: (latBuyer: number, longBuyer: number) => void;
}

const ParentMap = ({
  sellers,
  buyers,
  recommendedSellers,
  centerPositionOfMap,
  fallbackMarkerClick,
  positionTargetBuyer,
  centerPositionPolyline
}: ParentMapProps) => {

  return (
    <div>
      <MapContainer
        center={centerPositionOfMap as LatLngExpression}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {sellers && (
          <ListMarkerMap
            dataMarker={sellers}
            typeMarker="seller"
            iconMarker={`
              <div class="custom-icon__marker">
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00"></path></g></svg>
              </div>
            `}
          />
        )}

        {buyers && (
          <ListMarkerMap
            dataMarker={buyers}
            typeMarker="buyer"
            iconMarker={`
              <div class="custom-icon__marker w-[25px]">
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#3d57d6"></path></g></svg>
              </div>
            `}
            fallbackEventClick={(latBuyer, longBuyer) => {
              fallbackMarkerClick && fallbackMarkerClick(latBuyer, longBuyer);
            }}
          />
        )}

        {recommendedSellers && (
          <ListPolylineMap
            dataPolyline={recommendedSellers}
            centerPositionPolyline={centerPositionPolyline}
            positionTargetBuyer={positionTargetBuyer}
          />
        )}

        <Legend />
      </MapContainer>
    </div>
  );
};

export default ParentMap;
