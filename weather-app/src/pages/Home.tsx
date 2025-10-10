import { PresentationalInfoCard } from "@/components/cards/subcards/PresentationalInfoCard";
import { useWeatherSearch } from "@/hooks/useWeatherSearch";
import searchSVG from "@/assets/search.svg";
import { FallbackCard } from "@/components/cards/FallbackCard";
import { Datalist } from "@/components/Datalist";

export const Home = () => {
  const {
    searchValue,
    handleSubmit,
    isError,
    isLoading,
    suggestions,
    history,
    data,
    searchRef,
    handleSearchChange,
  } = useWeatherSearch();

  return (
    <main className=" flex flex-col items-center gap-12 wrapper">
      <section className=" flex flex-col items-center gap-24">
        <h1 className=" main-title pt-20 ">Welcome to Weather App</h1>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center gap-12 "
        >
          <label className=" flex flex-col gap-y-6 text-3xl relative">
            Check out any city's current weather
            <input
              list={searchValue ? "suggestions" : "recent"}
              value={searchValue}
              placeholder="Enter a city"
              minLength={2}
              ref={searchRef}
              required
              onChange={handleSearchChange}
              className="border-3 relative rounded-4xl  py-2 pl-10"
              type="search"
            />
            <button
              type="submit"
              className=" w-8 absolute bottom-3 left-2 "
              disabled={isLoading}
            >
              <img src={searchSVG} alt=" search icon" />
            </button>
            <Datalist id="recent" options={history} />
            {suggestions && (
              <Datalist
                options={suggestions}
                id="suggestions"
                getOptionValue={(s) => `${s.name}, ${s.country}`}
              />
            )}
          </label>
        </form>
      </section>
      {(isLoading || isError) && <FallbackCard loading={isLoading} />}
      {data && <PresentationalInfoCard data={data} />}
    </main>
  );
};
