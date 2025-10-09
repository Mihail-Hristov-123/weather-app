import { useNavigate } from "react-router";
import infoSVG from "@/assets/info.svg";
import { Routes } from "@/routes";

export const InfoButton = ({ cityName }: { cityName: string }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`${Routes.FORECASTS}/${cityName}`);

  return (
    <button
      className=" w-10 cursor-pointer"
      title="check details"
      onClick={handleClick}
    >
      <img src={infoSVG} alt="info icon" />
    </button>
  );
};
