import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import BookingPage from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";
import hotels from "./data/hotels";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("stayease_theme") === "dark";
  });

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("stayease_favorites") || "[]");
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("stayease_theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("stayease_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (hotelId) => {
    setFavorites((prev) => {
      if (prev.includes(hotelId)) {
        return prev.filter((id) => id !== hotelId);
      }
      return [...prev, hotelId];
    });
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        favoritesCount={favorites.length}
      />

      <Routes>
        <Route
          path="/"
          element={<Home hotels={hotels} favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/hotel/:id"
          element={
            <HotelDetails
              hotels={hotels}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/book/:id" element={<BookingPage hotels={hotels} />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
