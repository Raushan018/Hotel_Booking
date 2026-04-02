import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, onToggleDarkMode, favoritesCount }) {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <Link to="/" className="brand-logo" aria-label="StayEase home">
          StayEase
        </Link>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <span className="favorites-pill" title="Favorite hotels">
            Favorites: {favoritesCount}
          </span>
          <button className="theme-toggle" onClick={onToggleDarkMode}>
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
