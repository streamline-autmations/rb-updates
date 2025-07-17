import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* About Hero */}
      <section className="pt-32 pb-20 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">More Than Just Threads</h1>
          </motion.div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/src/assets/images/rb-about.png" 
                  alt="RecklessBear Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-rb-gray-300 mb-6 text-lg">
                RecklessBear is more than a clothing brand. We're driven by passion for sport, gym culture, and performance.
              </p>
              <p className="text-rb-gray-400 mb-6">
                From design to manufacturing, everything happens in-house. Based in Johannesburg, we serve clients across South Africa with pride.
              </p>
              <p className="text-rb-gray-400 mb-8">
                We started with a simple belief: athletes, teams, and fitness enthusiasts deserve custom sportswear that performs as good as it looks. 
                Every design is created with performance, durability, and style in mind.
              </p>
              
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Work With Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on materials or craftsmanship. Every stitch matters.'
              },
              {
                title: 'Performance',
                description: 'Our gear is designed to enhance athletic performance, not just look good.'
              },
              {
                title: 'Innovation',
                description: "We're constantly exploring new techniques and materials to push boundaries."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-rb-gray-900 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bebas mb-4 text-rb-red">{value.title}</h3>
                <p className="text-rb-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-rb-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Meet The Team</h2>
            <p className="text-rb-gray-400 max-w-2xl mx-auto">
              The passionate individuals behind RecklessBear
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Etienne Viljoen',
                position: 'Brand Owner',
                email: 'etienne@recklessbear.co.za',
                phone: '082 316 3330',
                image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
              },
              {
                name: 'Janco Tiedt',
                position: 'Director',
                email: 'janco@recklessbear.co.za',
                phone: '076 689 0383',
                image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Zander Steyn',
                position: 'Sales',
                email: 'zander@recklessbear.co.za',
                phone: '+27 82 384 1522',
                image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="aspect-square bg-cover bg-center relative bg-rb-gray-800"
                >
                  {member.name === 'Etienne Viljoen' ? (
                    <img 
                      src="/src/assets/images/Ettien_img.svg" 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-rb-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bebas text-rb-white">{member.name}</h3>
                    <p className="text-rb-gray-400">{member.position}</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-rb-gray-300 text-sm">{member.email}</p>
                      <p className="text-rb-gray-300 text-sm">{member.phone}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <div className="bg-rb-gray-900 p-8 rounded-lg">
              <h2 className="text-3xl font-bebas mb-8 text-rb-white">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="text-rb-red w-8 h-8 mr-4" />
                  <div>
                    <h3 className="text-xl font-bebas text-rb-white mb-1">Opening Hours</h3>
                    <p className="text-rb-gray-400">Monday - Friday: 09AM - 05PM</p>
                    <p className="text-rb-gray-400">Saturday - Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-rb-red w-8 h-8 mr-4" />
                  <div>
                    <h3 className="text-xl font-bebas text-rb-white mb-1">Location</h3>
                    <p className="text-rb-gray-400">Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-rb-red w-8 h-8 mr-4" />
                  <div>
                    <h3 className="text-xl font-bebas text-rb-white mb-1">Email</h3>
                    <a href="mailto:etienne@recklessbear.co.za" className="text-rb-gray-400 hover:text-rb-white transition-colors">
                      etienne@recklessbear.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-rb-red w-8 h-8 mr-4" />
                  <div>
                    <h3 className="text-xl font-bebas text-rb-white mb-1">Phone</h3>
                    <a href="tel:+27823163330" className="text-rb-gray-400 hover:text-rb-white transition-colors">
                      082 316 3330
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-rb-gray-900 rounded-lg overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.4868775856164!2d28.0292878!3d-26.0597698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957454afe8f5c5%3A0x1e1f49a62ab1b1ea!2s1724%20Kudu%20St%2C%20Allen&#39;s%20Nek%2C%20Roodepoort%2C%201709!5e0!3m2!1sen!2sza!4v1710861477953!5m2!1sen!2sza"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;