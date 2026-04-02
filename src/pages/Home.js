import { useEffect, useMemo, useState } from "react";
import HotelCard from "../components/HotelCard";
import SearchBar from "../components/SearchBar";

function Home({ hotels, favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const [selectedCities, setSelectedCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const cityOptions = useMemo(() => {
    return [...new Set(hotels.map((hotel) => hotel.city))].sort((a, b) => a.localeCompare(b));
  }, [hotels]);

  const handleToggleCity = (city) => {
    setSelectedCities((prev) => {
      if (prev.includes(city)) return prev.filter((item) => item !== city);
      return [...prev, city];
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const filteredHotels = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    let result = hotels.filter((hotel) => {
      const matchesSelectedCities =
        selectedCities.length === 0 || selectedCities.includes(hotel.city);

      return (
        matchesSelectedCities &&
        (hotel.name.toLowerCase().includes(normalizedTerm) ||
          hotel.city.toLowerCase().includes(normalizedTerm))
      );
    });

    if (sortValue === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortValue === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sortValue === "rating-high") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [hotels, searchTerm, sortValue, selectedCities]);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">Plan Your Perfect Stay</p>
          <h1>Premium Hotel Booking Made Simple</h1>
          <p>
            Discover handpicked hotels, compare prices, and book your next unforgettable trip with
            StayEase.
          </p>
          <a href="#hotels-grid" className="secondary-btn">
            Explore Hotels
          </a>
        </div>
      </section>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortValue={sortValue}
        onSortChange={setSortValue}
        cityOptions={cityOptions}
        selectedCities={selectedCities}
        onToggleCity={handleToggleCity}
        onClearCities={() => setSelectedCities([])}
      />

      <section id="hotels-grid" className="container hotels-section">
        <div className="section-head">
          <h2>Top Hotels</h2>
          <p>{filteredHotels.length} properties found</p>
        </div>

        {loading ? (
          <div className="spinner-wrap" role="status" aria-live="polite">
            <span className="spinner" />
            <p>Loading premium stays...</p>
          </div>
        ) : filteredHotels.length === 0 ? (
          <div className="empty-state">
            <h3>No hotels found</h3>
            <p>Try a different city or hotel name.</p>
          </div>
        ) : (
          <div className="hotels-grid">
            {filteredHotels.map((hotel, index) => (
              <div key={hotel.id} style={{ animationDelay: `${index * 80}ms` }}>
                <HotelCard
                  hotel={hotel}
                  isFavorite={favorites.includes(hotel.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
