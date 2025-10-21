import { useState, useRef } from "react";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
    >
      {/* Gradient Blob Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute w-80 h-80 rounded-full blur-3xl opacity-30 transition-opacity duration-500"
          style={{
            top: position.y - 160,
            left: position.x - 160,
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 50%, rgba(236,72,153,0.5) 100%)",
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative bg-white dark:bg-gray-800 p-6 transition-all group-hover:p-5 flex flex-col gap-4 h-full">
        {/* Image */}
        <div className="w-full">
          <div className="w-full h-48 rounded-xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      title: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    },
    {
      title: "Commercial & Residential",
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    },
    {
      title: "Rely on Expertise",
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive real estate services tailored to your unique
            needs and goals.
          </p>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-6"></div>
        </div>

        {/* Services Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
