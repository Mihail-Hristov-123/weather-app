import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./components/navbar/Navbar.tsx";
import { Home } from "./pages/Home.tsx";
import { Forecasts } from "./pages/Forecasts.tsx";
import { Favorites } from "./pages/Favorites.tsx";
import { NotFound } from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forecasts" element={<Forecasts />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
