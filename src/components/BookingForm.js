import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ hotel }) {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required.";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required.";

    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = "Check-out must be after check-in.";
    }

    if (!formData.guests || Number(formData.guests) < 1) {
      newErrors.guests = "At least 1 guest is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const bookingDetails = {
      id: Date.now(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      city: hotel.city,
      pricePerNight: hotel.price,
      ...formData
    };

    const existingBookings = JSON.parse(localStorage.getItem("stayease_bookings") || "[]");
    const updatedBookings = [...existingBookings, bookingDetails];

    localStorage.setItem("stayease_bookings", JSON.stringify(updatedBookings));
    localStorage.setItem("stayease_latest_booking", JSON.stringify(bookingDetails));

    navigate("/confirmation", { state: { booking: bookingDetails } });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h2>Book Your Stay</h2>

      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <small className="error-text">{errors.email}</small>}
      </label>

      <div className="date-grid">
        <label>
          Check-in
          <input
            type="date"
            name="checkIn"
            min={today}
            value={formData.checkIn}
            onChange={handleChange}
          />
          {errors.checkIn && <small className="error-text">{errors.checkIn}</small>}
        </label>

        <label>
          Check-out
          <input
            type="date"
            name="checkOut"
            min={formData.checkIn || today}
            value={formData.checkOut}
            onChange={handleChange}
          />
          {errors.checkOut && <small className="error-text">{errors.checkOut}</small>}
        </label>
      </div>

      <label>
        Guests
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
        />
        {errors.guests && <small className="error-text">{errors.guests}</small>}
      </label>

      <button type="submit" className="primary-btn full-width">
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;
