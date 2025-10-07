import { InfoCard } from "../../components/cards/InfoCard";
import { useAppDispatch, useAppSelector } from "../../typedHooks";
import { cities } from "../../utils/popularLocations";
import {
  CITIES_COUNT,
  decrementPage,
  incrementPage,
  ITEMS_PER_PAGE,
} from "./paginationSlice";

export const Forecasts = () => {
  const { currentPage } = useAppSelector((store) => store.pagination);
  const dispatch = useAppDispatch();
  const currentCities = cities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(CITIES_COUNT / ITEMS_PER_PAGE);
  const decrementButtonDisabled = currentPage === 1;
  const incrementButtonDisabled = currentPage + 1 === totalPages;
  return (
    <div className=" flex flex-col items-center">
      <h1>Forecasts for popular locations</h1>
      <section className=" flex flex-wrap gap-x-6 gap-y-8 justify-around">
        {" "}
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
