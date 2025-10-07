import { PresentationalInfoCard } from "../../components/cards/PresentationalInfoCard";
import { ErrorCard } from "../../components/cards/ErrorCard";
import { useWeatherSearch } from "./useWeatherSearch";

export const Home = () => {
  const {
    searchValue,
    handleSubmit,
    isError,
    isLoading,
    data,
    handleSearchChange,
  } = useWeatherSearch();

  return (
    <div className=" flex flex-col items-center gap-12">
      <div className=" flex flex-col items-center gap-24">
        <h1 className=" text-center text-4xl">Welcome to Weather App</h1>
        <form onSubmit={handleSubmit}>
          <label className=" flex flex-col text-xl">
            Checkout any city's current weather
            <input
              value={searchValue}
              minLength={2}
              required
              onChange={handleSearchChange}
              className="border-2  rounded-4xl px-1 py-0.5"
              type="search"
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>
      </div>
      {isError && <ErrorCard />}
      {isLoading && <p>Loading ...</p>}
      {data && !isError && <PresentationalInfoCard data={data} />}
    </div>
  );
};
