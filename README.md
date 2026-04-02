# StayEase - Hotel Booking Web App

A beginner-friendly yet professional frontend-only hotel booking web application built with React, React Router, HTML, CSS, and JavaScript.

StayEase is designed to look modern and premium while keeping the code simple, modular, and easy to understand for learners.

## Live Project Type

- Frontend-only (no backend)
- Data is managed through local dummy data and browser LocalStorage

## Tech Stack

- React (Functional Components)
- React Router DOM
- JavaScript (ES6+)
- CSS (mobile-first responsive design)
- Vite (build tool)

## Key Features

### 1) Home Page

- Hero section with premium full-width background
- Search bar for hotel name and city
- Sort options:
  - Recommended
  - Price: Low to High
  - Price: High to Low
  - Rating: High to Low
- Popular Cities multi-select chips under the search area
- Hotel listing cards with:
  - Hotel image
  - Name
  - City
  - Price per night
  - Star rating UI
  - View Details button
  - Favorite (heart) toggle
- Loading spinner state
- No results found state

### 2) Hotel Details Page

- Large image banner
- Hotel title, city, rating, and price
- Description section
- Amenities list
- Image gallery with selectable thumbnails (multiple images)
- Location and contact details:
  - Address
  - Phone number (click to call)
  - Embedded map
  - Open map link
- Save Hotel button
- Book Now button

### 3) Booking Page

- Booking form with validation:
  - Name
  - Email
  - Check-in date
  - Check-out date
  - Guests
- Validation rules include required fields, email format, date logic, and guest count
- On successful submit:
  - Booking saved in LocalStorage
  - Redirect to confirmation page

### 4) Confirmation Page

- Booking success message
- Displays booking summary/details
- Handles page reload by reading latest booking from LocalStorage

### 5) Global UX Features

- Sticky navbar
- Dark mode toggle with persistence
- Favorites counter in navbar
- Responsive footer (dark premium style)
- Smooth transitions and hover effects
- Smooth scroll behavior

## Bonus Features Included

- Dark mode toggle
- Sorting controls
- Favorite hotels UI with persistent storage
- Multi-city quick filter chips with icons

## Folder Structure

```text
src/
  components/
    BookingForm.js
    Footer.js
    HotelCard.js
    Navbar.js
    SearchBar.js
  pages/
    BookingPage.js
    Confirmation.js
    Home.js
    HotelDetails.js
  data/
    hotels.js
  styles/
    main.css
  App.js
  index.js
```

## Screens and User Flow

1. User opens home page.
2. User searches/sorts/filters by city.
3. User opens hotel details.
4. User reviews gallery, amenities, map/contact info.
5. User clicks Book Now and fills booking form.
6. On submit, booking is saved and confirmation is shown.

## LocalStorage Keys Used

- stayease_theme
  - Stores light/dark mode preference
- stayease_favorites
  - Stores array of favorite hotel IDs
- stayease_bookings
  - Stores all booking records
- stayease_latest_booking
  - Stores most recent booking used by confirmation page

## Design Notes

- Mobile-first layout
- Responsive breakpoints for tablet and desktop
- Grid and flex layout combinations
- Premium visual language with gradients, rounded cards, shadows, and hover animations
- Readable typography and high contrast in both themes

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (comes with Node)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Vite will print a local URL (usually http://localhost:5173).

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- npm run dev - start local development server
- npm run build - create production build
- npm run preview - preview the production build locally

## Customization Guide

### Update Hotel Data

Edit src/data/hotels.js to modify:

- name, city, price, rating
- image and gallery images
- description and amenities
- address, phone, map links

### Update Theme/Styles

Edit src/styles/main.css:

- CSS variables in :root for light theme
- body.dark variables for dark theme
- component-level sections for card, gallery, footer, etc.

### Add New Pages

1. Create a page in src/pages
2. Add a route in src/App.js
3. Link it from navbar/footer as needed

## Beginner-Friendly Code Practices Used

- Functional components with hooks
- Reusable UI components
- Clear naming and modular file structure
- Straightforward validation logic
- Minimal dependency usage

## Limitations (Current Scope)

- No backend/API integration
- No authentication
- No real payment flow
- Data persistence is browser-local only

## Suggested Next Improvements

- Add My Bookings page with edit/cancel options
- Add date range price calculation and total cost summary
- Add toast notifications for actions (favorite/booked)
- Add accessibility enhancements (keyboard focus states, ARIA polishing)
- Connect to a backend (Node/Express/Firebase) for real booking workflow

## License

This project is created for learning and portfolio/demo use.
