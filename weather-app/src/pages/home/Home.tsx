import type { FormEvent } from "react";
import { useLazyGetCurrentWeatherByCityQuery } from "../../services/weatherApi";

import { useAppDispatch, useAppSelector } from "../../typedHooks";

import { reset, update } from "./searchSlice";

export const Home = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const [trigger, { data, isLoading, isError }] =
    useLazyGetCurrentWeatherByCityQuery();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted");
    await trigger(searchValue);
    console.log(data);
    dispatch(reset());
  };

  return (
    <div className=" flex flex-col items-center gap-24">
      <h1 className=" text-center text-4xl">Welcome to Weather App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className=" flex flex-col text-xl">
          Checkout any city's current weather
          <input
            value={searchValue}
            minLength={2}
            required
            onChange={(e) => dispatch(update(e.target.value))}
            className="border-2  rounded-4xl px-1 py-0.5"
            type="search"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
