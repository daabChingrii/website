"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./background-gradient";
import { CardTitle, CardDescription } from "./card-hover-effect";

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Enhanced Security",
      description: "Provides advanced security features for your applications.",
      icon: "/icons/security-icon.svg",
    },
    {
      title: "AI Integration",
      description: "Integrate AI to automate processes and gain insights.",
      icon: "/icons/ai-icon.svg",
    },
    {
      title: "Scalability",
      description: "Ensure seamless growth with our scalable solutions.",
      icon: "/icons/scalability-icon.svg",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 text-white bg-black overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Our Features
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <BackgroundGradient
                containerClassName="rounded-lg"
                className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Feature Icon */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-800">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8"
                    />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
