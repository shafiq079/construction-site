import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Search, Filter } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: '1',
      title: 'Modern Family Estate',
      location: 'Westfield, BC',
      date: '2024',
      type: 'Residential',
      size: '4,500 sq ft',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A stunning custom home featuring contemporary design with sustainable building practices and smart home integration.',
    },
    {
      id: '2',
      title: 'Downtown Office Complex',
      location: 'Business District, BC',
      date: '2023',
      type: 'Commercial',
      size: '50,000 sq ft',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A 12-story commercial building with modern amenities, energy-efficient systems, and flexible office spaces.',
    },
    {
      id: '3',
      title: 'Luxury Kitchen Renovation',
      location: 'Hillview, BC',
      date: '2024',
      type: 'Renovation',
      size: '800 sq ft',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete kitchen transformation with premium finishes, custom cabinetry, and smart home integration.',
    },
    {
      id: '4',
      title: 'Riverside Condominiums',
      location: 'Riverside, BC',
      date: '2023',
      type: 'Residential',
      size: '45,000 sq ft',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A modern 24-unit condominium complex with waterfront views and eco-friendly construction methods.',
    },
    {
      id: '5',
      title: 'Historic Building Restoration',
      location: 'Old Town, BC',
      date: '2023',
      type: 'Renovation',
      size: '12,000 sq ft',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Careful restoration of a 1920s heritage building, preserving historical elements while adding modern functionality.',
    },
    {
      id: '6',
      title: 'Tech Campus Expansion',
      location: 'Innovation Park, BC',
      date: '2022',
      type: 'Commercial',
      size: '75,000 sq ft',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Expansion of a technology campus with collaborative workspaces, cafeteria, and conference facilities.',
    },
  ];

  const filterOptions = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || project.type === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing our commitment to quality, 
            innovation, and client satisfaction across residential and commercial construction.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <div className="flex space-x-2">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedFilter === filter
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} hover className="overflow-hidden">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.type === 'Residential' ? 'bg-green-100 text-green-800' :
                        project.type === 'Commercial' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {project.type}
                      </span>
                      <span className="text-sm text-gray-500">{project.size}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us bring your vision to life with the same quality and attention to detail showcased in our portfolio.
          </p>
          <Link to="/contact">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;