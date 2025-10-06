import { createRoot } from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./pages/Home.tsx";
import { Forecasts } from "./pages/Forecasts.tsx";
import { Favorites } from "./pages/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Routes as RoutesEnum } from "./routes.ts";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path={RoutesEnum.HOME} element={<Home />} />
        <Route path="/" element={<Navigate to={RoutesEnum.HOME} />} />
        <Route path={RoutesEnum.FORECASTS} element={<Forecasts />} />
        <Route path={RoutesEnum.FAVORITES} element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
