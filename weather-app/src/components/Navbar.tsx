import { NavLink } from "react-router";
import { Routes } from "../routes";

export const Navbar = () => {
  return (
    <nav className=" bg-amber-100 flex justify-around py-3.5 font-bold">
      <NavLink to={Routes.HOME}>Home</NavLink>
      <NavLink to={Routes.FORECASTS}>All forecasts</NavLink>
      <NavLink to={Routes.FAVORITES}>Favorites</NavLink>
    </nav>
  );
};
