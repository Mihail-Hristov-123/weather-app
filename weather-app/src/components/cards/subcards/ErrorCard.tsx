import errorSVG from "@/assets/error.svg";
import { FigureWithCaption } from "../../FigureWithCaption";
export const ErrorCard = () => (
  <FigureWithCaption
    className="border-6 rounded-4xl w-1/3  border-red-600  p-8 dark:bg-white dark:text-black text-3xl flex flex-col items-center cursor-not-allowed"
    src={errorSVG}
    imgClassName=" w-1/4"
    caption="An error occurred"
    alt="error icon"
  />
);
