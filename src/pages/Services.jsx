import React from 'react';
import { features } from "../constants";
import { industries } from '../constants';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          What{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            We Do
          </span>
        </h2>
      </div>

      {/* Features Section */}
      <section className="text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap mx-4 justify-center">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full">
                  <div className="flex h-12 w-12 mb-4 bg-blue-600 text-white justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.text}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Sectors We Revolutionize</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-gray-700 rounded-lg bg-gray-800 hover:scale-105 transition-transform">
                <CheckCircle className={`${industry.color} text-3xl`} />
                <div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                  <p className="text-gray-400">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
