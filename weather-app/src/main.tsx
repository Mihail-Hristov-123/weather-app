import { createRoot } from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./pages/Home.tsx";
import { Forecasts } from "./pages/Forecasts.tsx";
import { Favorites } from "./pages/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Routes as RoutesEnum } from "./routes.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={RoutesEnum.HOME} element={<Home />} />
      <Route path="/" element={<Navigate to={RoutesEnum.HOME} />} />
      <Route path={RoutesEnum.FORECASTS} element={<Forecasts />} />
      <Route path={RoutesEnum.FAVORITES} element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
