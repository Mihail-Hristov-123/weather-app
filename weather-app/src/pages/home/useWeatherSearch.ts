import type { FormEvent } from "react";
import { useLazyGetCurrentWeatherByCityQuery } from "@/services/weatherApi";
import { useAppDispatch, useAppSelector } from "@/typedHooks";
import { addToHistory, reset, update } from "./searchSlice";

export const useWeatherSearch = () => {
  const { value: searchValue, history: searchHistory } = useAppSelector(
    (state) => state.search
  );

  const dispatch = useAppDispatch();

  const [trigger, { data, isLoading, isError }] =
    useLazyGetCurrentWeatherByCityQuery();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const query = searchValue.trim();
    dispatch(reset());
    dispatch(addToHistory(query));
    await trigger(query);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(update(e.target.value));

  return {
    searchValue,
    searchHistory,
    handleSubmit,
    dispatch,
    isLoading,
    isError,
    data,
    handleSearchChange,
  };
};
