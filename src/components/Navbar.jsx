import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // className="relative" removed
    <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-4 sticky top-0 z-20 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700">
      {/* ===== MOBILE VIEW ===== */}
      <div className="flex w-full items-center justify-between md:hidden">
        {/* Left: Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
          <span className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
          <span className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
        </button>

        {/* Center: Logo */}
        <a href="#" className="flex justify-center">
          <img
            src={darkMode ? "/images/logo_dark.png" : "/images/logo.png"}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Right: Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-gray-300 dark:border-gray-600 rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left: Logo */}
        <a href="#">
          <img
            src={darkMode ? "/images/logo_dark.png" : "/images/logo.png"}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Center: Nav Links */}
        <div className="flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium text-sm">
          <a
            href="#"
            className="hover:text-rose-950 dark:hover:text-yellow-800"
          >
            Home
          </a>
          <a
            href="#listings"
            className="hover:text-rose-950 dark:hover:text-yellow-800"
          >
            Listings
          </a>
          <a
            href="#lets-move"
            className="hover:text-rose-950 dark:hover:text-yellow-800"
          >
            Let’s Move
          </a>
          <a
            href="#about-us"
            className="hover:text-rose-950 dark:hover:text-yellow-800"
          >
            About Us
          </a>
        </div>

        {/* Right: Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-gray-300 dark:border-gray-600 rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg md:hidden flex flex-col items-center py-6 gap-4 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#listings" onClick={() => setMenuOpen(false)}>
            Listings
          </a>
          <a href="#lets-move" onClick={() => setMenuOpen(false)}>
            Let’s Move
          </a>
          <a href="#about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
