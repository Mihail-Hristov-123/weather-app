import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className=" bg-amber-100 flex justify-around py-3.5 font-bold">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/forecasts"}>All forecasts</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </nav>
  );
};
