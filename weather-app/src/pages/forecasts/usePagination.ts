import { CITIES_COUNT, ITEMS_PER_PAGE } from "../../global.settings";
import { useAppSelector } from "../../typedHooks";
import { cities } from "../../utils/popularLocations";

export const usePagination = () => {
  const { currentPage } = useAppSelector((store) => store.pagination);

  const currentCities = cities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(CITIES_COUNT / ITEMS_PER_PAGE);
  const decrementButtonDisabled = currentPage === 1;
  const incrementButtonDisabled = currentPage === totalPages;

  return {
    currentCities,
    currentPage,
    totalPages,
    decrementButtonDisabled,
    incrementButtonDisabled,
  };
};
