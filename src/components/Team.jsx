import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function TeamSection() {
  const team = [
    { name: "James Lopez", role: "CEO", img: "/images/TrustedAsianExpert1.jpg" },
    { name: "Albert Martinez", role: "HR Manager", img: "/images/TrustedAsianExpert2.jpg" },
    { name: "Daniel Bautista", role: "Finance Analyst", img: "/images/TrustedAsianExpert3.jpg" },
    { name: "Sophia Garcia", role: "Customer Support", img: "/images/TrustedAsianExpert4.jpg" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-xl font-medium text-md shadow-sm mb-7">
          You Trust Our Team
        </div>

        <h2 className="text-4xl font-bold mb-8">Trusted Cargo Experts</h2>

        <div className="grid gap-8 md:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-500 ease-in-out relative"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-blue-600 flex flex-col justify-center items-center transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  
                  <div className="flex space-x-4 text-white text-lg">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>

              <div className="relative bg-white text-center py-4 transition-colors duration-500 group-hover:bg-black">
                <h3 className="font-bold text-black group-hover:text-white transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm group-hover:text-gray-300 transition-colors duration-500">
                  {member.role}
                </p>

                <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
