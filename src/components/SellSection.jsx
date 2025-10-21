import { useState, useRef, useEffect } from "react";

const services = [
  // Your 6 cards
  {
    title: "Top Residential Sales",
    subtitle: "Top Residential Sales",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    button: "View Portfolio",
    image: "/images/service1.png",
  },
  {
    title: "Don't Just List It",
    subtitle: "Don't Just List it...",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    button: "Learn More",
    image: "/images/service2.png",
  },
  {
    title: "Guide to Buyers",
    subtitle: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    button: "Start Your Journey",
    image: "/images/service3.png",
  },
  {
    title: "Real Estate Done Right",
    subtitle: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    button: "Learn More",
    image: "/images/service4.png",
  },
  {
    title: "Commercial & Residential",
    subtitle: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    button: "Learn More",
    image: "/images/service5.png",
  },
  {
    title: "Rely on Expertise",
    subtitle: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    button: "Learn More",
    image: "/images/service6.png",
  },
  {
    title: "Stay Informed",
    subtitle: "Stay Informed",
    description:
      "We provide regular market updates to keep you informed about the latest trends and opportunities in real estate. Knowledge is power, and we want you to feel empowered in your decisions.",
    button: "See More",
    image: "/images/service7.png",
  },
];

const ServiceCard = ({ service, width, style }) => {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="absolute rounded-2xl shadow-xl transition-all duration-500 cursor-pointer"
      style={{ width, ...style }}
    >
      {/* Hover blob */}
      {hovered && (
        <div
          className="pointer-events-none absolute w-80 h-80 rounded-full blur-3xl opacity-30 transition-opacity duration-500"
          style={{
            top: pos.y - 160,
            left: pos.x - 160,
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.5) 50%, rgba(236,72,153,0.5) 100%)",
          }}
        />
      )}

      <div className="relative bg-white dark:bg-gray-800 p-6 flex flex-col gap-4 rounded-2xl h-full">
        <div className="w-full h-56 rounded-xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-2xl text-emerald-900 dark:text-gray-400 text-center">
            {service.title}
          </p>
          <p className="text-gray-700 text-sm dark:text-gray-300 text-center">
            {service.description}
          </p>
          <button className="bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-700 text-white px-6 py-2 rounded-full font-medium mx-auto block hover:scale-105 transition-transform shadow-lg">
            {service.button}
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + services.length) % services.length);
  const next = () => setCurrent((current + 1) % services.length);

  const [cardWidth, setCardWidth] = useState("28rem");
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setCardWidth("90vw");
      else if (w < 1024) setCardWidth("40vw");
      else setCardWidth("28rem");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Realtor Card */}
        <div className="relative bg-white/70 dark:bg-gray-900/70 mt-20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg text-center mb-16">
          <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-[#4BC0C8] to-[#00bf8f] opacity-30 blur-3xl z-0"></div>
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="/images/agent.png"
              alt="Marci Metzger - Professional Realtor"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
            />
          </div>
          <div className="mt-40 md:mt-48">
            <p className="text-sm uppercase tracking-wider text-emerald-800 dark:text-gray-400 font-medium mb-2">
              Your Trusted Realtor
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Meet Marci Metzger
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6 px-2 sm:px-0">
              With over three decades of experience in the real estate industry,
              Marci Metzger has built a reputation for excellence, integrity,
              and exceptional client service. Her deep understanding of market
              trends and commitment to achieving the best outcomes for her
              clients have made her a trusted name in the Pahrump and greater
              Nevada real estate communities.
              <br />
              <em>
                <strong>206-919-6886</strong>
              </em>
            </p>
            <button className="bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:scale-105 transition-transform shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white mb-2">
            With Our Services
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white mb-4">
            GET IT SOLD
          </h2>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-white mx-auto mt-6"></div>
        </div>

        {/* Services Carousel */}
        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            &#10094;
          </button>

          <div className="relative w-full max-w-7xl h-[600px] flex justify-center items-center">
            {services.map((service, index) => {
              let offset = index - current;
              if (offset > services.length / 2) offset -= services.length;
              if (offset < -services.length / 2) offset += services.length;

              // Only show cards within 5 on each side
              if (Math.abs(offset) > 5) return null;

              const translateX = offset * 240; // horizontal spacing
              const translateY = Math.abs(offset) * 10; // vertical spacing
              const scale = offset === 0 ? 1 : 0.85 - Math.abs(offset) * 0.03;
              const zIndex = 10 - Math.abs(offset);
              const opacity = 1 - Math.abs(offset) * 0.1;

              return (
                <ServiceCard
                  key={index}
                  service={service}
                  width={cardWidth}
                  style={{
                    transform: `translateX(${translateX}px) translateY(-${translateY}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                />
              );
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-r from-[#4BC0C8] to-[#00bf8f] dark:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
