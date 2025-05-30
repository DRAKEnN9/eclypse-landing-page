// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

import video from "@/assets/videos/4937474-uhd_4096_2160_25fps.mp4"

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-start bg-black text-white py-16 overflow-hidden">
      {/* Title */}
      <h1 className="text-6xl max-md:mx-auto mt-24 -mb-36 md:text-8xl font-sans ml-28 tracking-tight">
        Eclypse<span className="align-super text-2xl">®</span>
      </h1>
      {/* Credit moved to top-right of video */}
      <span className="absolute pt-44 right-28 text-sm">©2025</span>

      {/* Video Container */}
      <div
        className="relative overflow-hidden border- mt-36 mb-20 mx-auto"
        style={{
        //   width: '1365.68px',
        //   height: '768.19px',
        //   top: '-210.59px',
        //   left: '-13.46px',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[85vw] h-[80vh] rounded-md object-cover mt-5"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* Overlay text inside video */}
        <h2 className="absolute max-md:ml-5  bottom-12 right-16 text-xl md:text-3xl font-sans">
          A silhouette worth remembering
        </h2>
      </div>

      {/* Paragraph spacing adjusted */}
      <p className="max-w-3xl text-xl max-md:mx-10  md:text-5xl font-sans self-start ml-28 my-12">
        Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
      </p>

      {/* Learn More button with underline and arrow */}
      <motion.button
        className="mt-20 max-md:mx-10 group flex items-center self-start ml-28 text-xl font-sans underline underline-offset-4"
        whileHover={{
          backgroundColor: '#fff',
          color: '#000',
          textDecoration: 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        Learn More About Eclypse
        <FiArrowUpRight className="ml-2 transform rotate-45 group-hover:hidden" />
      </motion.button>
    </section>
  );
};

export default Hero;
