import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  // Handle scrolling to specific sections based on hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#call') {
      // Small delay to ensure component is rendered
      setTimeout(() => {
        const element = document.querySelector('[data-section="contact-form"]');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Contact Hero */}
      
      {/* Contact Content */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2" data-section="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;