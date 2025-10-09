import { useEffect, type FormEvent } from "react";
import {
  useGetAutocompleteRecommendationsQuery,
  useLazyGetCurrentWeatherByCityQuery,
} from "@/services/weatherApi";
import { useAppDispatch, useAppSelector } from "@/typedHooks";
import {
  addToHistory,
  resetSearch,
  setAutocompleteSuggestions,
  updateSearch,
} from "./searchSlice";

export const useWeatherSearch = () => {
  const { searchValue, history } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  const [trigger, { data, isLoading, isError }] =
    useLazyGetCurrentWeatherByCityQuery();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const query = searchValue.trim();
    dispatch(resetSearch());
    dispatch(addToHistory(searchValue));
    await trigger(query);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateSearch(e.target.value));

  const { data: suggestions, isSuccess } =
    useGetAutocompleteRecommendationsQuery(searchValue, {
      skip: searchValue.length === 0,
    });

  useEffect(() => {
    if (isSuccess && suggestions) {
      dispatch(setAutocompleteSuggestions(suggestions));
    }
  }, [suggestions, isSuccess, dispatch]);

  return {
    searchValue,
    handleSubmit,
    isLoading,
    suggestions,
    isError,
    data,
    handleSearchChange,
    history,
  };
};
