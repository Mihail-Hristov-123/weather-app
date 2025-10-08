import type { WeatherInfo } from "../../types";
import { FavoritesButton } from "../buttons/FavoritesButton";
import { InfoButton } from "../buttons/InfoButton";

export const PresentationalInfoCard = ({ data }: { data: WeatherInfo }) => {
  const { location, current } = data;
  const { name: cityName } = location;

  return (
    <section className="bg-gray-400 min-w-[18vw] p-2 px-4 flex flex-col items-center rounded-2xl relative transition-all duration-300 transform hover:-translate-y-2 hover:-translate-x-2 ">
      <menu className=" flex justify-between w-full gap-x-4 items-center p-6">
        <FavoritesButton cityName={cityName} />
        <h3 className=" text-3xl font-extrabold">
          {cityName}, {location.country}
        </h3>
        <InfoButton cityName={cityName} />
      </menu>

      <div className=" flex items-center justify-center gap-8 w-full">
        <div className=" flex flex-col items-center gap-y-4 bg-white p-4 rounded-2xl">
          <span className=" text-6xl"> {current.temp_c} °C</span>
          <span>Feels like: {current.feelslike_c} °C</span>
        </div>
        <div className=" flex flex-col items-center ">
          <img
            className="w-32"
            src={current.condition.icon}
            alt={current.condition.text + "icon"}
          />
          <p className=" relative bottom-3 font-bold text-white text-2xl">
            {current.condition.text}
          </p>
        </div>
      </div>
    </section>
  );
};
