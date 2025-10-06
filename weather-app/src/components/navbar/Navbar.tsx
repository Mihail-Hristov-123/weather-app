import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/forecasts"}>All forecasts</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </nav>
  );
};
