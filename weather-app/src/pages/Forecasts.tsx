import { InfoCard } from "@/components/cards/InfoCard";
import { useAppDispatch } from "@/typedHooks";

import {
  decrementPage,
  incrementPage,
  setPage,
} from "../slices/paginationSlice";
import { usePagination } from "@/hooks/usePagination";
import { PageChangeButton } from "@/components/buttons/PageChangeButton";
import { Select } from "@/components/Select";
import { ITEMS_PER_PAGE_CHOICES } from "@/constants";

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

  return (
    <main className=" flex flex-col items-center px-3 wrapper relative">
      <h1 className="main-title">Forecasts for popular locations</h1>
      <label className="text-3xl self-start mb-6  relative left-8">
        Show:{" "}
        <Select
          name="shownItemsCount"
          value={itemsPerPage}
          onChange={changeItemsPerPage}
          options={ITEMS_PER_PAGE_CHOICES.map((count) => ({
            value: count,
          }))}
        />
      </label>

      <section className=" flex flex-wrap gap-x-10 gap-y-8 justify-center content-center">
        {currentCities.map((city) => (
          <InfoCard location={city} />
        ))}
      </section>
      <menu className=" flex justify-around mt-12 mb-8 w-1/8">
        <PageChangeButton
          type="decrement"
          disabled={decrementButtonDisabled}
          onClick={() => dispatch(decrementPage())}
        />

        <Select
          name="page"
          value={currentPage}
          onChange={(e) => dispatch(setPage(Number(e.target.value)))}
          options={[...Array(totalPages)].map((_, i) => ({
            value: i + 1,
          }))}
          className="text-xl"
        />

        <PageChangeButton
          type="increment"
          disabled={incrementButtonDisabled}
          onClick={() => dispatch(incrementPage())}
        />
      </menu>
    </main>
  );
};
