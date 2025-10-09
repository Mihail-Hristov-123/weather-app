import { Link } from "react-router";
import { Routes } from "../routes";

export const GenericError = () => (
  <div className=" wrapper flex flex-col items-center">
    <h1 className=" main-title">An unexpected error occurred</h1>
    <Link to={Routes.HOME}>Go back to Home page</Link>
  </div>
);
