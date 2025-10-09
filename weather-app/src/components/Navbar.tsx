import { NavLink } from "react-router";
import { Routes } from "@/routes";

export const Navbar = () => {
  return (
    <nav className=" flex justify-around py-3.5 font-bold  text-black dark:bg-gray-600 dark:text-white">
      <NavLink to={Routes.HOME}>Home</NavLink>
      <NavLink to={Routes.FORECASTS}>All forecasts</NavLink>
      <NavLink to={Routes.FAVORITES}>Favorites</NavLink>
    </nav>
  );
};
