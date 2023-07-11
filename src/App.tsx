import {useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

function App() {
  const position: LatLngExpression = [-6.2075480375766325, 106.84144067081318];

  const [sellers, setSellers] = useState<[] | null>(null);
  const [buyers, setBuyers] = useState<[] | null>(null);
  const [recommendedSellers, setRecommendedSellers] = useState<[] | null>(null);
  const [positionBuyer, setPositionBuyer] = useState<[number, number]>([]);

  const getSellers = async () => {
    try {
      const response = await fetch('https://waste-bank-recommender-system-be-3i3nt6hkga-et.a.run.app/sellers');
      const data = await response.json();

      setSellers(data?.data);

    } catch (error) {
      console.log(error);
    }
  };

  const getBuyers = async () => {
    try {
      const response = await fetch('https://waste-bank-recommender-system-be-3i3nt6hkga-et.a.run.app/buyers');
      const data = await response.json();

      setBuyers(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecommendedSellers = async ({ latBuyer, longBuyer }: {latBuyer: number, longBuyer: number}) => {
    try {
      const response = await fetch(`https://waste-bank-recommender-system-be-3i3nt6hkga-et.a.run.app/recommender-seller?latbuyer=${latBuyer}&longbuyer=${longBuyer}`);
      const data = await response.json();

      setRecommendedSellers(data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSellers();
    getBuyers();
  }, []);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sellers && (
        sellers.map((seller: any) => (
          <Marker key={seller.id} position={[seller.latitude, seller.longitude]}
            icon={L.divIcon({
                            className: 'custom-icon-marker',
              html: `<div class="custom-icon__marker">
<svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00"></path></g></svg>
</div>`,

                          }
            )}
          >
            <Popup>
              {seller.companyName}
            </Popup>
          </Marker>
        ))
      )}

      {buyers && (
        buyers.map((buyer: any) => (
          <Marker key={buyer.id} position={[buyer.latitude, buyer.longitude]}
            icon={L.divIcon({
              className: 'custom-icon-marker',
              html: `<div class="custom-icon__marker w-[25px]">
<svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#3d57d6"></path></g></svg>
</div>`
              }
            )}
            eventHandlers={{
              click: async (e) => {
                await getRecommendedSellers({ latBuyer: e.latlng.lat, longBuyer: e.latlng.lng });
                setPositionBuyer([e.latlng.lat, e.latlng.lng]);
              }
            }}
          >
            <Popup>
              {buyer.companyName}
            </Popup>
          </Marker>
        ))
      )}

      {recommendedSellers &&
        recommendedSellers.map((seller: any) => (
          <Polyline key={seller.id} positions={[[seller.latitude, seller.longitude], positionBuyer]} color="red">
          </Polyline>
        ))
      }
    </MapContainer>
  )
}

export default App
