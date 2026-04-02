const hotels = [
  {
    id: 1,
    name: "Azure Bay Resort",
    city: "Goa",
    price: 145,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A beachfront resort with premium suites, private balconies, and sunset views over the Arabian Sea.",
    amenities: ["Free WiFi", "Infinity Pool", "AC", "Spa", "Free Breakfast"],
    address: "Candolim Beach Road, North Goa, Goa 403515",
    phone: "+91 98765 10001",
    mapEmbedUrl: "https://www.google.com/maps?q=Candolim%20Beach%20Goa&output=embed",
    mapLink: "https://www.google.com/maps?q=Candolim%20Beach%20Goa"
  },
  {
    id: 2,
    name: "The Grand Meridian",
    city: "Mumbai",
    price: 190,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Luxury business hotel in the city center with elegant interiors and rooftop dining.",
    amenities: ["Free WiFi", "Gym", "Airport Shuttle", "AC", "Conference Hall"],
    address: "Marine Drive Extension, Nariman Point, Mumbai 400021",
    phone: "+91 98765 10002",
    mapEmbedUrl: "https://www.google.com/maps?q=Nariman%20Point%20Mumbai&output=embed",
    mapLink: "https://www.google.com/maps?q=Nariman%20Point%20Mumbai"
  },
  {
    id: 3,
    name: "Himalayan Nest Retreat",
    city: "Manali",
    price: 120,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A peaceful mountain stay surrounded by pine forests and snow-capped peaks.",
    amenities: ["Mountain View", "Heater", "Free WiFi", "Bonfire", "Cafe"],
    address: "Old Manali Road, Siyal, Manali 175131",
    phone: "+91 98765 10003",
    mapEmbedUrl: "https://www.google.com/maps?q=Old%20Manali%20Road%20Manali&output=embed",
    mapLink: "https://www.google.com/maps?q=Old%20Manali%20Road%20Manali"
  },
  {
    id: 4,
    name: "Desert Pearl Palace",
    city: "Jaipur",
    price: 110,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A heritage-inspired hotel blending royal Rajasthani charm with modern comfort.",
    amenities: ["Free WiFi", "AC", "Traditional Dining", "Pool", "Parking"],
    address: "Amer Fort Link Road, Jaipur 302028",
    phone: "+91 98765 10004",
    mapEmbedUrl: "https://www.google.com/maps?q=Amer%20Fort%20Jaipur&output=embed",
    mapLink: "https://www.google.com/maps?q=Amer%20Fort%20Jaipur"
  },
  {
    id: 5,
    name: "Coastal Breeze Inn",
    city: "Kochi",
    price: 95,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Comfortable and affordable stay near the harbor with warm hospitality.",
    amenities: ["Free WiFi", "AC", "Restaurant", "24/7 Help Desk", "Laundry"],
    address: "Marine Walkway, Fort Kochi, Kochi 682001",
    phone: "+91 98765 10005",
    mapEmbedUrl: "https://www.google.com/maps?q=Fort%20Kochi&output=embed",
    mapLink: "https://www.google.com/maps?q=Fort%20Kochi"
  },
  {
    id: 6,
    name: "Skyline Suites",
    city: "Bengaluru",
    price: 130,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Modern suites in the tech district, perfect for both business and leisure travelers.",
    amenities: ["Free WiFi", "Gym", "Work Desk", "AC", "Breakfast"],
    address: "Outer Ring Road, Bellandur, Bengaluru 560103",
    phone: "+91 98765 10006",
    mapEmbedUrl: "https://www.google.com/maps?q=Bellandur%20Bengaluru&output=embed",
    mapLink: "https://www.google.com/maps?q=Bellandur%20Bengaluru"
  },
  {
    id: 7,
    name: "Lakeside Haven",
    city: "Udaipur",
    price: 165,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A scenic lakeside retreat with stunning views, romantic dining, and premium rooms.",
    amenities: ["Lake View", "Free WiFi", "Pool", "Spa", "AC"],
    address: "Fateh Sagar Lake Road, Udaipur 313001",
    phone: "+91 98765 10007",
    mapEmbedUrl: "https://www.google.com/maps?q=Fateh%20Sagar%20Lake%20Udaipur&output=embed",
    mapLink: "https://www.google.com/maps?q=Fateh%20Sagar%20Lake%20Udaipur"
  },
  {
    id: 8,
    name: "Urban Olive Hotel",
    city: "Delhi",
    price: 140,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Stylish city hotel close to top attractions with contemporary rooms and great service.",
    amenities: ["Free WiFi", "Restaurant", "Airport Pickup", "AC", "Parking"],
    address: "Connaught Place, New Delhi 110001",
    phone: "+91 98765 10008",
    mapEmbedUrl: "https://www.google.com/maps?q=Connaught%20Place%20New%20Delhi&output=embed",
    mapLink: "https://www.google.com/maps?q=Connaught%20Place%20New%20Delhi"
  },
  {
    id: 9,
    name: "Palm Grove Residency",
    city: "Chennai",
    price: 105,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A serene property with lush greenery and comfortable rooms for family travelers.",
    amenities: ["Free WiFi", "Garden", "AC", "Kids Area", "Breakfast"],
    address: "ECR Seaside Road, Chennai 600119",
    phone: "+91 98765 10009",
    mapEmbedUrl: "https://www.google.com/maps?q=ECR%20Chennai&output=embed",
    mapLink: "https://www.google.com/maps?q=ECR%20Chennai"
  },
  {
    id: 10,
    name: "Harbor Crown Hotel",
    city: "Visakhapatnam",
    price: 115,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Sea-facing hotel with relaxing rooms and a rooftop lounge near the beach road.",
    amenities: ["Sea View", "Free WiFi", "Rooftop Cafe", "AC", "Room Service"],
    address: "Beach Road, RK Beach, Visakhapatnam 530003",
    phone: "+91 98765 10010",
    mapEmbedUrl: "https://www.google.com/maps?q=RK%20Beach%20Visakhapatnam&output=embed",
    mapLink: "https://www.google.com/maps?q=RK%20Beach%20Visakhapatnam"
  }
];

export default hotels;
