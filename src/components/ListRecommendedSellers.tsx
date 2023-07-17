import { Spinner } from '@material-tailwind/react';
import { RecommendedSellers } from "../services/api.ts";
import { generateAvatar } from "../services/avatarGenerator.ts";

type ListRecommendedSellersProps = {
  recommendedSellers: RecommendedSellers[];
  isLoading: boolean;
}

const ListRecommendedSellers = ({ recommendedSellers, isLoading }: ListRecommendedSellersProps) => {
  return (
    <section>
      <div className="pl-1">
        <ul role="list" className="divide-y divide-gray-100">
        {recommendedSellers && !isLoading && recommendedSellers.map((seller, idx) => (
          <li key={seller.sellerId} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img className="h-11 w-11 flex-none rounded-full bg-gray-50" src={generateAvatar(idx + 1)} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{seller.companyName}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{seller.sellerId}</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{seller.city}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {seller.distance}
              </p>
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
