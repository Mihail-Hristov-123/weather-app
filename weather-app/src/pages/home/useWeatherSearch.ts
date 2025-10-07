import type { FormEvent } from "react";
import { useLazyGetCurrentWeatherByCityQuery } from "../../services/weatherApi";
import { useAppDispatch, useAppSelector } from "../../typedHooks";
import { reset, update } from "./searchSlice";

export const useWeatherSearch = () => {
  const searchValue = useAppSelector((state) => state.search.value);

  const dispatch = useAppDispatch();

  const [trigger, { data, isLoading, isError }] =
    useLazyGetCurrentWeatherByCityQuery();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const query = searchValue.trim();
    dispatch(reset());
    await trigger(query);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(update(e.target.value));

  return {
    searchValue,
    handleSubmit,
    dispatch,
    isLoading,
    isError,
    data,
    handleSearchChange,
  };
};
