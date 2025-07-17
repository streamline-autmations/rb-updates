import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ruler, Palette, Shirt } from 'lucide-react';
import Button from '../ui/Button';

interface BaseProductPageProps {
  title: string;
  description: string;
  heroImage: string;
  kitIncludes?: string[];
  fabricSpecs?: string[];
  colors: Array<{ name: string; hex: string }>;
  sizes: {
    youth?: string[];
    adult?: string[];
    regular?: string[];
    slim?: string[];
  };
  features?: Array<{
    title: string;
    description: string;
  }>;
  orderInfo?: string[];
}

const BaseProductPage: React.FC<BaseProductPageProps> = ({
  title,
  description,
  heroImage,
  kitIncludes,
  fabricSpecs,
  colors,
  sizes,
  features,
  orderInfo
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || '');

  const defaultOrderInfo = [
    'Minimum order: 1 item',
    'Bulk discounts available for 25+ pieces',
    'Free design mockups provided after quote approval',
    'Sample kits available for schools',
    'Rush orders available in 1–2 weeks or 2–3 weeks with surcharge',
    'Delivery or courier service available (extra cost)',
    'Full payment required before delivery'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rb-black relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rb-black to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">{title}</h1>
            <p className="text-xl text-rb-gray-300">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <img 
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Kit Includes */}
              {kitIncludes && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bebas mb-4">Kit Includes</h2>
                  <ul className="text-rb-gray-300 space-y-2">
                    {kitIncludes.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Fabric Specifications */}
              {fabricSpecs && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-rb-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Shirt className="text-rb-red mr-3" size={24} />
                    <h3 className="text-xl font-bebas">Fabric Specifications</h3>
                  </div>
                  <ul className="space-y-2 text-rb-gray-300">
                    {fabricSpecs.map((spec, i) => (
                      <li key={i}>• {spec}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Sizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-rb-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Ruler className="text-rb-red mr-3" size={24} />
                  <h3 className="text-xl font-bebas">Available Sizes</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(sizes).map(([type, sizeList]) => (
                    <div key={type}>
                      <h4 className="font-semibold text-rb-white mb-2 capitalize">{type}</h4>
                      <ul className="text-rb-gray-300">
                        {sizeList?.map((size, i) => (
                          <li key={i}>{size}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Colors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-rb-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Palette className="text-rb-red mr-3" size={24} />
                  <h3 className="text-xl font-bebas">Color Options</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        selectedColor === color.name 
                          ? 'border-rb-red scale-110' 
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Order Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-rb-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bebas mb-4">Order Information</h3>
                <ul className="space-y-2 text-rb-gray-300 text-sm">
                  <li>• Durable performance blend</li>
                  <li>• Lightweight & breathable</li>
                  <li>• Reinforced seams for durability</li>
                  <li>• Sweat-resistant finish</li>
                  <li>• Designed for active use</li>
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
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

      {/* Features Section */}
      {features && (
        <section className="py-16 bg-rb-black">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bebas mb-6">Why Choose Our Products?</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-rb-gray-900 p-8 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bebas mb-4">{feature.title}</h3>
                  <p className="text-rb-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Recommended Products Section */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bebas mb-6">You Might Also Like</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Team Tracksuits',
                image: 'https://images.pexels.com/photos/8007515/pexels-photo-8007515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
                path: '/products/teamwear-sets'
              },
              {
                title: 'Performance Gymwear',
                image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
                path: '/products/gymwear'
              },
              {
                title: 'Corporate Staff Uniforms',
                image: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
                path: '/products/staff-uniforms'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={product.path}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rb-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bebas text-rb-white group-hover:text-rb-red transition-colors">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BaseProductPage;