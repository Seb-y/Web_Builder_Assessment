import { useState } from "react";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Newsletter signup:", email);
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-neutral-50 via-slate-100 to-neutral-400 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Subscribe Our Newsletter
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Stay updated with the latest property listings, market insights,
                and exclusive offers. Join our community of homeowners and
                investors who receive valuable real estate information directly
                to their inbox.
              </p>

              {/* Email Input */}
              <div className="flex gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full border-none outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="src/assets/pixasquare-4ojhpgKpS68-unsplash.jpg"
                alt="Modern home illustration"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-black dark:bg-gray-950 py-12">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="Yelp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-4xl h-px bg-white/10"></div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED
            </p>

            {/* Divider */}
            <div className="w-full max-w-4xl h-px bg-white/10"></div>

            {/* Powered By */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                POWERED BY
              </p>
              <img
                src="https://cdn.worldvectorlogo.com/logos/godaddy-1.svg"
                alt="GoDaddy"
                className="h-6 brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
