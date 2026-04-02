import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const stateBooking = location.state?.booking;

  const latestBooking = JSON.parse(localStorage.getItem("stayease_latest_booking") || "null");
  const booking = stateBooking || latestBooking;

  if (!booking) {
    return (
      <main className="container simple-page">
        <h2>No booking found</h2>
        <p>Please complete a booking to view confirmation details.</p>
        <Link to="/" className="primary-btn">
          Back To Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container confirmation-page">
      <div className="confirmation-card reveal-item">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed</h1>
        <p className="success-message">Your reservation has been successfully saved.</p>

        <div className="confirmation-details">
          <p>
            <strong>Hotel:</strong> {booking.hotelName}
          </p>
          <p>
            <strong>City:</strong> {booking.city}
          </p>
          <p>
            <strong>Name:</strong> {booking.name}
          </p>
          <p>
            <strong>Email:</strong> {booking.email}
          </p>
          <p>
            <strong>Check-in:</strong> {booking.checkIn}
          </p>
          <p>
            <strong>Check-out:</strong> {booking.checkOut}
          </p>
          <p>
            <strong>Guests:</strong> {booking.guests}
          </p>
        </div>

        <Link to="/" className="primary-btn">
          Book Another Stay
        </Link>
      </div>
    </main>
  );
}

export default Confirmation;
