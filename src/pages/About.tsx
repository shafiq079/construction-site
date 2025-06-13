import React from 'react';
import { Award, Users, Shield, Target, Heart, Lightbulb } from 'lucide-react';
import Card from '../components/ui/Card';

const About = () => {
  const teamMembers = [
    {
      name: "John BuildCraft",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "With over 25 years in construction, John founded BuildCraft with a vision to deliver exceptional quality and service."
    },
    {
      name: "Sarah Mitchell",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Sarah brings 15 years of project management expertise, ensuring every project is delivered on time and within budget."
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Contractor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Mike's attention to detail and craftsmanship expertise makes him invaluable to our construction team."
    },
    {
      name: "Lisa Chen",
      role: "Design Coordinator",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Lisa coordinates design elements and ensures architectural visions are perfectly executed in construction."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, never settling for 'good enough' when we can deliver exceptional results."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication, transparent pricing, and ethical business practices form the foundation of our relationships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients, architects, and subcontractors to ensure seamless project execution."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and sustainable practices to deliver cutting-edge construction solutions."
    }
  ];

  const milestones = [
    { year: "2004", event: "BuildCraft Construction founded" },
    { year: "2008", event: "Completed first major commercial project" },
    { year: "2012", event: "Expanded to serve three metropolitan areas" },
    { year: "2016", event: "Reached 250 completed projects milestone" },
    { year: "2020", event: "Launched sustainable building initiative" },
    { year: "2024", event: "Celebrating 20 years of excellence" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About BuildCraft Construction</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 20 years, we've been building more than structures—we've been building relationships, 
            communities, and dreams. Our commitment to excellence has made us a trusted partner in construction.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                BuildCraft Construction was born from a simple belief: that every building project, no matter the size, 
                deserves exceptional craftsmanship and unwavering dedication. Founded in 2004 by John BuildCraft, 
                our company started as a small residential contractor with big dreams and an even bigger commitment to quality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What began as a one-man operation has grown into a full-service construction company, but our core values 
                remain unchanged. We still approach every project with the same attention to detail, personal service, 
                and commitment to excellence that defined us from day one.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, BuildCraft Construction is proud to be a family-owned business that has completed over 500 projects 
                while maintaining the personal touch that sets us apart in the industry.
              </p>
            </div>
            <div>
              <Card>
                <img
                  src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Construction team working together"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by principles that ensure every project we undertake reflects our commitment to quality, integrity, and client satisfaction.
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                To deliver exceptional construction services that exceed client expectations while building lasting relationships 
                based on trust, quality craftsmanship, and innovative solutions. We are committed to creating structures that 
                stand the test of time while contributing positively to our communities.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals brings together decades of expertise, creativity, and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of growth, innovation, and building excellence. Here are the key milestones that have shaped our company.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-6">
                    <div className="text-2xl font-bold text-blue-700 mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BuildCraft?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've earned our reputation through consistent delivery of exceptional results. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Shield className="text-orange-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed contractors with comprehensive insurance coverage for your peace of mind and protection.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Award className="text-orange-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning Quality</h3>
              <p className="text-gray-600">
                Recognized by industry associations for excellence in construction and customer satisfaction.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Users className="text-orange-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Focused Approach</h3>
              <p className="text-gray-600">
                Personalized service with dedicated project managers ensuring clear communication throughout your project.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;