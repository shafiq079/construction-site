import React from 'react';
import { CheckCircle } from 'lucide-react';
import Card from '../ui/Card';

const CompanyIntro = () => {
  const highlights = [
    'Family-owned business with three generations of experience',
    'Committed to sustainable building practices',
    'Award-winning craftsmanship and attention to detail',
    'Transparent pricing with no hidden costs'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card>
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction team at work"
                className="w-full h-96 object-cover rounded-lg"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Construction Partner
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At BuildCraft Construction, we've been transforming visions into reality for over two decades. 
              Our commitment to excellence, combined with cutting-edge techniques and time-honored craftsmanship, 
              ensures every project exceeds expectations.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From custom homes to large-scale commercial developments, we approach each project with the same 
              dedication to quality, safety, and client satisfaction that has made us a leader in the construction industry.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;