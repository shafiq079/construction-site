import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  timeline: string;
  budget: string;
  description: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const projectTypes = [
    'New Home Construction',
    'Commercial Building',
    'Home Renovation',
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Room Addition',
    'Roofing',
    'Emergency Repair',
    'Other'
  ];

  const budgetRanges = [
    'Under $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    'Over $500,000'
  ];

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center max-w-lg mx-auto">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            We've received your quote request and will get back to you within 24 hours. 
            A member of our team will contact you to discuss your project in detail.
          </p>
          <p className="text-gray-600 mb-6">
            For urgent matters, please call us directly at{' '}
            <a href="tel:+15551234567" className="text-blue-700 font-semibold">
              (555) 123-4567
            </a>
          </p>
          <Button onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}>
            Submit Another Request
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation and detailed quote. 
            Our team of experts is here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <Phone className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a 
                href="tel:+15551234567" 
                className="text-blue-700 font-medium hover:text-blue-800"
              >
                (555) 123-4567
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7 for emergencies</p>
            </Card>

            <Card className="p-6 text-center">
              <Mail className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a 
                href="mailto:info@buildcraft.com" 
                className="text-blue-700 font-medium hover:text-blue-800"
              >
                info@buildcraft.com
              </a>
              <p className="text-sm text-gray-600 mt-2">We respond within 2 hours</p>
            </Card>

            <Card className="p-6 text-center">
              <MapPin className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700">
                123 Construction Ave<br />
                Builder City, BC 12345
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Clock className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-700 text-sm">
                Mon - Fri: 7:00 AM - 6:00 PM<br />
                Sat: 8:00 AM - 4:00 PM<br />
                Sun: Emergency Only
              </p>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Your Free Quote</h2>
                  
                  {/* Progress Bar */}
                  <div className="flex items-center mb-6">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step <= currentStep ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {step}
                        </div>
                        {step < 3 && (
                          <div className={`h-1 w-16 mx-2 ${
                            step < currentStep ? 'bg-blue-700' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-gray-600 mb-6">
                    Step {currentStep} of 3: {
                      currentStep === 1 ? 'Personal Information' :
                      currentStep === 2 ? 'Project Details' :
                      'Project Description'
                    }
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            {...register('firstName', { required: 'First name is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            {...register('lastName', { required: 'Last name is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Please enter a valid email address'
                            }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone', { required: 'Phone number is required' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <Button type="button" onClick={nextStep}>
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          {...register('projectType', { required: 'Please select a project type' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select project type...</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Location *
                        </label>
                        <input
                          type="text"
                          id="projectLocation"
                          placeholder="City, Province or full address"
                          {...register('projectLocation', { required: 'Project location is required' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.projectLocation && (
                          <p className="mt-1 text-sm text-red-600">{errors.projectLocation.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                            Desired Timeline *
                          </label>
                          <select
                            id="timeline"
                            {...register('timeline', { required: 'Please select a timeline' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select timeline...</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                          {errors.timeline && (
                            <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range *
                          </label>
                          <select
                            id="budget"
                            {...register('budget', { required: 'Please select a budget range' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select budget range...</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                          {errors.budget && (
                            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Previous
                        </Button>
                        <Button type="button" onClick={nextStep}>
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Description */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Description *
                        </label>
                        <textarea
                          id="description"
                          rows={6}
                          placeholder="Please provide details about your project, including any specific requirements, preferences, or questions you may have..."
                          {...register('description', { required: 'Project description is required' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.description && (
                          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                        )}
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• We'll review your request within 2 hours</li>
                          <li>• A project manager will contact you within 24 hours</li>
                          <li>• We'll schedule a free on-site consultation</li>
                          <li>• You'll receive a detailed written quote within 3-5 business days</li>
                        </ul>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Previous
                        </Button>
                        <Button type="submit" icon={Send} iconPosition="right">
                          Submit Quote Request
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose BuildCraft?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Free detailed quotes with no hidden costs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Licensed and fully insured contractors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>20+ years of construction experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Quality guarantee on all work</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Dedicated project management</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <p className="text-sm text-gray-600 mb-3">
                  We proudly serve the following areas:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Metro Vancouver Area</li>
                  <li>• Fraser Valley Region</li>
                  <li>• North Shore Communities</li>
                  <li>• Tri-Cities Area</li>
                  <li>• And surrounding regions</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  Not sure if we serve your area? Contact us to find out!
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  For emergency repairs or urgent consultations, call us directly.
                </p>
                <a 
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call (555) 123-4567
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;