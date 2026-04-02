import { Link, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";

function BookingPage({ hotels }) {
  const { id } = useParams();
  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <main className="container simple-page">
        <h2>Hotel not found</h2>
        <p>Please go back and choose a valid hotel.</p>
        <Link to="/" className="primary-btn">
          Back To Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container booking-page">
      <section className="booking-summary">
        <img src={hotel.image} alt={hotel.name} />
        <div>
          <h1>{hotel.name}</h1>
          <p>{hotel.city}</p>
          <p>${hotel.price} / night</p>
          <p>{hotel.description}</p>
        </div>
      </section>

      <BookingForm hotel={hotel} />
    </main>
  );
}

export default BookingPage;
