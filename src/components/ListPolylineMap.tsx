import {RecommendedSellers} from "../services/api.ts";
import {Marker, Polyline} from "react-leaflet";
import L, {LatLngExpression} from "leaflet";
import {Fragment} from "react";

type ListPolylineMapProps = {
  dataPolyline: RecommendedSellers[];
  centerPositionPolyline: number[][];
  positionTargetBuyer: [number, number];
}

const ListPolylineMap = ({ dataPolyline, positionTargetBuyer, centerPositionPolyline  }: ListPolylineMapProps) => {
  return dataPolyline.map((polyLine, index) => {
    return (
      <Fragment key={polyLine.sellerId + index}>
        <Polyline
          positions={[[polyLine.latitude, polyLine.longitude], positionTargetBuyer]}
          color="red"
        />
        <Marker
          position={centerPositionPolyline[index] as LatLngExpression}
          icon={L.divIcon({
            className: 'custom-icon-marker',
            html: `
              <div class="custom-polyline__label">
                  <span>${polyLine.distance} Km</span>
              </div>  
            `
          })}
        />
      </Fragment>
    );
  });
};

export default ListPolylineMap;
