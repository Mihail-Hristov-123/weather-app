import { InfoCard } from "@/components/cards/InfoCard";
import { useAppDispatch } from "@/typedHooks";

import { decrementPage, incrementPage, setPage } from "./paginationSlice";
import { usePagination } from "./usePagination";
import { PageChangeButton } from "@/components/buttons/PageChangeButton";

const ITEMS_PER_PAGE_CHOICES = [10, 20, 30, 50];

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
    <div className=" flex flex-col items-center px-3 wrapper relative">
      <h1 className="main-title">Forecasts for popular locations</h1>
      <label className="text-3xl self-start mb-6  relative left-8">
        Show:{" "}
        <select name="shownItemsCount" onChange={changeItemsPerPage}>
          {ITEMS_PER_PAGE_CHOICES.map((count) => (
            <option value={count} selected={itemsPerPage === count} key={count}>
              {count}
            </option>
          ))}
        </select>
      </label>

      <section className=" flex flex-wrap gap-x-10 gap-y-8 justify-center content-center">
        {currentCities.map((city) => (
          <InfoCard cityName={city} key={city} />
        ))}
      </section>
      <menu className=" flex justify-around mt-12 mb-8 w-1/8">
        <PageChangeButton
          type="decrement"
          disabled={decrementButtonDisabled}
          onClick={() => dispatch(decrementPage())}
        />

        <select
          name="page"
          className=" text-xl"
          onChange={(e) => dispatch(setPage(Number(e.target.value)))}
        >
          {[...Array(totalPages)].map((_, i) => {
            const value = i + 1;
            return (
              <option
                selected={currentPage === value}
                value={value}
                key={value}
              >
                {value}
              </option>
            );
          })}
        </select>

        <PageChangeButton
          type="increment"
          disabled={incrementButtonDisabled}
          onClick={() => dispatch(incrementPage())}
        />
      </menu>
    </div>
  );
};
