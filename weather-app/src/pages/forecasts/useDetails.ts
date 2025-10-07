export const useDetails = () => {
  const transformNameToUppercase = (cityName: string) => {
    return cityName?.includes(" ")
      ? cityName
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : cityName!.charAt(0).toUpperCase() + cityName!.slice(1);
  };

  return { transformNameToUppercase };
};
