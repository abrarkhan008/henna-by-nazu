import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

const MehendiPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // Gallery categories
  const categories = [
    { id: "all", name: "All Designs", count: 23 },
    { id: "bridal", name: "Bridal", count: 10 },
    { id: "hands", name: "Simple Hands", count: 7 },
    { id: "legs", name: "Legs", count: 7 },
  ];

  // Placeholder images - replace with your actual image URLs
  const gallery = [
    // Bridal designs (10 images)
    {
      id: "bridal-1",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/1.jpg",
    },
    {
      id: "bridal-2",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/2.jpg",
    },
    {
      id: "bridal-3",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/3.jpg",
    },
    {
      id: "bridal-4",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/4.jpg",
    },
    {
      id: "bridal-5",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/5.jpg",
    },
    {
      id: "bridal-6",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/6.jpg",
    },
    {
      id: "bridal-7",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/7.jpg",
    },
    {
      id: "bridal-8",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/8.jpg",
    },
    {
      id: "bridal-9",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/9.jpg",
    },
    {
      id: "bridal-10",
      category: "bridal",
      type: "Bridal Design",
      image: "/images/bridal/10.jpg",
    },

    // Simple hands (7 images)
    {
      id: "hands-1",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/1.jpg",
    },
    {
      id: "hands-2",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/2.jpg",
    },
    {
      id: "hands-3",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/3.jpg",
    },
    {
      id: "hands-4",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/4.jpg",
    },
    {
      id: "hands-5",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/5.jpg",
    },
    {
      id: "hands-6",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/6.jpg",
    },
    {
      id: "hands-7",
      category: "hands",
      type: "Simple Hand Design",
      image: "/images/hands/7.jpg",
    },

    // Legs (7 images)
    {
      id: "legs-1",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/1.jpg",
    },
    {
      id: "legs-2",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/2.jpg",
    },
    {
      id: "legs-3",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/3.jpg",
    },
    {
      id: "legs-4",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/4.jpg",
    },
    {
      id: "legs-5",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/5.jpg",
    },
    {
      id: "legs-6",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/6.jpg",
    },
    {
      id: "legs-7",
      category: "legs",
      type: "Leg Design",
      image: "/images/legs/7.jpg",
    },
  ];
  const filteredGallery =
    activeCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const contactInfo = {
    phone: "6363393990",
    emergencyPhone: "8660238832",
    email: "nazeerab092@gmail.com",
    address: "Chik Mandya Bidi Colony, Abubakkar Masjid Road, Mandya",
    instagram:
      "https://www.instagram.com/henna_by_nazu_?igsh=MWJzNW5zZDh2OHIxMQ==",
    location: "https://maps.app.goo.gl/16Rni44u3NzHAgGU7",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">HN</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  Henna by Nazu
                </h1>
                <p className="text-xs text-gray-600">
                  Exquisite Mehendi Artistry
                </p>
              </div>
            </div>

            <div className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="text-gray-700 hover:text-rose-600 transition"
              >
                Home
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-rose-600 transition"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-rose-600 transition"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#home" className="block px-4 py-2 hover:bg-rose-50">
              Home
            </a>
            <a href="#gallery" className="block px-4 py-2 hover:bg-rose-50">
              Gallery
            </a>
            <a href="#contact" className="block px-4 py-2 hover:bg-rose-50">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* <section id="home" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Henna by Nazu
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Creating Beautiful Memories with Traditional Mehendi Art
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#gallery"
                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                View Gallery
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-rose-600 border-2 border-rose-500 rounded-full font-semibold hover:bg-rose-50 transform hover:-translate-y-1 transition"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500"
      >
        <div className="max-w-3xl w-full text-center text-white">
          {/* Camera Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h3l2-3h8l2 3h3v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Henna by Nazu
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Creating Beautiful Bridal Mehendi Designs
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              📞 Book Now
            </a>

            <a
              href="https://wa.me/916363393990
"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Our Mehendi Collection
          </h3>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-rose-50"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Fixed aspect ratio container for uniform image sizes */}
                <div className="relative w-full pt-[100%]">
                  <button
                    type="button"
                    className="absolute inset-0"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 md:p-6 text-white w-full">
                    <p className="font-semibold text-sm md:text-lg">
                      {item.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Image Modal */}
          {/* {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking image
              />
            </div>
          )} */}
          {selectedImage && (
            <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.type}
                className="max-h-[90vh] max-w-[95vw] object-contain"
              />
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 px-4 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500"
      >
        <div className="max-w-2xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Call Us Card */}
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:bg-white/25">
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={36} />
                </div>
                <h4 className="font-bold text-2xl mb-3">Call Us</h4>
                <a
                  href={`tel:+91${contactInfo.emergencyPhone}`}
                  className="text-xl font-medium hover:underline"
                >
                  +91 6363393990
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:bg-white/25">
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={36} />
                </div>
                <h4 className="font-bold text-2xl mb-3">Email</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-medium hover:underline break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:bg-white/25">
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Instagram className="text-white" size={36} />
                </div>
                <h4 className="font-bold text-2xl mb-3">Instagram</h4>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  @henna_by_nazu_
                </a>
              </div>
            </div>

            {/* Visit Us Card */}
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:bg-white/25">
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={36} />
                </div>
                <h4 className="font-bold text-2xl mb-3">Visit Us</h4>
                <p className="text-lg font-medium mb-3">
                  {contactInfo.address}
                </p>
                <a
                  href={contactInfo.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-rose-600 to-orange-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Henna by Nazu</h2>
          <p className="mb-4">
            Creating Beautiful Memories, One Design at a Time
          </p>
          <p className="text-sm opacity-90">
            © 2024 Henna by Nazu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MehendiPortfolio;
