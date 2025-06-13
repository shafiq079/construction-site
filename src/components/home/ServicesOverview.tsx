import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Wrench, Zap, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, additions, and renovations built to your exact specifications with quality materials and expert craftsmanship.',
    },
    {
      icon: Building,
      title: 'Commercial Development',
      description: 'Office buildings, retail spaces, and industrial facilities designed for functionality, efficiency, and long-term value.',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our comprehensive renovation services, from kitchens and bathrooms to full home makeovers.',
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: '24/7 emergency services for urgent construction and repair needs. Fast response times with reliable, quality solutions.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction services to meet all your building needs, 
            from residential projects to large commercial developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} hover className="p-6 h-full">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="secondary" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;