import CONFIG from "./Config.ts";

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  GET_SELLERS: `${BASE_URL}/sellers`,
  GET_BUYERS: `${BASE_URL}/buyers`,
  GET_RECOMMENDED_SELLERS: (latBuyer: number, longBuyer: number, wasteId?: string) => `${BASE_URL}/recommender-seller?latbuyer=${latBuyer}&longbuyer=${longBuyer}${wasteId ? `&wasteId=${wasteId}` : ''}`,
  GET_WASTES: `${BASE_URL}/wastes`
};

export default API_ENDPOINT;
