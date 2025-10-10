import { useNavigate } from "react-router";
import infoSVG from "@/assets/info.svg";
import { Routes } from "@/routes";
import { formulateLocationString } from "@/utils/formulateLocationString";

export const InfoButton = ({
  city,
  country,
}: {
  city: string;
  country: string;
}) => {
  const navigate = useNavigate();

  const encodedLocation = encodeURIComponent(
    formulateLocationString(city, country)
  );
  const handleClick = () => navigate(`${Routes.FORECASTS}/${encodedLocation}`);

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
