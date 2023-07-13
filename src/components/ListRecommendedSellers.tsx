import {RecommendedSellers} from "../services/api.ts";

type ListRecommendedSellersProps = {
  recommendedSellers: RecommendedSellers[];
  isLoading: boolean;
}

const ListRecommendedSellers = ({ recommendedSellers, isLoading }: ListRecommendedSellersProps) => {
  return (
    <section>
      <h2>Recommended waste bank</h2>
      <div>
        <ul>
          {recommendedSellers && !isLoading && recommendedSellers.map((seller: RecommendedSellers, index) => (
            <li key={seller.sellerId}>
              {index + 1}. {seller.companyName} : {seller.distance} Km
            </li>
          ))}
        </ul>
        {isLoading && <p>Loading...</p>}
      </div>
    </section>
  );
};

export default ListRecommendedSellers;
