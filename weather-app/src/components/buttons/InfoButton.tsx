import infoSVG from "@/assets/info.svg";

import { useNavigationToDetails } from "@/hooks/useNavigationToDetails";

export const InfoButton = ({
  city,
  country,
}: {
  city: string;
  country: string;
}) => {
  const { navigateToDetails } = useNavigationToDetails(city, country);

  return (
    <button
      className=" w-10 cursor-pointer"
      title="check details"
      onClick={navigateToDetails}
    >
      <img src={infoSVG} alt="info icon" />
    </button>
  );
};
