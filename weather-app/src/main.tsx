import { createRoot } from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./pages/home/Home.tsx";
import { Forecasts } from "./pages/Forecasts.tsx";
import { Favorites } from "./pages/favorites/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Routes as RoutesEnum } from "./routes.ts";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ThemeSwitcher } from "./components/ThemeSwitcher.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <ThemeSwitcher />
        <Routes>
          <Route path={RoutesEnum.HOME} element={<Home />} />
          <Route path="/" element={<Navigate to={RoutesEnum.HOME} />} />
          <Route path={RoutesEnum.FORECASTS} element={<Forecasts />} />
          <Route path={RoutesEnum.FAVORITES} element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
