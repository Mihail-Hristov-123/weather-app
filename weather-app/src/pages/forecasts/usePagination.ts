import { useAppSelector } from "../../typedHooks";
import { cities } from "../../utils/popularLocations";

export const usePagination = () => {
  const { currentPage, itemsPerPage } = useAppSelector(
    (store) => store.pagination
  );

  const currentCities = cities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(cities.length / itemsPerPage);
  const decrementButtonDisabled = currentPage === 1;
  const incrementButtonDisabled = currentPage === totalPages;

  return {
    currentCities,
    currentPage,
    totalPages,
    decrementButtonDisabled,
    incrementButtonDisabled,
    itemsPerPage,
  };
};
