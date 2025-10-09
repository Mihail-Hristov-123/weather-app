import { FigureWithCaption } from "../FigureWithCaption";

export const WeatherCard = ({ data: { day, date } }: { data: ForecastDay }) => {
  return (
    <section className=" relative w-[12vw]">
      <div className="border-4 border-gray-800 w-full p-8 flex group flex-col items-center rounded-2xl dark:border-white transition-all duration-700 ease-in-out transform text-black origin-bottom absolute hover:-translate-y-32 hover:scale-150  bg-white hover:z-10 ">
        <h3>{date}</h3>
        <FigureWithCaption
          src={day.condition.icon}
          alt={day.condition.text}
          caption={day.condition.text}
          className="w-full flex flex-col items-center"
        />
        <div className=" hidden group-hover:flex group-hover:flex-col py-6 ">
          {" "}
          <p>
            Average temperature: {day.avgtemp_c}{" "}
            <sup>
              {" "}
              <sup>°C</sup>
            </sup>
          </p>
          <p> Chances of rain: {day.daily_chance_of_rain}%</p>
        </div>
      </div>
    </section>
  );
};
