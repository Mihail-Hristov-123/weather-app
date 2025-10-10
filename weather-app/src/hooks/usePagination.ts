import { useEffect, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/typedHooks";

import { setItemsPerPage, setPage } from "@/slices/paginationSlice";
import { CITIES } from "@/constants";

export const usePagination = () => {
  const { currentPage, itemsPerPage } = useAppSelector(
    (store) => store.pagination
  );
  const dispatch = useAppDispatch();

  const changeItemsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
    dispatch(setPage(1));
  };

  const currentCities = CITIES.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(CITIES.length / itemsPerPage);
  const decrementButtonDisabled = currentPage === 1;
  const incrementButtonDisabled = currentPage === totalPages;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return {
    currentCities,
    currentPage,
    totalPages,
    decrementButtonDisabled,
    incrementButtonDisabled,
    itemsPerPage,
    changeItemsPerPage,
  };
};
