import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1" }),
  endpoints: (builder) => ({
    getCurrentWeatherByCity: builder.query<CurrentWeatherResponse, string>({
      query: (city) => `current.json?key=${WEATHER_API_KEY}&q=${city}`,
    }),
    getForecastByCity: builder.query<ForecastResponse, string>({
      query: (city) => `forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=6`,
    }),
    getAutocompleteRecommendations: builder.query<
      AutocompleteSuggestion[],
      string
    >({
      query: (currentSearch: string) =>
        `search.json?key=${WEATHER_API_KEY}&q=${currentSearch}`,
    }),
  }),
});
export const {
  useGetCurrentWeatherByCityQuery,
  useLazyGetCurrentWeatherByCityQuery,
  useGetForecastByCityQuery,
  useGetAutocompleteRecommendationsQuery,
} = weatherApi;
