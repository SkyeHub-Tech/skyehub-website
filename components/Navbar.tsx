"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent  ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/skyehub-logo.svg" alt="Skyehub Logo" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors text-black ${
                item === "Home"
                  ? "text-black underline underline-offset-4"
                  : "text-gray-500 hover:text-gray-900 font-medium transition-colors"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-800"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {["Home", "Services", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-brand-blue"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
