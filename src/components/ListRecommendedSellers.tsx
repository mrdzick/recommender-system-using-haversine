import { Spinner } from '@material-tailwind/react';
import { RecommendedSellers, Wastes } from "../services/api.ts";
import { generateAvatar } from "../services/avatarGenerator.ts";
import SelectWasteMenu from './SelectWaste.tsx';

type ListRecommendedSellersProps = {
  wastes: Wastes[];
  recommendedSellers: RecommendedSellers[];
  isLoading: boolean;
  fallbackResult: (wasteId: string) => void;
}

const ListRecommendedSellers = ({ recommendedSellers, wastes, isLoading, fallbackResult }: ListRecommendedSellersProps) => {
  return (
    <section className="w-[30vw] h-screen overflow-y-auto">
      <SelectWasteMenu 
      wastes={wastes}
      fallbackSelectWaste={fallbackResult}
      />
      <div className="pl-1">
        <ul role="list" className="divide-y w-full max-auto px-2 divide-gray-100">
        {recommendedSellers && !isLoading && recommendedSellers.map((seller, idx) => (
          <li key={seller.sellerId} className="flex flex-col gap-x-6 py-5">
            <div className="flex gap-x-4 justify-between">
              <div className="flex gap-5 items-center flex-auto w-[50%]">
                <img className="h-11 w-11 flex-none rounded-full bg-gray-50" src={generateAvatar(idx + 1)} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{seller.companyName}</p>
                </div>
              </div>
              <div className="flex-auto w-[50%]">
                <p className="text-sm leading-6 text-gray-900 seller-city capitalize">{seller.city.toLowerCase()}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {seller.distance.toFixed(2)} Km
                </p>
              </div>
            </div>
          </li>
        ))}
        </ul>

        {isLoading && <Spinner/>}
      </div>
    </section>
  );
};

export default ListRecommendedSellers;
