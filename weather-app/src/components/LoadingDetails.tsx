export const LoadingDetails = ({ cityName }: { cityName: string }) => (
  <div className=" wrapper">
    <h1 className=" main-title">
      Loading detailed <span className="capitalize">{cityName}</span>{" "}
      forecast...
    </h1>
  </div>
);
