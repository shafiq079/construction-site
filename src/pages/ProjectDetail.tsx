import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, CheckCircle, Users, Clock } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProjectDetail = () => {
  const { id } = useParams();

  // In a real app, this would come from an API or database
  const projectData: { [key: string]: any } = {
    '1': {
      title: 'Modern Family Estate',
      location: 'Westfield, BC',
      date: '2024',
      type: 'Residential',
      size: '4,500 sq ft',
      duration: '7 months',
      client: 'The Johnson Family',
      images: [
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      ],
      description: 'A stunning custom home featuring contemporary design with sustainable building practices and smart home integration. This project showcased our ability to blend modern aesthetics with environmental consciousness.',
      challenges: [
        'Steep terrain requiring specialized foundation work',
        'Integration of renewable energy systems',
        'Coordination with luxury smart home systems',
        'Weather delays during winter construction phase'
      ],
      solutions: [
        'Engineered foundation solution for slope stability',
        'Solar panel array with battery backup system',
        'Collaborated with technology specialists',
        'Adjusted timeline and implemented weather protection'
      ],
      features: [
        'Open-concept living spaces',
        'Gourmet kitchen with premium appliances',
        'Master suite with spa-like bathroom',
        'Home theater and entertainment areas',
        'Solar energy system',
        'Smart home automation',
        'Three-car garage with workshop space',
        'Landscaped outdoor living areas'
      ],
      materials: [
        'Engineered hardwood flooring',
        'Quartz countertops',
        'Custom millwork and cabinetry',
        'High-efficiency windows and doors',
        'Standing seam metal roofing',
        'Natural stone exterior accents'
      ],
      testimonial: {
        text: "BuildCraft exceeded all our expectations. From the initial consultation to the final walkthrough, their professionalism and attention to detail were outstanding. Our dream home became a reality thanks to their exceptional team.",
        author: "Sarah Johnson",
        role: "Homeowner"
      }
    },
    '2': {
      title: 'Downtown Office Complex',
      location: 'Business District, BC',
      date: '2023',
      type: 'Commercial',
      size: '50,000 sq ft',
      duration: '14 months',
      client: 'Metro Business Group',
      images: [
        'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      ],
      description: 'A 12-story commercial building with modern amenities, energy-efficient systems, and flexible office spaces designed for the future of work.',
      challenges: [
        'Downtown location with limited space',
        'Coordination with city utilities and permits',
        'LEED certification requirements',
        'Phased construction to minimize disruption'
      ],
      solutions: [
        'Vertical construction with minimal site footprint',
        'Dedicated liaison for municipal coordination',
        'Green building materials and systems selection',
        'Detailed phasing plan with stakeholder communication'
      ],
      features: [
        'LEED Gold certified building',
        'Flexible open floor plans',
        'High-speed elevator systems',
        'Rooftop terrace and amenity space',
        'Underground parking garage',
        'Advanced HVAC and lighting systems',
        'Conference and meeting facilities',
        'Ground floor retail space'
      ],
      materials: [
        'Curtain wall glazing system',
        'Structural steel frame',
        'Polished concrete floors',
        'Suspended ceiling systems',
        'Energy-efficient LED lighting',
        'High-performance insulation'
      ],
      testimonial: {
        text: "The commercial renovation of our office space was completed on time and within budget. The quality of work and project management was impressive. I highly recommend BuildCraft for any commercial construction needs.",
        author: "Michael Chen",
        role: "Business Owner, Metro Business Group"
      }
    },
    '3': {
      title: 'Luxury Kitchen Renovation',
      location: 'Hillview, BC',
      date: '2024',
      type: 'Renovation',
      size: '800 sq ft',
      duration: '6 weeks',
      client: 'The Rodriguez Family',
      images: [
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      ],
      description: 'Complete kitchen transformation with premium finishes, custom cabinetry, and smart home integration that created the perfect cooking and entertaining space.',
      challenges: [
        'Working within existing structural constraints',
        'Coordinating with homeowners living on-site',
        'Matching existing home architecture',
        'Installing smart systems in older home'
      ],
      solutions: [
        'Creative design solutions for space optimization',
        'Detailed scheduling to minimize disruption',
        'Custom millwork to blend with home style',
        'Upgraded electrical systems for modern appliances'
      ],
      features: [
        'Custom cabinetry with soft-close hardware',
        'Large kitchen island with seating',
        'Professional-grade appliances',
        'Quartz waterfall countertops',
        'Smart lighting and controls',
        'Walk-in pantry with organization systems',
        'Wine storage and beverage center',
        'Under-cabinet LED lighting'
      ],
      materials: [
        'Solid wood custom cabinetry',
        'Quartz countertops',
        'Subway tile backsplash',
        'Hardwood flooring',
        'Stainless steel appliances',
        'Brushed brass fixtures and hardware'
      ],
      testimonial: {
        text: "Our kitchen renovation exceeded every expectation. The team was professional, clean, and incredibly skilled. We now have the kitchen of our dreams and love entertaining in this beautiful space.",
        author: "Maria Rodriguez",
        role: "Homeowner"
      }
    }
  };

  const project = projectData[id || '1'];

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Main Image */}
            <div>
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Info */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.type === 'Residential' ? 'bg-green-100 text-green-800' :
                  project.type === 'Commercial' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {project.type}
                </span>
                <span className="text-2xl font-bold text-gray-900">{project.size}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Completed {project.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={18} />
                  <span>{project.client}</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              <Link to="/contact">
                <Button size="lg">Start Your Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features & Materials */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Materials Used</h3>
                <ul className="space-y-2">
                  {project.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{material}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="text-gray-700 leading-relaxed">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              "{project.testimonial.text}"
            </blockquote>
            <div className="font-semibold text-gray-900">
              {project.testimonial.author}
            </div>
            <div className="text-gray-600">
              {project.testimonial.role}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Inspired by This Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life with the same attention to detail and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Get Your Free Quote</Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">View More Projects</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;