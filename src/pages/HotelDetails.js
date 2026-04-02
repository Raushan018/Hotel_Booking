import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function HotelDetails({ hotels, onToggleFavorite, favorites }) {
  const { id } = useParams();
  const hotel = hotels.find((item) => item.id === Number(id));
  const galleryImages = hotel?.gallery?.length ? hotel.gallery : hotel ? [hotel.image] : [];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0] || "");

  useEffect(() => {
    setSelectedImage(galleryImages[0] || "");
  }, [id]);

  if (!hotel) {
    return (
      <main className="container simple-page">
        <h2>Hotel not found</h2>
        <p>We could not find the hotel you selected.</p>
        <Link to="/" className="primary-btn">
          Back To Home
        </Link>
      </main>
    );
  }

  const stars = "★".repeat(Math.round(hotel.rating)) + "☆".repeat(5 - Math.round(hotel.rating));

  return (
    <main className="details-page">
      <section className="details-banner" style={{ backgroundImage: `url(${hotel.image})` }}>
        <div className="details-overlay" />
        <div className="container details-intro">
          <span className="details-city">{hotel.city}</span>
          <h1>{hotel.name}</h1>
          <p className="hotel-rating">
            <span>{stars}</span>
            <strong>{hotel.rating}</strong>
          </p>
          <p className="details-price">${hotel.price} / night</p>
        </div>
      </section>

      <section className="container details-content">
        <article>
          <h2>About This Hotel</h2>
          <p>{hotel.description}</p>

          <h3>Hotel Gallery</h3>
          <div className="gallery-preview">
            <img src={selectedImage} alt={`${hotel.name} view`} />
          </div>
          <div className="gallery-grid">
            {galleryImages.map((imageUrl, index) => (
              <button
                key={imageUrl}
                className={`gallery-thumb ${selectedImage === imageUrl ? "active" : ""}`}
                onClick={() => setSelectedImage(imageUrl)}
                aria-label={`Show image ${index + 1}`}
              >
                <img src={imageUrl} alt={`${hotel.name} image ${index + 1}`} />
              </button>
            ))}
          </div>

          <h3>Amenities</h3>
          <ul className="amenities-grid">
            {hotel.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>

          <h3>Location And Contact</h3>
          <div className="hotel-info-card">
            <p>
              <strong>Address:</strong> {hotel.address}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${hotel.phone.replace(/\s+/g, "")}`}>{hotel.phone}</a>
            </p>
          </div>
        </article>

        <aside className="details-actions">
          <button
            className={`favorite-btn details-fav ${favorites.includes(hotel.id) ? "active" : ""}`}
            onClick={() => onToggleFavorite(hotel.id)}
          >
            {favorites.includes(hotel.id) ? "♥ Saved" : "♡ Save Hotel"}
          </button>
          <Link to={`/book/${hotel.id}`} className="primary-btn full-width">
            Book Now
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default HotelDetails;
