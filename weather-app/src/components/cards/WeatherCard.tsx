export const WeatherCard = ({ data }: { data: ForecastDay }) => {
  return (
    <section className="border-4 border-gray-800 size-fit p-8 flex group flex-col items-center rounded-2xl dark:border-white transition-transform duration-700 ease-in-out transform text-black origin-bottom  hover:scale-150 bg-white">
      <h3>{data.date}</h3>
      <fieldset className=" w-full flex flex-col items-center">
        <img src={data.day.condition.icon} alt={data.day.condition.text} />
        <caption>{data.day.condition.text}</caption>
      </fieldset>

      <div className=" hidden group-hover:flex group-hover:flex-col py-6 ">
        {" "}
        <p>
          Average temperature: {data.day.avgtemp_c}{" "}
          <sup>
            {" "}
            <sup>°C</sup>
          </sup>
        </p>
        <p> Chances of rain: {data.day.daily_chance_of_rain}%</p>
      </div>
    </section>
  );
};
