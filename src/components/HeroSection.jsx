import { useState } from "react";

const HeroSection = () => {
  return (
    // bg-gradient-to-r from-[#CCCCB2] via-lime-100 to-[#959533]
    <section className="relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-emerald-900 dark:text-white leading-tight">
              Find Your Dream Home
            </h1>
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-xl mx-auto">
              Whether you’re buying or selling,{" "}
              <strong>The Ridge Realty Group </strong>
              delivers results you can count on! With Pahrump’s go-to Realtor,{" "}
              <strong>Marci Metzger</strong>, guiding you every step of the way.
            </p>
            <div className="flex justify-center mt-10">
              <button className="bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-800 text-white px-20 py-4 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-all hover:scale-105 shadow-lg">
                Call Now!
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 rtl">
            <img
              src="src/assets/cover.png"
              alt="Modern luxury home"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-r-full hover:rounded-lg transition-all"
            />
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 pb-16 md:pb-24">
        <SearchBar />
      </div>
    </section>
  );
};

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [baths, setBaths] = useState("");
  const isSearchDisabled =
    !location.trim() && // no location text
    !type && // no type selected
    !sortBy && // no sort by selected
    !baths && // no baths selected
    !bedrooms && // no bedrooms selected
    !priceRange.min && // no min price
    !priceRange.max; // no max price

  return (
    <div className="bg-gradient-to-r from-[#F1F2B5] via-lime-100 to-[#F1F2B5] dark:bg-gray-700/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
        {/* Location */}
        <div className="relative">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-white dark:bg-white text-gray-400 dark:text-gray-400 px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            📍
          </span>
        </div>

        {/* Type */}
        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-white dark:bg-white text-gray-400 dark:text-gray-400 px-4 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 appearance-none cursor-pointer"
          >
            <option value="">Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            🏠
          </span>
        </div>

        {/* Sort By */}
        <div className="relative flex-1">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none bg-white dark:bg-white text-gray-400 dark:text-gray-400 pl-4 pr-12 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 cursor-pointer"
          >
            <option value="">Sort By</option>
            <option value="newest">Newest → Oldest</option>
            <option value="oldest">Oldest → Newest</option>
            <option value="priceLowHigh">Price (Low → High)</option>
            <option value="priceHighLow">Price (High → Low)</option>
            <option value="bedLowHigh">Bedrooms (Low → High)</option>
            <option value="bedHighLow">Bedrooms (High → Low)</option>
            <option value="bathLowHigh">Bathrooms (Low → High)</option>
            <option value="bathHighLow">Bathrooms (High → Low)</option>
          </select>

          {/* Sort Icon */}
          <span
            className="absolute right-8 top-1/2 -translate-y-1/2 text-lg text-gray-400 pointer-events-none"
            aria-hidden="true"
          >
            ↕️
          </span>

          {/* Down Arrow */}
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Bedrooms & Baths */}
        <div className="flex gap-4">
          {/* Bedrooms */}
          <div className="relative flex-1">
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full appearance-none bg-white dark:bg-white text-gray-400 dark:text-gray-400 pl-4 pr-12 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 cursor-pointer"
            >
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
            <span
              className="absolute right-8 top-1/2 -translate-y-1/2 text-lg text-gray-400 pointer-events-none"
              aria-hidden="true"
            >
              🛏️
            </span>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Baths */}
          <div className="relative flex-1">
            <select
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className="w-full appearance-none bg-white dark:bg-white text-gray-400 dark:text-gray-400 pl-4 pr-12 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 cursor-pointer"
            >
              <option value="">Baths</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
            <span
              className="absolute right-8 top-1/2 -translate-y-1/2 text-lg text-gray-400 pointer-events-none"
              aria-hidden="true"
            >
              🛁
            </span>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Min and Max Price */}
        <div className="flex gap-4">
          {/* Min Price */}
          <div className="relative flex-1">
            <input
              type="number"
              placeholder="Min Price"
              min="0" // prevents negative input
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
              className="w-full appearance-none bg-white dark:bg-white text-gray-400 dark:text-gray-400 pl-4 pr-10 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 cursor-text"
            />

            {/* Emoji */}
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 pointer-events-none"
              aria-hidden="true"
            >
              💲
            </span>
          </div>

          {/* Max Price */}
          <div className="relative flex-1">
            <input
              type="number"
              placeholder="Max Price"
              min="0" // prevents negative input
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
              className="w-full appearance-none bg-white dark:bg-white text-gray-400 dark:text-gray-400 pl-4 pr-10 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 cursor-text"
            />

            {/* Emoji */}
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 pointer-events-none"
              aria-hidden="true"
            >
              💲
            </span>
          </div>
        </div>

        {/* Search Now Button */}
        <button
          disabled={isSearchDisabled}
          className={`px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105 
        ${
          isSearchDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700"
        }`}
        >
          Search Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
