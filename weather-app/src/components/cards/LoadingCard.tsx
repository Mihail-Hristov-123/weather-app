import LoadingSVG from "../../assets/loader.svg";

export const LoadingCard = () => {
  return (
    <section className="bg-gray-400 w-[18vw] p-2 px-4 flex flex-col items-center rounded-2xl relative transition-all duration-300 transform hover:-translate-y-2 hover:-translate-x-2 ">
      <img src={LoadingSVG} alt="loading icon" />
    </section>
  );
};
