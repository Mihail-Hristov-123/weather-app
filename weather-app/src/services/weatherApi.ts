import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1" }),
  endpoints: (builder) => ({
    getCurrentWeatherByCity: builder.query({
      query: (city) => `current.json?key=${WEATHER_API_KEY}&q=${city}`,
    }),
  }),
});
export const {
  useGetCurrentWeatherByCityQuery,
  useLazyGetCurrentWeatherByCityQuery,
} = weatherApi;
