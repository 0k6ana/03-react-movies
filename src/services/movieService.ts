import axios from "axios";
import type { MovieResponse } from "../types/movieResponse";

const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchMovies = async (
  query: string
): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        language: "uk-UK",
      },
      headers: {
        Authorization: `Bearer ${VITE_API_TOKEN}`
      },
    }
  );
  return response.data;
};

