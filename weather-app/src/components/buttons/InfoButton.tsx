import { useNavigate } from "react-router";
import infoSVG from "@/assets/info.svg";
import { Routes } from "@/routes";

export const InfoButton = ({ cityName }: { cityName: string }) => {
  const navigate = useNavigate();

  return (
    <button
      className=" w-10 cursor-pointer"
      title="check details"
      onClick={() => navigate(`${Routes.FORECASTS}/${cityName}`)}
    >
      <img src={infoSVG} alt="info icon" />
    </button>
  );
};
