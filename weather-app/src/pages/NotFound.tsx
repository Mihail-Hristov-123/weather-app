import { Routes } from "@/routes";
import { Link } from "react-router";

export const NotFound = () => {
  return (
    <main className="wrapper flex flex-col items-center">
      <h1 className="main-title">The page you are looking for doesn't exist</h1>
      <Link to={Routes.HOME} className=" text-3xl">
        Go back to the Home page
      </Link>
    </main>
  );
};
