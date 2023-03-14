import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarruselMovie } from "./components/CarruselMovie";
import { DescriptionMovie } from "./components/DescriptionMovie";
import { LeakedMovie } from "./components/LeakedMovie";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<CarruselMovie />} />
          <Route
            path="/caracteristica-pelicula/:id"
            element={<DescriptionMovie />}
          />
          </Routes>
      </BrowserRouter>
    </>
  );
}
