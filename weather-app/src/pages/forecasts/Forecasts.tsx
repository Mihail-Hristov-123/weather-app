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
    itemsPerPage,
    changeItemsPerPage,
  } = usePagination();

  const itemsPerPageChoices = [10, 20, 30, 50];

  return (
    <div className=" flex flex-col items-center px-3 wrapper relative">
      <h1 className="main-title">Forecasts for popular locations</h1>
      <div id="scrollLocation" />
      <label className=" dark:text-white text-3xl self-start mb-6  relative left-8">
        Show:{" "}
        <select name="shownItemsCount" onChange={changeItemsPerPage}>
          {itemsPerPageChoices.map((count) => (
            <option value={count} selected={itemsPerPage === count}>
              {count}
            </option>
          ))}
        </select>
      </label>

      <section className=" flex flex-wrap gap-x-10 gap-y-8 justify-center content-center">
        {currentCities.map((city) => (
          <InfoCard cityName={city} />
        ))}
      </section>
      <menu className=" flex justify-around mt-12 mb-8 w-1/8">
        <button
          disabled={decrementButtonDisabled}
          onClick={() => dispatch(decrementPage())}
          className={`px-4 py-2 border rounded dark:bg-white
    ${decrementButtonDisabled && "opacity-50 cursor-not-allowed"}`}
        >
          Back
        </button>

        <select
          name="page"
          className=" dark:text-white text-xl"
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
          className={`px-4 py-2 border rounded dark:bg-white
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
