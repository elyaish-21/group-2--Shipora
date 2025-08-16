import { useEffect, useState } from "react";

export default function AboutSection() {
  const [years, setYears] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let start = 1;
    const end = 25;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setYears(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <div className="relative flex flex-col items-start">
          {/* Blue line above image */}
          <div className="w-[60%] h-[5px] bg-brand-blue rounded mb-4"></div>

          <div className="relative">
            {/* Black line on left */}
            <div className="absolute -left-5 top-10 h-[60%] w-[5px] bg-black rounded"></div>

            {/* Main image */}
            <img
              src="/images/barko.png"
              alt="barko pic"
              className="rounded-2xl shadow-lg w-full h-[480px] object-cover"
            />
          </div>

          {/* 25 Years Badge */}
          <div className="absolute bottom-6 right-6 bg-brand-blue text-white rounded-xl shadow-lg px-8 py-5 text-center">
            <div className="text-5xl font-extrabold leading-tight">
              {years}
            </div>
            <div className="text-sm uppercase tracking-widest">
              Years of Experience
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Our Shipping Services
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We have been providing reliable shipping services for over two decades,
            ensuring safe and efficient transport of goods worldwide. Our dedicated
            team works around the clock to meet the needs of our clients, offering
            tailored solutions for every shipment.
          </p>
        </div>
      </div>
    </section>
  );
}
