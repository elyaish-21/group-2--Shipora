import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SectionOne = () => {
  const base = import.meta.env.BASE_URL;

  const services = [
    {
      icon: (
        <>
          <img
            src={`${base}images/sparcelBLUE.png`}
            alt="Secure Parcel"
            className="w-16 h-16 object-contain group-hover:hidden"
          />
          <img
            src={`${base}images/sparcelWHITE.png`}
            alt="Secure Parcel Hover"
            className="w-16 h-16 object-contain hidden group-hover:block"
          />
        </>
      ),
      hoverIcon: `${base}images/sparcelWHITE.png`,
      title: "Secure Parcel",
      description: "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      icon: (
        <>
          <img
            src={`${base}images/ltrackingBLUE.png`}
            alt="Live Tracking"
            className="w-16 h-16 object-contain group-hover:hidden"
          />
          <img
            src={`${base}images/ltrackingWHITE.png`}
            alt="Live Tracking Hover"
            className="w-16 h-16 object-contain hidden group-hover:block"
          />
        </>
      ),
      hoverIcon: `${base}images/ltrackingWHITE.png`,
      title: "Live Tracking",
      description: "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      icon: (
        <>
          <img
            src={`${base}images/ccBLUE.png`}
            alt="Custom Clearance"
            className="w-16 h-16 object-contain group-hover:hidden"
          />
          <img
            src={`${base}images/ccWHITE.png`}
            alt="Custom Clearance Hover"
            className="w-16 h-16 object-contain hidden group-hover:block"
          />
        </>
      ),
      hoverIcon: `${base}images/ccWHITE.png`,
      title: "Custom Clearance",
      description: "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      icon: (
        <>
          <img
            src={`${base}images/shipBLUE.png`}
            alt="Fast Delivery"
            className="w-16 h-16 object-contain group-hover:hidden"
          />
          <img
            src={`${base}images/shipWHITE.png`}
            alt="Fast Delivery Hover"
            className="w-16 h-16 object-contain hidden group-hover:block"
          />
        </>
      ),
      hoverIcon: `${base}images/shipWHITE.png`,
      title: "Fast Delivery",
      description: "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div
        className="absolute top-0 left-0 right-0 h-3/4 bg-blue-200 opacity-90 z-0"
        style={{
          backgroundImage: `url('${base}images/shiporabg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      ></div>

      {/* Social Media Bar */}
      <div className="absolute left-0 bottom-8 flex flex-col items-center bg-black py-4 px-2 z-20">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-500 transition-colors mb-6"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-500 transition-colors mb-6"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-500 transition-colors"
        >
          <FaXTwitter size={18} />
        </a>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          <div className="text-left">
            <h3 className="text-base font-bold bg-blue-100 text-blue-600 inline-block px-3 py-1 rounded-md mb-2">
              We Provide Service
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Reliable Global Cargo<br /> Service
            </h2>
          </div>

          <div className="mt-4 lg:mt-0">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-[40px_30px] rounded-lg shadow-md hover:bg-black transition-all duration-300 flex flex-col relative"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-4 flex-grow group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>

              <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0">
                <img
                  src={service.hoverIcon}
                  alt={`${service.title} Hover`}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="flex justify-end relative z-10">
                <button className="bg-black text-white p-3 rounded-md group-hover:bg-blue-600 group-hover:text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                  <FaPlus className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
