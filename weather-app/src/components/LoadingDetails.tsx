export const LoadingDetails = ({ location }: { location: string }) => (
  <div className=" wrapper">
    <h1 className=" main-title">
      Loading detailed <span className="capitalize">{location}</span>{" "}
      forecast...
    </h1>
  </div>
);
