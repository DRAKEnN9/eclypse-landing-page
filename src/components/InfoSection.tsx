// src/components/InfoSection.tsx
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: 'Size & Fit',
    content: 'Our model is 6"2" and wears size M. For precise measurements, refer to our size chart or contact us directly.',
  },
  {
    title: 'Delivery & Returns',
    content: 'Free shipping worldwide. Easy returns within 30 days. Refunds processed within 5 business days.',
  },
  {
    title: 'How This Was Made',
    content: 'Crafted in Italy using sustainable wool and traditional tailoring techniques for an impeccable finish.',
  },
];

const InfoSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-10 bg-black text-white">
      <div className="max-w-[85vw] mx-auto">
        {/* LayoutGroup for smooth height animations */}
        <LayoutGroup>
          {sections.map((section, idx) => (
            <div key={section.title} className="border-b border-gray-700">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex justify-between items-center py-6 focus:outline-none"
              >
                <span className="text-4xl font-sans">{section.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-8xl"
                >
                  <FiChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="px-4 pb-6 text-gray-300 overflow-hidden"
                  >
                    {section.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </LayoutGroup>
      </div>
    </section>
  );
};

export default InfoSection;
