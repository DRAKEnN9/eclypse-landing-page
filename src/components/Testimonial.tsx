// src/components/Testimonial.tsx
import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialItem {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: 'Understated, but unforgettable. It feels like it was made for me',
    name: 'Random Woman',
    location: 'NY, USA',
    avatar: '/src/assets/images/5af646d7b8932db6cf8dfd07b0cb2de43e686ae3.jpg',
  },
  {
    quote: 'Exceptional craftsmanship and timeless design. Truly a work of art.',
    name: 'John Doe',
    location: 'LA, USA',
    avatar: '/src/assets/images/f83137dc614ef1a8d3fd6d899317697d1ea768f0.jpg',
  },
  {
    quote: 'Luxurious yet subtle, a perfect balance of form and function.',
    name: 'Jane Smith',
    location: 'London, UK',
    avatar: '/src/assets/images/95122042973d5a9433d93fb59ceca1010bbd44fd.jpg',
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const goTo = (index: number) => setCurrent(index);

  const { quote, name, location, avatar } = testimonials[current];

  return (
    <section className="w-full  bg-black text-white py-32">
      <div className="mx-24 px-6">
        <h3 className="text-sm  uppercase tracking-widest text-gray-500 mb-8 ">
          Our Customers
        </h3>
        <div className="flex flex-col  lg:flex-row items-center lg:items-start">
          {/* Quote Block */}
          <div className="flex-1 mt-12 lg:pr-12">
            <div className="relative pl-12">
              <FaQuoteLeft className="absolute top-0 left-0 text-4xl text-gray-700" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={quote}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl max-md:mr-auto text-neutral-300 leading-tight mb-6 mr-44"
                >
                  {quote}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-gray-500">{location}</p>
          </div>

          {/* Navigation Thumbnails & Arrows */}
          <div className="mt-8 lg:mt-0 flex items-center lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            <button onClick={prev} className="text-white hover:text-gray-400">
              <FiChevronLeft size={24} />
            </button>
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
              {testimonials.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-20 h-20 rounded-full overflow-hidden border-2 ${
                    idx === current ? 'border-white' : 'border-gray-700'
                  }`}
                >
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <button onClick={next} className="text-white hover:text-gray-400">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className='border-b-transparent mx-28 my-16 border'></div>
    </section>

  );
};

export default Testimonial;
