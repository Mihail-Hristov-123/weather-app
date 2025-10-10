import { FavoritesButton } from "@/components/buttons/FavoritesButton";
import { InfoButton } from "@/components/buttons/InfoButton";
import { FigureWithCaption } from "@/components/FigureWithCaption";

interface Props {
  data: CurrentWeatherResponse;
}

export const PresentationalInfoCard = ({ data }: Props) => {
  const {
    location: { name: cityName, country },
    current: {
      condition: { icon, text: conditionText },
      temp_c,
      feelslike_c,
    },
  } = data;

  return (
    <article className="bg-gray-400 min-w-[18vw] p-2 px-4 flex flex-col items-center rounded-2xl relative transition-all duration-300 transform hover:-translate-y-2 hover:-translate-x-2 ">
      <menu className=" flex justify-between w-full gap-x-4 items-center p-6">
        <FavoritesButton city={cityName} country={country} />
        <h3 className=" text-3xl font-extrabold">
          {cityName}, {country}
        </h3>
        <InfoButton city={cityName} country={country} />
      </menu>

      <div className=" flex items-center justify-center gap-8 w-full">
        <div className=" flex flex-col items-center gap-y-4 bg-white p-4   grow rounded-2xl text-black">
          <span className=" text-6xl"> {temp_c} °C</span>
          <span>Feels like: {feelslike_c} °C</span>
        </div>
        <FigureWithCaption
          className="flex flex-col items-center text-white text-xl "
          src={icon}
          caption={conditionText}
          alt={conditionText + "icon"}
        />
      </div>
    </article>
  );
};
