import {useEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css'
import { API, Buyers, RecommendedSellers, Sellers } from "./services/api.ts";
import ParentMap from "./components/ParentMap.tsx";
import ListRecommendedSellers from "./components/ListRecommendedSellers.tsx";

function App() {
  const [sellers, setSellers] = useState<Sellers[] | null>(null);
  const [buyers, setBuyers] = useState<Buyers[] | null>(null);
  const [recommendedSellers, setRecommendedSellers] = useState<RecommendedSellers[] | null>(null);
  const [positionBuyer, setPositionBuyer] = useState<[number, number]>([0, 0]);
  const [centerPositionPolyline, setCenterPositionPolyline] = useState<number[][]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onGetRecommendedSellers = async (latBuyer: number, longBuyer: number) => {
    setIsLoading(true);
    setPositionBuyer([latBuyer, longBuyer]);

    const dataRecommendedSellers = await API.GET_RECOMMENDED_SELLERS(latBuyer, longBuyer);

    if (dataRecommendedSellers) {
      const middlePointLatitudeAndLongitude = dataRecommendedSellers?.data?.map((item) => {
        return [((item.latitude + latBuyer) / 2), ((item.longitude + longBuyer) / 2)];
      });

      setRecommendedSellers(dataRecommendedSellers?.data);
      setCenterPositionPolyline(middlePointLatitudeAndLongitude);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    (async () => {
      const [sellers, buyers] = await Promise.all(
        [API.GET_SELLERS(), API.GET_BUYERS()]
      );

      if (sellers && buyers) {
        setSellers(sellers?.data);
        setBuyers(buyers?.data);
      }
    })();
  }, []);


  return (
    <section className="flex">
      <ParentMap
        sellers={sellers}
        buyers={buyers}
        recommendedSellers={recommendedSellers}
        centerPositionOfMap={[-6.1753924, 106.8271528]}
        centerPositionPolyline={centerPositionPolyline}
        fallbackMarkerClick={onGetRecommendedSellers}
        positionTargetBuyer={positionBuyer}
      />
      <ListRecommendedSellers
        recommendedSellers={recommendedSellers || []}
        isLoading={isLoading}
      />
    </section>
  )
}

export default App
