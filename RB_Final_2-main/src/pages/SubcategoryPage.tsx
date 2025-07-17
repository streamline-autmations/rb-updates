import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { getProductsBySubcategory } from '../data/productsData';

const SubcategoryPage: React.FC = () => {
  const { subcategorySlug } = useParams<{ subcategorySlug: string }>();

  // Map URL slugs to subcategory names
  const subcategoryMap: { [key: string]: string } = {
    // School & Team Sports
    'rugby-kits': 'Rugby Kits',
    'netball-kits': 'Netball Kits',
    'cricket-kits': 'Cricket Kits',
    'hockey-kits': 'Hockey Kits',
    'athletics-kits': 'Athletics Kits',
    
    // Other Sports & Clubs
    'soccer-kits': 'Soccer Kits',
    'golf-apparel': 'Golf Apparel',
    'darts-shirts': 'Darts Shirts',
    'fishing-gear': 'Fishing Gear',
    
    // Schoolwear & Matric Apparel
    'matric-jackets': 'Matric Jackets',
    'tracksuits-hoodies': 'Tracksuits & Hoodies',
    'female-apparel': 'Female Apparel',
    'jackets': 'Jackets',
    
    // Corporate & Staff Apparel
    'shirts-tops': 'Shirts & Tops',
    'corporate-jackets': 'Jackets',
    'tracksuits-warmups': 'Tracksuits & Warmups',
    'golf-wear': 'Golf Wear',
    'corporate-accessories': 'Accessories',
    
    // Gym & Fitness Apparel
    'gym-tops': 'Tops',
    'gym-bottoms': 'Bottoms',
    'gym-outerwear': 'Outerwear',
    'lifestyle-apparel': 'Lifestyle Apparel',
    
    // Accessories & Branding
    'socks': 'Socks',
    'headwear': 'Headwear',
    'bags': 'Bags',
    'warmup-training': 'Warmup & Training',
    'branding-add-ons': 'Branding & Add-ons'
  };

  const subcategoryName = subcategoryMap[subcategorySlug || ''] || '';
  const products = getProductsBySubcategory(subcategoryName);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!subcategoryName) {
    return (
      <div className="pt-32 pb-16 bg-rb-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bebas text-rb-white mb-4">Subcategory Not Found</h1>
          <Link to="/products" className="text-rb-red hover:text-rb-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">{subcategoryName}</h1>
            <p className="text-lg text-rb-gray-300">
              Browse our complete range of {subcategoryName.toLowerCase()} products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
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
                      <h3 className="text-2xl font-bebas text-rb-white group-hover:text-rb-red transition-colors">
                        {product.title}
                      </h3>
                      {product.description && (
                        <p className="text-rb-gray-400 text-sm mt-2">{product.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-rb-gray-400">No products found in this subcategory.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bebas mb-6">Ready to Order Your {subcategoryName}?</h2>
            <p className="text-rb-gray-300 mb-8">
              Get in touch with our team for custom designs and bulk orders
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SubcategoryPage;