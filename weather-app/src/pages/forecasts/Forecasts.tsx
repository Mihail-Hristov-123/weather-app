import { InfoCard } from "../../components/cards/InfoCard";
import { useAppDispatch } from "../../typedHooks";

import { decrementPage, incrementPage, setPage } from "./paginationSlice";
import { usePagination } from "./usePagination";

export const Forecasts = () => {
  const dispatch = useAppDispatch();
  const {
    currentCities,
    decrementButtonDisabled,
    incrementButtonDisabled,
    totalPages,
    currentPage,
  } = usePagination();

  return (
    <div className=" flex flex-col items-center">
      <h1>Forecasts for popular locations</h1>
      <section className=" flex flex-wrap gap-x-6 gap-y-8 justify-around">
        {currentCities.map((city) => (
          <InfoCard cityName={city} />
        ))}
      </section>
      <menu className=" flex justify-around my-12 w-1/8">
        <button
          disabled={decrementButtonDisabled}
          onClick={() => dispatch(decrementPage())}
          className={`px-4 py-2 border rounded 
    ${
      decrementButtonDisabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-gray-200"
    }`}
        >
          Back
        </button>

        <select
          name="page"
          onChange={(e) => dispatch(setPage(Number(e.target.value)))}
        >
          {[...Array(totalPages)].map((_, i) => {
            const value = i + 1;
            return (
              <option selected={currentPage === value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <button
          disabled={incrementButtonDisabled}
          onClick={() => dispatch(incrementPage())}
          className={`px-4 py-2 border rounded 
    ${
      incrementButtonDisabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-gray-200"
    }`}
        >
          Next
        </button>
      </menu>
    </div>
  );
};
