function SearchBar({
  searchTerm,
  onSearchChange,
  sortValue,
  onSortChange,
  cityOptions,
  selectedCities,
  onToggleCity,
  onClearCities
}) {
  return (
    <section className="search-section container">
      <div className="search-card">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by city or hotel name"
          className="search-input"
          aria-label="Search hotels"
        />

        <select
          value={sortValue}
          onChange={(event) => onSortChange(event.target.value)}
          className="sort-select"
          aria-label="Sort hotels"
        >
          <option value="default">Sort: Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating-high">Rating: High to Low</option>
        </select>
      </div>

      <div className="city-filter-row" aria-label="Filter by city">
        <div className="city-filter-head">
          <p>Popular Cities</p>
          {selectedCities.length > 0 && (
            <button className="city-clear-btn" onClick={onClearCities}>
              Clear
            </button>
          )}
        </div>

        <div className="city-chip-wrap">
          {cityOptions.map((city) => (
            <button
              key={city}
              className={`city-chip ${selectedCities.includes(city) ? "active" : ""}`}
              onClick={() => onToggleCity(city)}
            >
              <span className="city-chip-icon" aria-hidden="true" />
              <span>{city}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
