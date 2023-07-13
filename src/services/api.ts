import API_ENDPOINT from "../globals/ApiEndpoint.ts";

const BASE_GET_API = async <T>(API_ENDPOINT: string):Promise<T> => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();

  return data as T;
};

const CATCH_ERROR = (error: Error) => {
  console.error(error.message);
  throw new Error(error.message);
};

export type Users = {
  city: string;
  companyName: string;
  id: string;
  latitude: number;
  longitude: number;
  province: string;
}

export type ResponseAPI<T> = {
  data: T[];
  message: string;
  status: string;
}

export type Sellers = Users;
export type Buyers = Users;
export type RecommendedSellers = {
  sellerId: string;
  latitude: number;
  longitude: number;
  distance: number;
  companyName: string;
};

export const API = (() => ({
  GET_SELLERS: async () => {
    try {
      const data = await BASE_GET_API(API_ENDPOINT.GET_SELLERS);

      return data as ResponseAPI<Sellers>;
    } catch (error) {
      CATCH_ERROR(error as Error);
    }
  },
  GET_BUYERS: async () => {
    try {
      const data = await BASE_GET_API(API_ENDPOINT.GET_BUYERS);

      return data as ResponseAPI<Buyers>;
    } catch (error) {
      CATCH_ERROR(error as Error);
    }
  },
  GET_RECOMMENDED_SELLERS: async (latBuyer: number, longBuyer: number) => {
    try {
      const data = await BASE_GET_API(API_ENDPOINT.GET_RECOMMENDED_SELLERS(latBuyer, longBuyer));

      return data as ResponseAPI<RecommendedSellers>;
    } catch (error) {
      CATCH_ERROR(error as Error);
    }
  },
}))();
