import axios from 'axios';
import type { UnsplashSearchResponse } from '../types/unsplash';

const ACCESS_KEY = '5tVMXN8e0fLRdDFr2ebqNhYmhDKol_mZ7InnGJmuupM';
const BASE_URL = 'https://api.unsplash.com';

interface SearchImagesParams {
  query: string;
  page: number;
  perPage?: number;
}

export const searchImages = async ({
  query,
  page,
  perPage = 12,
}: SearchImagesParams): Promise<UnsplashSearchResponse> => {
  const response = await axios.get<UnsplashSearchResponse>(
    `${BASE_URL}/search/photos`,
    {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: ACCESS_KEY,
      },
    }
  );

  return response.data;
};
