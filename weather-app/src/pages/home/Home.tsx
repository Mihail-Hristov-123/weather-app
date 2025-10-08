import { PresentationalInfoCard } from "../../components/cards/PresentationalInfoCard";
import { ErrorCard } from "../../components/cards/ErrorCard";
import { useWeatherSearch } from "./useWeatherSearch";
import searchSVG from "../../assets/search.svg";

export const Home = () => {
  const {
    searchValue,
    handleSubmit,
    isError,
    isLoading,
    data,
    searchHistory,
    handleSearchChange,
  } = useWeatherSearch();

  return (
    <div className=" flex flex-col items-center gap-12 wrapper">
      <div className=" flex flex-col items-center gap-24">
        <h1 className=" main-title pt-20 ">Welcome to Weather App</h1>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center gap-12 "
        >
          <label className=" flex flex-col gap-y-6 text-3xl relative dark:text-white">
            Check out any city's current weather
            <input
              list="recent"
              value={searchValue}
              minLength={2}
              required
              onChange={handleSearchChange}
              className="border-3 relative rounded-4xl p-2 pl-10"
              type="search"
            />
            <button
              type="submit"
              className=" w-8 absolute bottom-3 left-2 "
              disabled={isLoading}
            >
              <img
                src={searchSVG}
                className=" rotate-[360deg]"
                alt=" search icon"
              />
            </button>
            <datalist id="recent">
              {searchHistory.length &&
                searchHistory.map((value) => <option value={value} />)}
            </datalist>
          </label>
        </form>
      </div>
      {isError && <ErrorCard />}
      {isLoading && <p>Loading ...</p>}
      {data && !isError && <PresentationalInfoCard data={data} />}
    </div>
  );
};
