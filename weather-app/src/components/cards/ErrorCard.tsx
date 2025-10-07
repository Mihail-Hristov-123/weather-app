import errorSVG from "../../assets/error.svg";
export const ErrorCard = () => {
  return (
    <section className=" border-6 rounded-4xl w-1/3  border-red-500 p-8">
      <img src={errorSVG} alt="error icon" />
      <h3 className=" text-4xl text-center">An error occurred</h3>
    </section>
  );
};
