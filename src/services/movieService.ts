import axios, { type AxiosResponse } from "axios";
import type { MovieResponse } from "../types/movieResponse";

const API_TOKEN = import.meta.env.VITeAPITOKEN;

export const fetchMovies = async (
  query: string
): Promise<MovieResponse> => {
  const response: AxiosResponse<MovieResponse> = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        language: "en-US",
      },
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  return response.data;
};

