// src/components/ProductCard.tsx
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Asset imports (update paths as needed)
import heroVideo from '@/assets/videos/4937469-uhd_2160_4096_25fps.mp4';
import thumb1 from '@/assets/images/8ae564ee3ffe18d445ee2513b03e19a3e647f31d.jpg';
import thumb2 from '@/assets/images/4428df22b52d9d4ea83f934e2dba3a0d99006a35.jpg';
import thumb3 from '@/assets/images/e137a7769ec644570e7bc55ae1b0d893c9a3d0bb.jpg';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductCard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Scroll-linked width transform
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center', 'end start'] });
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ['100vw', '90vw', '100vw']);

  return (
    <div className="bg-black py-16">
      <h2 className="text-4xl max-md:mx-10 text-white ml-16 py-14 font-serif uppercase mb-10 leading-tight">
        Silhouette No. 1 – Vermilion
      </h2>

      <motion.div
        ref={ref}
        style={{ width, margin: '0 auto' }}
        className="flex flex-col lg:flex-row h-[100vh]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left side: Video */}
        <div className="w-full lg:w-1/2 h-96 lg:h-auto overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side: Details */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-start space-y-6 bg-white">
          {/* Description */}
          <p className="mt-4 text-lg font-sans">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
          </p>

          {/* Thumbnails */}
          <div className="flex gap-4 mr-8">
            <img src={thumb1} alt="thumb1" className="w-1/3 object-cover aspect-square rounded-lg" />
            <img src={thumb2} alt="thumb2" className="w-1/3 object-cover aspect-square rounded-lg" />
            <img src={thumb3} alt="thumb3" className="w-1/3 object-cover aspect-square rounded-lg" />
          </div>

          <div className="border-b-2 py-2"></div>

          {/* Price */}
          <p className="text-4xl font-sans font-semibold">
            ₹ 7,999 <span className="text-sm font-normal text-gray-600">MRP incl. of all taxes</span>
          </p>

          {/* Size Selector */}
          <div>
            <p className="uppercase text-sm text-gray-600 font-sans tracking-wider mb-2">
              Please select a size <span className="underline ml-3">Size chart</span>
            </p>
            <div className="flex flex-wrap gap-4 pt-5">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={
                    `px-4 py-2 border rounded-lg h-12 w-24 uppercase text-sm tracking-wide transition 
                    ${selectedSize === sz
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'}`
                  }
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b-2 py-2"></div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex-1 px-6 py-3 bg-black text-white uppercase tracking-wide rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition">
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/checkout')}
              className="flex-1 px-6 py-3 border border-black text-black uppercase tracking-wide rounded-lg hover:bg-black hover:text-white transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
