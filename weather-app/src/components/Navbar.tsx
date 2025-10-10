import { NavLink } from "react-router";
import { Routes } from "@/routes";

interface NavItem {
  route: Routes;
  label: string;
}

const navItems: NavItem[] = [
  { route: Routes.HOME, label: "Home" },
  { route: Routes.FORECASTS, label: "All forecasts" },
  { route: Routes.FAVORITES, label: "Favorites" },
];

export const Navbar = () => {
  return (
    <nav className=" flex justify-around py-3.5 font-bold  text-black dark:bg-gray-600 dark:text-white">
      {navItems.map(({ route, label }) => (
        <NavLink to={route} key={label}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
