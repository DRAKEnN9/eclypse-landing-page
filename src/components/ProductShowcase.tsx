import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Silhouette No.1 – Vermiton",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/src/assets/images/e137a7769ec644570e7bc55ae1b0d893c9a3d0bb.jpg"
    },
    // Add more products as needed
  ];

  const tabs = [
    { id: 0, name: "Sura & Fit" },
    { id: 1, name: "Delivery & Returns" },
    { id: 2, name: "How This Was Made" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-100 border border-gray-200 aspect-[3/4] w-full overflow-hidden">
              <img 
                src={products[0].image} 
                alt={products[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 text-lg font-serif">
              {products[0].name}
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
              {products[0].name}
            </h2>
            
            <p className="text-gray-700 mb-8 max-w-lg">
              {products[0].description}
            </p>
            
            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`pb-3 px-1 text-sm uppercase tracking-wider relative ${
                      activeTab === tab.id 
                        ? 'text-black font-medium' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.name}
                    {activeTab === tab.id && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                        layoutId="tabIndicator"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8 min-h-[150px]">
              {activeTab === 0 && (
                <p className="text-gray-700">
                  Our Sura fit is designed for effortless movement and timeless elegance. Crafted with precision to complement all body types while maintaining structural integrity.
                </p>
              )}
              {activeTab === 1 && (
                <p className="text-gray-700">
                  Free worldwide shipping on all orders. Easy 30-day returns. We believe in our craftsmanship and want you to love your Eclipse piece as much as we do.
                </p>
              )}
              {activeTab === 2 && (
                <p className="text-gray-700">
                  Each garment is ethically produced using sustainable materials. From design to final stitch, our process respects both people and planet, creating pieces meant to last generations.
                </p>
              )}
            </div>
            
            <button className="px-8 py-3 bg-black text-white uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors duration-300">
              Find Out More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;