import React from 'react';
import { Home, Building, Wrench, Zap, Hammer, PaintBucket, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'New Home Construction',
      description: 'Custom-built homes designed to your specifications with quality materials and expert craftsmanship.',
      features: ['Custom floor plans', 'Premium materials', 'Energy-efficient design', 'Modern amenities'],
      process: ['Design consultation', 'Permits & approvals', 'Foundation work', 'Frame construction', 'Interior finishing'],
      timeline: '4-8 months',
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and industrial facilities built for functionality and efficiency.',
      features: ['ADA compliance', 'Commercial-grade systems', 'Flexible layouts', 'Safety standards'],
      process: ['Site analysis', 'Planning phase', 'Foundation & structure', 'Systems installation', 'Final inspection'],
      timeline: '6-18 months',
    },
    {
      icon: Wrench,
      title: 'Home Renovations',
      description: 'Transform your existing space with comprehensive renovation and remodeling services.',
      features: ['Whole-house renovations', 'Room additions', 'Structural modifications', 'Modern updates'],
      process: ['Assessment & design', 'Permits', 'Demolition', 'Construction', 'Final touches'],
      timeline: '2-6 months',
    },
    {
      icon: PaintBucket,
      title: 'Kitchen & Bathroom Remodeling',
      description: 'Specialized remodeling services for kitchens and bathrooms with premium finishes.',
      features: ['Custom cabinetry', 'Premium countertops', 'Modern fixtures', 'Smart storage solutions'],
      process: ['Design meeting', 'Material selection', 'Demolition', 'Installation', 'Final walkthrough'],
      timeline: '3-8 weeks',
    },
    {
      icon: Hammer,
      title: 'Roofing Services',
      description: 'Complete roofing solutions including repairs, replacements, and new installations.',
      features: ['Multiple material options', 'Weather-resistant', 'Energy-efficient', 'Warranty coverage'],
      process: ['Roof inspection', 'Material selection', 'Removal (if needed)', 'Installation', 'Quality check'],
      timeline: '1-3 weeks',
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: '24/7 emergency services for urgent construction and repair needs with fast response times.',
      features: ['24/7 availability', 'Rapid response', 'Temporary solutions', 'Permanent repairs'],
      process: ['Emergency call', 'Immediate assessment', 'Temporary stabilization', 'Permanent repair', 'Follow-up'],
      timeline: 'Same day to 1 week',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive construction services from residential homes to commercial buildings. 
            We bring expertise, quality, and reliability to every project we undertake.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="text-blue-700" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight size={14} className="text-orange-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Process</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {idx + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-sm text-gray-500">Typical Timeline:</span>
                      <span className="ml-2 font-semibold text-gray-900">{service.timeline}</span>
                    </div>
                    <Link to="/contact">
                      <Button size="sm">Get Quote</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures quality results, clear communication, and on-time delivery for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your vision, requirements, and budget.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning, permits, and timeline development.',
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Professional execution with regular updates and quality checks.',
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final walkthrough, handover, and ongoing support as needed.',
              },
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to discuss your project 
            and provide expert guidance on the best approach for your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Request Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;