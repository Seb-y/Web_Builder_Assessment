const TrustedBy = () => {
  const affiliations = [
    {
      name: "The Ridge Realty Group",
      logoLight: "/images/company11.png",
      logoDark: "/images/company11_dark.png",
      alt: "The Ridge Realty Group",
    },
    {
      name: "Equal Housing Opportunity",
      logoLight: "/images/company22.png",
      logoDark: "/images/company22_dark.png",
      alt: "Equal Housing Opportunity",
    },
    {
      name: "Realtor",
      logoLight: "/images/company3.png",
      logoDark: "/images/company3_dark.png",
      alt: "Realtor Association",
    },
    {
      name: "Pahrump Valley Chamber of Commerce",
      logoLight: "/images/company4.png",
      logoDark: "/images/company4_dark.png",
      alt: "Pahrump Valley Chamber of Commerce",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-center gap-12">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-emerald-900 dark:text-gray-300 text-center">
            Trusted Professional Affiliations
          </h3>

          {/* Logo Grid */}
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 lg:gap-16 w-full">
            {affiliations.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale-[70%] hover:grayscale-0"
              >
                {/* Light mode logo */}
                <img
                  src={item.logoLight}
                  alt={item.alt}
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain dark:hidden"
                />
                {/* Dark mode logo */}
                <img
                  src={item.logoDark}
                  alt={item.alt}
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain hidden dark:block"
                />
              </div>
            ))}
          </div>

          {/* Optional Subtitle */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Proud member of leading real estate organizations committed to
            excellence, ethics, and equal opportunity in housing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
