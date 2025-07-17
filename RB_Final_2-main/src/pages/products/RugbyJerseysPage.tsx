import React from 'react';
import { motion } from 'framer-motion';
import ProductImageGallery from '../../components/ui/ProductImageGallery';
import Button from '../../components/ui/Button';
import BaseProductPage from '../../components/shared/BaseProductPage';

const RugbyJerseysPage: React.FC = () => {
  const galleryImages = [
    { src: '/hero-front.jpg', alt: 'Rugby Jersey Front View' },
    { src: '/hero-back.jpg', alt: 'Rugby Jersey Back View' },
    { src: '/print-area-front.png', alt: 'Front Print Areas' },
    { src: '/print-area-back.png', alt: 'Back Print Areas' },
    { src: '/Flat-MCP.jpg', alt: 'Jersey Flat Layout' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rb-black relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(/hero-front.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rb-black to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">Rugby Jerseys</h1>
            <p className="text-xl text-rb-gray-300">Professional-grade rugby jerseys designed for ultimate performance and durability</p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProductImageGallery images={galleryImages} />
            </motion.div>

            {/* Product Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-rb-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bebas mb-4">Fabric Specifications</h3>
                <ul className="space-y-2 text-rb-gray-300">
                  <li>• Durable performance blend</li>
                  <li>• Lightweight & breathable</li>
                  <li>• Reinforced seams for durability</li>
                  <li>• Sweat-resistant finish</li>
                  <li>• Designed for active use</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-rb-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bebas mb-4">Available Sizes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-rb-white mb-2">Youth</h4>
                    <ul className="text-rb-gray-300">
                      <li>6-8</li>
                      <li>10-12</li>
                      <li>14-16</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rb-white mb-2">Adult</h4>
                    <ul className="text-rb-gray-300">
                      <li>XS - XL</li>
                      <li>2XL - 3XL</li>
                      <li>4XL - 5XL</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-6 space-y-4"
              >
                <Button to="/contact" variant="primary" size="lg" className="w-full">
                  Get Team Quote
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="w-full">
                  Request Sample
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RugbyJerseysPage;