import axios from "axios";
import { Image } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";

interface UnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const getImages = async (
  query: string,
  currentPage: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 16,
      client_id: "vX-p8-lENvSnnDRxpxCTXxulCLp5zeXELm-q_0Vls6Q",
      orientation: "landscape",
    },
  });

  return response.data;
};
