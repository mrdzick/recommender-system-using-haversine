import CONFIG from "./Config.ts";

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  GET_SELLERS: `${BASE_URL}/sellers`,
  GET_BUYERS: `${BASE_URL}/buyers`,
  GET_RECOMMENDED_SELLERS: (latBuyer: number, longBuyer: number) => `${BASE_URL}/recommender-seller?latbuyer=${latBuyer}&longbuyer=${longBuyer}`,
};

export default API_ENDPOINT;
