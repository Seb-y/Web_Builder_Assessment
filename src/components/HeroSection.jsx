import { useState } from "react";
import {
  MapPin,
  Home,
  Bed,
  Bath,
  DollarSign,
  ChevronDown,
  ArrowUpDown,
  Search,
  X,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix missing marker icons in Leaflet (important for Vite + React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-5">
            <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 dark:text-white leading-tight">
              Find Your
              <br />
              Dream Home
            </h1>
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-xl text-justify">
              Whether you're buying or selling,{" "}
              <strong>The Ridge Realty Group</strong> delivers results you can
              count on! With <strong>Marci Metzger's</strong>, finding your
              dream home becomes an exciting and effortless experience.
            </p>
            <button className="text-2xl bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-800 text-white px-12 py-4 rounded-lg font-medium hover:scale-105 transition-all shadow-lg">
              Call Now!
            </button>
          </div>

          {/* Right Image */}
          <div className="relative z-10">
            <img
              src="/images/cover.png"
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

// Helper for clickable map
const LocationMarker = ({ setLocation }) => {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(`${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`);
    },
  });

  return position ? <Marker position={position}></Marker> : null;
};

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [baths, setBaths] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [errors, setErrors] = useState({});

  const isSearchDisabled =
    !location.trim() &&
    !type &&
    !sortBy &&
    !baths &&
    !bedrooms &&
    !priceRange.min &&
    !priceRange.max;

  const handleValidation = () => {
    const newErrors = {};
    if (priceRange.min < 0 || priceRange.max < 0) {
      newErrors.price = "Price cannot be negative.";
    }
    if (
      priceRange.min &&
      priceRange.max &&
      Number(priceRange.min) > Number(priceRange.max)
    ) {
      newErrors.price = "Min price cannot be greater than max price.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (handleValidation()) {
      console.log({
        location,
        type,
        sortBy,
        bedrooms,
        baths,
        priceRange,
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="bg-gradient-to-r 
  from-[#87a96b] via-[#d0f0c0] to-[#87a96b]
  dark:from-gray-800 dark:via-[#29323c] dark:to-[#537895]/60
  backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-xl transition-all duration-500"
      >
        {/* First Row: Location, Type, Sort By */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Location Picker */}
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onFocus={() => setShowMap(true)}
              readOnly
              className="w-full bg-white text-gray-700 placeholder-gray-600 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline outline-1 cursor-pointer pr-10"
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {location && (
                <button
                  type="button"
                  onClick={() => setLocation("")}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear location"
                >
                  <X size={18} />
                </button>
              )}
              <MapPin
                onClick={() => setShowMap(true)}
                className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
              />
            </div>
          </div>

          {/* Type */}
          <div className="relative">
            <select
              id="selectType"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full outline outline-1 appearance-none bg-white text-gray-700 placeholder-gray-600 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 pr-10"
            >
              <option value="">Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {type && (
                <button
                  type="button"
                  onClick={() => setType("")}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear type"
                >
                  <X size={18} />
                </button>
              )}
              {!type && (
                <Home
                  onClick={() => document.getElementById("selectType").focus()}
                  className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                  title="Show Type Options"
                />
              )}
              <ChevronDown
                onClick={() => document.getElementById("selectType").focus()}
                className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                title="Show Type Options"
              />
            </div>
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              id="sortBySelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none bg-white text-gray-700 placeholder-gray-600 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline outline-1 pr-10"
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

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {sortBy && (
                <button
                  type="button"
                  onClick={() => setSortBy("")}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear sort selection"
                >
                  <X size={18} />
                </button>
              )}
              {!sortBy && (
                <ArrowUpDown
                  onClick={() =>
                    document.getElementById("sortBySelect").focus()
                  }
                  className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                  title="Show Sort Options"
                />
              )}
            </div>
          </div>
        </div>

        {/* Second Row: Bedrooms, Baths, Min Price, Max Price, Search */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Bedrooms */}
          <div className="relative">
            <select
              id="selectBed"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full bg-white text-gray-700 placeholder-gray-600 pl-4 pr-10 py-3 rounded-lg border border-gray-300 outline outline-1 focus:ring-2 focus:ring-emerald-400 cursor-pointer appearance-none"
            >
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {bedrooms ? (
                <button
                  type="button"
                  onClick={() => setBedrooms("")}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear bedrooms selection"
                >
                  <X size={18} />
                </button>
              ) : (
                <Bed
                  onClick={() => document.getElementById("selectBed").focus()}
                  className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                  title="Show Bed Options"
                  aria-hidden="true"
                />
              )}
              <ChevronDown
                onClick={() => document.getElementById("selectBed").focus()}
                className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                title="Show Bed Options"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Baths */}
          <div className="relative">
            <select
              id="selectBath"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className="w-full bg-white text-gray-700 placeholder-gray-600 pl-4 pr-10 py-3 rounded-lg border border-gray-300 outline outline-1 focus:ring-2 focus:ring-emerald-400 cursor-pointer appearance-none"
            >
              <option value="">Baths</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {baths ? (
                <button
                  type="button"
                  onClick={() => setBaths("")}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear baths selection"
                >
                  <X size={18} />
                </button>
              ) : (
                <Bath
                  onClick={() => document.getElementById("selectBath").focus()}
                  className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                  title="Show Bath Options"
                  aria-hidden="true"
                />
              )}
              <ChevronDown
                onClick={() => document.getElementById("selectBath").focus()}
                className="text-gray-500 w-5 h-5 cursor-pointer hover:text-emerald-500 transition"
                title="Show Bath Options"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Min Price */}
          <div className="relative">
            <input
              type="number"
              placeholder="Min Price"
              value={priceRange.min}
              min="0"
              onChange={(e) => {
                const val = e.target.value;
                if (val === "" || val >= 0)
                  setPriceRange({ ...priceRange, min: val });
              }}
              className={`w-full appearance-none bg-white text-gray-700 placeholder-gray-600 pl-4 pr-10 py-3 rounded-lg border ${
                errors.price
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-emerald-400"
              } outline outline-1 focus:ring-2 transition-all`}
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {priceRange.min ? (
                <button
                  type="button"
                  onClick={() => setPriceRange({ ...priceRange, min: "" })}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear min price"
                >
                  <X size={18} />
                </button>
              ) : (
                <DollarSign
                  className="text-gray-500 w-5 h-5 pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>

          {/* Max Price */}
          <div className="relative">
            <input
              type="number"
              placeholder="Max Price"
              value={priceRange.max}
              min="0"
              onChange={(e) => {
                const val = e.target.value;
                if (val === "" || val >= 0)
                  setPriceRange({ ...priceRange, max: val });
              }}
              className={`w-full appearance-none bg-white text-gray-700 placeholder-gray-600 pl-4 pr-10 py-3 rounded-lg border ${
                errors.price
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-emerald-400"
              } outline outline-1 focus:ring-2 transition-all`}
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {priceRange.max ? (
                <button
                  type="button"
                  onClick={() => setPriceRange({ ...priceRange, max: "" })}
                  className="text-gray-400 hover:text-red-500 transition focus:outline-none"
                  aria-label="Clear max price"
                >
                  <X size={18} />
                </button>
              ) : (
                <DollarSign
                  className="text-gray-500 w-5 h-5 pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={isSearchDisabled}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium shadow-lg transition-all hover:scale-105 ${
              isSearchDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] text-white hover:brightness-110"
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        {/* Error Message */}
        {errors.price && (
          <p className="text-red-500 text-sm mt-3">{errors.price}</p>
        )}
      </div>

      {/* Location Picker Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg p-4 relative w-full max-w-2xl h-[70vh]">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Select Location (Click on map)
            </h3>
            <MapContainer
              center={[14.5995, 120.9842]}
              zoom={12}
              style={{ height: "90%", width: "100%", borderRadius: "1rem" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap"
              />
              <LocationMarker setLocation={setLocation} />
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
