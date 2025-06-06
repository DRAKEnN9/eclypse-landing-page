// src/components/SilhouetteShowcase.tsx
import React from 'react';
import { motion } from 'framer-motion';

import image1 from '@/assets/images/199e2f0c8a7b9157e168ba62343cb3ee957ad4ca.jpg';
import image2 from '@/assets/images/407b7ee4e18ddc71face6cbdd2bd857540f68a64.jpg';
import image3 from '@/assets/images/c584edda40c9ee9d39367587a95b5894e2438b19.jpg';
import image4 from '@/assets/images/204b51ca3d6365117ecab61115aa49089a454cda.jpg';
import silhouetteVideo from '@/assets/videos/4937472-uhd_4096_2160_25fps.mp4';

const SilhouetteShowcase: React.FC = () => {
  return (
    <section className="w-full px-6 py-16 max-w-7xl mx-auto space-y-8">
      {/* Row 1: Video and Single Image */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Video */}
        <motion.div 
          className="w-full md:w-2/3 overflow-hidden rounded-xl shadow-md aspect-video"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover rounded-xl"
          >
            <source src={silhouetteVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* One Square Image with hover effect */}
        <motion.div 
          className="w-full md:w-1/3 rounded-xl overflow-hidden aspect-square relative group"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={image1} 
            alt="Top Right Image" 
            className="w-full h-full object-cover rounded-xl group-hover:blur-sm transition duration-300" 
          />
          <div className="absolute bottom-4 font-sans mb-3 font-normal left-4 right-4 text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300">
            Premium wool plant signature vermilion
          </div>
        </motion.div>
      </div>

      {/* Row 2: Three Square Images with hover effect */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group rounded-xl overflow-hidden aspect-square">
          <img src={image2} alt="look 2" className="rounded-xl object-cover w-full h-full group-hover:blur-sm transition duration-300" />
          <div className="absolute bottom-4 mb-3 font-normal left-4 right-4 text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300">
            discreet side pocket with clean finish
          </div>
        </div>

        <div className="relative group rounded-xl overflow-hidden aspect-square">
          <img src={image3} alt="look 3" className="rounded-xl object-cover w-full h-full group-hover:blur-sm transition duration-300" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-4xl mb-3 font-normal opacity-0 group-hover:opacity-100 transition duration-300">
            hand-cut and assembled in small batches
          </div>
        </div>

        <div className="relative group rounded-xl overflow-hidden aspect-square">
          <img src={image4} alt="look 4" className="rounded-xl object-cover w-full h-full group-hover:opacity-0 transition duration-300" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-7xl opacity-0 group-hover:opacity-100 transition duration-300">
            Eclypse <span className='align-super text-xl mb-5'>®</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SilhouetteShowcase;
