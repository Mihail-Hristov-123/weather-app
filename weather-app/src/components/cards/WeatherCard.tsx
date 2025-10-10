import { FigureWithCaption } from "../FigureWithCaption";

export const WeatherCard = ({ data }: { data: ForecastDay }) => {
  const {
    date,
    day: {
      avgtemp_c,
      uv,
      condition: { icon, text },
      daily_chance_of_rain,
      daily_will_it_snow,
    },
  } = data;

  return (
    <article className=" relative w-[12vw] min-w-36">
      <div className="border-4 border-gray-800 w-full p-4 flex group flex-col items-center rounded-2xl dark:border-white transition-all duration-700 ease-in-out transform text-black origin-bottom absolute hover:-translate-y-32 hover:scale-150  bg-white hover:z-10 ">
        <h3>{date}</h3>
        <FigureWithCaption
          src={icon}
          alt={text}
          caption={text}
          className="w-full flex flex-col items-center"
        />
        <div className=" hidden group-hover:flex group-hover:flex-col py-2 text-sm ">
          <p>
            Average temperature: {avgtemp_c} <sup>°C</sup>
          </p>
          <p> Chances of rain: {daily_chance_of_rain}%</p>
          <p>UV index - {uv}</p>
          <p>Will it snow - {daily_will_it_snow ? "Yes" : "No"}</p>
        </div>
      </div>
    </article>
  );
};
