import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Clock, CheckCircle, Truck, FileText, Printer, Wrench, Sparkles, Gift } from 'lucide-react';
import Button from '../components/ui/Button';

interface OrderStatus {
  status: 'awaiting-confirmation' | 'layouts-received' | 'printing' | 'pressing' | 'cleaning-packing' | 'ready-delivery' | 'delivered';
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const TrackOrderPage: React.FC = () => {
  const [leadId, setLeadId] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const statusOptions: OrderStatus[] = [
    {
      status: 'awaiting-confirmation',
      title: 'Awaiting Confirmation',
      description: 'Your order is being reviewed and will be confirmed within 24 hours.',
      icon: Clock,
      color: 'text-yellow-500'
    },
    {
      status: 'layouts-received',
      title: 'Layouts Received',
      description: 'Design layouts have been received and approved for production.',
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      status: 'printing',
      title: 'Printing',
      description: 'Your custom designs are currently being printed.',
      icon: Printer,
      color: 'text-purple-500'
    },
    {
      status: 'pressing',
      title: 'Pressing',
      description: 'Items are being pressed and heat-sealed for durability.',
      icon: Wrench,
      color: 'text-orange-500'
    },
    {
      status: 'cleaning-packing',
      title: 'Cleaning & Packing',
      description: 'Final quality checks, cleaning, and careful packaging in progress.',
      icon: Sparkles,
      color: 'text-cyan-500'
    },
    {
      status: 'ready-delivery',
      title: 'Ready for Delivery',
      description: 'Your order is packed and ready for delivery or collection.',
      icon: Gift,
      color: 'text-green-500'
    },
    {
      status: 'delivered',
      title: 'Delivered to Client',
      description: 'Your order has been successfully delivered and completed.',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ];

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadId.trim()) return;

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // For valid Lead IDs like MD5X9O8ORN02SB, default to "In Production" (printing stage)
      if (leadId.trim().length >= 8) {
        setOrderStatus(statusOptions[2]); // printing stage as "In Production"
      } else {
        // For shorter IDs, show awaiting confirmation
        setOrderStatus(statusOptions[0]);
      }
      setIsLoading(false);
    }, 1500);
  };

  const getCurrentStatusIndex = () => {
    if (!orderStatus) return -1;
    return statusOptions.findIndex(status => status.status === orderStatus.status);
  };

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
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">Track Your Order</h1>
            <p className="text-lg text-rb-gray-300">
              Enter your Lead ID to check the status of your custom sportswear order
            </p>
          </motion.div>
        </div>
      </section>

      {/* Track Order Form */}
      <section className="py-20 bg-rb-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-rb-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleTrackOrder} className="space-y-6">
                <div>
                  <label htmlFor="leadId" className="block text-rb-white font-bebas text-xl mb-3">
                    Lead ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="leadId"
                      value={leadId}
                      onChange={(e) => setLeadId(e.target.value)}
                      placeholder="Enter your Lead ID (e.g., MD5X9O8ORN02SB)"
                      className="w-full px-4 py-3 bg-rb-gray-700 text-rb-white border border-rb-gray-600 rounded-md focus:border-rb-red focus:outline-none transition-colors"
                      required
                    />
                    <Search className="absolute right-3 top-3 text-rb-gray-400" size={20} />
                  </div>
                  <p className="text-rb-gray-400 text-sm mt-2">
                    Your Lead ID was provided when you submitted your quote request
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Tracking...' : 'Track Order'}
                </Button>
              </form>
            </motion.div>

            {/* Order Status Display */}
            {orderStatus && (
              <motion.div
                className="mt-8 bg-rb-gray-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <orderStatus.icon className={`${orderStatus.color} mr-4`} size={32} />
                  <div>
                    <h3 className="text-2xl font-bebas text-rb-white">{orderStatus.title}</h3>
                    <p className="text-rb-gray-400">{orderStatus.description}</p>
                  </div>
                </div>

                <div className="border-t border-rb-gray-700 pt-8">
                  <h4 className="text-lg font-bebas text-rb-white mb-6">Production Timeline</h4>
                  
                  {/* Progress Tracker */}
                  <div className="space-y-4">
                    {statusOptions.map((status, index) => {
                      const currentIndex = getCurrentStatusIndex();
                      const isActive = index === currentIndex;
                      const isCompleted = index < currentIndex;
                      const isUpcoming = index > currentIndex;
                      
                      return (
                        <div key={status.status} className="flex items-start">
                          <div className="flex flex-col items-center mr-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isActive ? 'bg-rb-red' : 
                              isCompleted ? 'bg-green-500' : 
                              'bg-rb-gray-600'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle size={16} className="text-white" />
                              ) : (
                                <status.icon size={16} className="text-white" />
                              )}
                            </div>
                            {index < statusOptions.length - 1 && (
                              <div className={`w-0.5 h-8 mt-2 ${
                                isCompleted ? 'bg-green-500' : 'bg-rb-gray-600'
                              }`} />
                            )}
                          </div>
                          
                          <div className="flex-1 pb-8">
                            <h5 className={`font-bebas text-lg ${
                              isActive ? 'text-rb-red' : 
                              isCompleted ? 'text-green-400' : 
                              'text-rb-gray-500'
                            }`}>
                              {status.title}
                            </h5>
                            <p className={`text-sm mt-1 ${
                              isActive ? 'text-rb-gray-300' : 
                              isCompleted ? 'text-rb-gray-400' : 
                              'text-rb-gray-500'
                            }`}>
                              {status.description}
                            </p>
                            {isActive && (
                              <div className="mt-2">
                                <span className="inline-block bg-rb-red px-2 py-1 rounded text-xs text-white font-semibold">
                                  CURRENT STAGE
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-rb-gray-700 rounded-md">
                  <p className="text-rb-gray-300 text-sm">
                    <strong>Lead ID:</strong> {leadId}
                  </p>
                  <p className="text-rb-gray-300 text-sm mt-1">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-rb-gray-300 text-sm mt-1">
                    <strong>Estimated Completion:</strong> {
                      getCurrentStatusIndex() >= 6 ? 'Completed' :
                      getCurrentStatusIndex() >= 4 ? '1-2 days' :
                      getCurrentStatusIndex() >= 2 ? '3-5 days' :
                      '1-2 weeks'
                    }
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-rb-black">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bebas mb-6">Need Help?</h2>
            <p className="text-rb-gray-400 mb-8">
              Can't find your Lead ID or have questions about your order? Our team is here to help.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button to="/contact" variant="outline" size="md">
                Contact Support
              </Button>
              <Button href="tel:+27823163330" variant="primary" size="md">
                Call Us: 082 316 3330
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrackOrderPage;