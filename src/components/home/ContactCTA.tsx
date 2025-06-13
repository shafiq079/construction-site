import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Get in touch with our team today for a free consultation and quote. 
          We're here to turn your construction dreams into reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Get Free Quote
            </Button>
          </Link>
          
          <div className="flex items-center space-x-2 text-white">
            <span className="text-lg">or call us directly:</span>
            <a 
              href="tel:+15551234567" 
              className="flex items-center space-x-2 text-xl font-semibold hover:text-orange-300 transition-colors"
            >
              <Phone size={20} />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-blue-100 text-sm">
          <p>Available 24/7 for emergency services • Free estimates • Licensed & Insured</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;