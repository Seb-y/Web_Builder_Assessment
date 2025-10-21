import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PhotoGallery = () => {
  const images = [
    {
      url: "src/assets/pic1.png",
      title: "Community Wellness Center",
      category: "Featured Properties",
      aspectRatio: "tall", // portrait
    },
    {
      url: "src/assets/pic2.png",
      title: "Cozy Living Room",
      category: "Interior Spaces",
      aspectRatio: "wide", // landscape
    },
    {
      url: "src/assets/pic3.png",
      title: "3BR Family Home with Garage",
      category: "Featured Properties",
      aspectRatio: "square", // square
    },
    {
      url: "src/assets/pic4.png",
      title: "Modern 2BR Apartment",
      category: "Featured Properties",
      aspectRatio: "square", // landscape
    },
    {
      url: "src/assets/pic5.png",
      title: "Member's Tennis Court",
      category: "Outdoor Spaces",
      aspectRatio: "tall", // portrait
    },
    {
      url: "src/assets/pic6.png",
      title: "Luxury Villa",
      category: "Featured Properties",
      aspectRatio: "square", // square
    },
    {
      url: "src/assets/pic7.png",
      title: "3BR Family Home with Pool",
      category: "Featured Properties",
      aspectRatio: "wide", // landscape
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=650&q=80",
      title: "Modern Luxury Home",
      category: "Featured Properties",
      aspectRatio: "tall", // portrait
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=750&q=80",
      title: "Modern 3BR Room with Garden",
      category: "Featured Properties",
      aspectRatio: "tall", // square
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      title: "Japanese Inspired Luxury Villa",
      category: "Featured Properties",
      aspectRatio: "wide", // landscape
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
      title: "Luxury Living Space",
      category: "Interior Spaces",
      aspectRatio: "square", // square
    },
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
      title: "Pool & Outdoor Living",
      category: "Outdoor Spaces",
      aspectRatio: "square", // square
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-green-800 dark:text-gray-400 mb-3">
            Our Featured Properties
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-green-800 dark:bg-white mx-auto"></div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {images.map((image, index) => {
            // Define aspect ratio classes
            const aspectClasses = {
              tall: "aspect-[3/4]",
              wide: "aspect-[4/3]",
              square: "aspect-square",
            };

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                style={{ breakInside: "avoid" }}
              >
                <div
                  className={`${
                    aspectClasses[image.aspectRatio]
                  } w-full overflow-hidden rounded-2xl`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-2xl">
                  <div>
                    <p className="text-white text-lg font-semibold">
                      {image.title}
                    </p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-400">{images[currentIndex].category}</p>
              <p className="text-gray-500 text-sm mt-2">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
