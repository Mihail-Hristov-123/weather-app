import errorSVG from "@/assets/error.svg";
export const ErrorCard = () => (
  <section className=" border-6 rounded-4xl w-1/3  border-red-500 p-8 dark:bg-white flex flex-col items-center">
    <img src={errorSVG} className=" max-w-40" alt="error icon" />
    <h3 className=" text-4xl text-center">An error occurred</h3>
  </section>
);
