import axios from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<FetchMoviesResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return response.data.results;
}
