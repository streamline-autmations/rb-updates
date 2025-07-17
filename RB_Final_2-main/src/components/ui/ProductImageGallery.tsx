import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: GalleryImage[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 w-24">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === selectedIndex ? 'border-rb-red shadow-lg' : 'border-rb-gray-600 hover:border-rb-gray-400'
                }`}
              >
                <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-rb-gray-800 group cursor-zoom-in">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsLightboxOpen(true)}
                />
              </AnimatePresence>
              
              <div className="absolute top-4 right-4 bg-rb-black/60 text-rb-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <ZoomIn size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-rb-gray-800">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsLightboxOpen(true)}
            />
          </AnimatePresence>

          {selectedIndex > 0 && (
            <button
              onClick={() => setSelectedIndex(selectedIndex - 1)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-rb-black/60 text-rb-white p-2 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {selectedIndex < images.length - 1 && (
            <button
              onClick={() => setSelectedIndex(selectedIndex + 1)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-rb-black/60 text-rb-white p-2 rounded-full backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div className="absolute top-4 right-4 bg-rb-black/60 text-rb-white p-2 rounded-full backdrop-blur-sm">
            <ZoomIn size={16} />
          </div>
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                index === selectedIndex ? 'border-rb-red' : 'border-rb-gray-600'
              }`}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} className="max-w-full max-h-full object-contain" />

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 bg-rb-black/60 text-rb-white p-2 rounded-full hover:bg-rb-red/80 transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductImageGallery;