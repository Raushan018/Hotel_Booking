import { Link } from "react-router-dom";

function HotelCard({ hotel, isFavorite, onToggleFavorite }) {
  const roundedRating = Math.round(hotel.rating);
  const stars = "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating);

  return (
    <article className="hotel-card reveal-item">
      <div className="hotel-image-wrapper">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" loading="lazy" />
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(hotel.id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="hotel-content">
        <h3>{hotel.name}</h3>
        <p className="hotel-city">{hotel.city}</p>
        <p className="hotel-price">${hotel.price} / night</p>
        <p className="hotel-rating" aria-label={`Rating ${hotel.rating} out of 5`}>
          <span>{stars}</span>
          <strong>{hotel.rating}</strong>
        </p>

        <Link className="primary-btn" to={`/hotel/${hotel.id}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default HotelCard;
