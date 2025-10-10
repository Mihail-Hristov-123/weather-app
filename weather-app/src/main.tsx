import { createRoot } from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./pages/Home.tsx";
import { Forecasts } from "./pages/Forecasts.tsx";
import { Favorites } from "./pages/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Routes as RoutesEnum } from "./routes.ts";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ThemeSwitcher } from "./components/buttons/ThemeSwitcher.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { Details } from "./pages/Details.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

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
          <Route
            path={`${RoutesEnum.FORECASTS}/:id`}
            element={
              <ErrorBoundary>
                <Details />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
