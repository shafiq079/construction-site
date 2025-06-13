import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Construction site with workers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Building Your Vision
          <span className="block text-orange-500">Into Reality</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional construction services with over 20 years of experience. 
          From residential homes to commercial developments, we bring expertise and excellence to every project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/contact">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Get Free Quote
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg">
              View Our Projects
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <Shield className="text-orange-500" size={32} />
            <div className="text-left">
              <p className="font-semibold">Licensed & Insured</p>
              <p className="text-sm opacity-90">Fully certified & protected</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <Award className="text-orange-500" size={32} />
            <div className="text-left">
              <p className="font-semibold">20+ Years Experience</p>
              <p className="text-sm opacity-90">Industry expertise</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <Users className="text-orange-500" size={32} />
            <div className="text-left">
              <p className="font-semibold">500+ Projects Completed</p>
              <p className="text-sm opacity-90">Satisfied customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;