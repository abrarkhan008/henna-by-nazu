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
      <div className="fixed inset-0 opacity-10 pointer-events-none">
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
      <section id="home" className="relative py-20 px-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Fixed aspect ratio container for uniform image sizes */}
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setSelectedImage(item.image)}
                    />
                    {selectedImage && (
                      <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                      >
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="max-w-full max-h-full rounded-lg shadow-2xl"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 md:p-6 text-white w-full">
                    <p className="font-semibold text-sm md:text-lg">
                      {item.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 px-4 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Get in Touch
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-rose-600 hover:text-rose-700 block"
                    >
                      {contactInfo.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Emergency:</p>
                    <a
                      href={`tel:${contactInfo.emergencyPhone}`}
                      className="text-rose-600 hover:text-rose-700"
                    >
                      +91 {contactInfo.emergencyPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-rose-600 hover:text-rose-700 break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
                    <p className="text-gray-700">{contactInfo.address}</p>
                    <a
                      href={contactInfo.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-700 text-sm mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-xl mb-6">Quick Connect</h4>

              <a
                href={`https://wa.me/${contactInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                <MessageCircle size={32} />
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <p className="text-sm opacity-90">Send us a message</p>
                </div>
              </a>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                <Instagram size={32} />
                <div>
                  <p className="font-semibold text-lg">Instagram</p>
                  <p className="text-sm opacity-90">Follow us for updates</p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-rose-500 to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                <Phone size={32} />
                <div>
                  <p className="font-semibold text-lg">Call Now</p>
                  <p className="text-sm opacity-90">Book your appointment</p>
                </div>
              </a>
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MehendiPortfolio;
