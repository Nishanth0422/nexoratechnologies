import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Brain, 
  Cloud,
  X,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web & Mobile Development',
      shortDescription: 'Custom web and mobile applications built with cutting-edge technologies.',
      fullDescription: 'We create responsive, scalable, and user-friendly web and mobile applications using the latest technologies. Our development process ensures high performance, security, and maintainability.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps (PWA)',
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'API Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'React Native', 'Node.js', 'Flutter', 'Swift', 'Kotlin'],
      caseStudy: {
        title: 'E-commerce Platform',
        description: 'Built a comprehensive e-commerce platform that increased client sales by 300%',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      color: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Code,
      title: 'Full Stack Development',
      shortDescription: 'End-to-end development solutions from frontend to backend infrastructure.',
      fullDescription: 'Our full-stack development services cover everything from user interface design to server architecture, database management, and cloud deployment. We ensure seamless integration across all layers.',
      features: [
        'Frontend Development',
        'Backend Architecture',
        'Database Design',
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Microservices Architecture'
      ],
      technologies: ['MERN Stack', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      caseStudy: {
        title: 'Healthcare Management System',
        description: 'Developed a comprehensive healthcare platform serving 10,000+ patients',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      color: 'bg-green-500'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Digital Marketing',
      shortDescription: 'Strategic digital marketing solutions to grow your online presence.',
      fullDescription: 'We help businesses establish and grow their digital presence through comprehensive marketing strategies, including SEO, social media marketing, content creation, and paid advertising campaigns.',
      features: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Pay-Per-Click Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'Mailchimp', 'Hootsuite', 'SEMrush'],
      caseStudy: {
        title: 'Brand Awareness Campaign',
        description: 'Increased brand visibility by 500% and generated 200% more leads',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      color: 'bg-orange-500'
    },
    {
      id: 4,
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that enhance user experience and engagement.',
      fullDescription: 'Our design team creates visually stunning and user-friendly interfaces that not only look great but also provide exceptional user experiences. We focus on usability, accessibility, and conversion optimization.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle', 'Framer'],
      caseStudy: {
        title: 'Mobile App Redesign',
        description: 'Redesigned mobile app interface resulting in 40% increase in user engagement',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      color: 'bg-purple-500'
    },
    {
      id: 5,
      icon: Brain,
      title: 'AI & Machine Learning',
      shortDescription: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      fullDescription: 'We develop AI-powered applications that can automate processes, provide insights, and enhance user experiences. Our AI solutions include chatbots, recommendation systems, and predictive analytics.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas'],
      caseStudy: {
        title: 'Predictive Analytics Platform',
        description: 'Built AI system that improved business forecasting accuracy by 85%',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      color: 'bg-red-500'
    },
    {
      id: 6,
      icon: Cloud,
      title: 'Cloud Solutions',
      shortDescription: 'Scalable cloud infrastructure and migration services for modern businesses.',
      fullDescription: 'We help businesses leverage cloud technologies for better scalability, security, and cost-effectiveness. Our cloud services include migration, architecture design, and ongoing management.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Security & Compliance',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      caseStudy: {
        title: 'Enterprise Cloud Migration',
        description: 'Migrated enterprise infrastructure to cloud, reducing costs by 60%',
        image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      color: 'bg-indigo-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nexora-blue/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-nexora-dark mb-6">
              Our <span className="text-nexora-blue">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to transform your business 
              and drive digital innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-nexora-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <button className="text-nexora-blue font-semibold hover:text-blue-600 transition-colors duration-200 inline-flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${selectedService.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <selectedService.icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-nexora-dark">{selectedService.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedService.fullDescription}
                    </p>

                    <h3 className="text-xl font-bold text-nexora-dark mb-4">Key Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-nexora-dark mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-nexora-blue/10 text-nexora-blue px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-nexora-dark mb-4">Case Study</h3>
                    <div className="bg-nexora-gray rounded-lg p-6">
                      <img
                        src={selectedService.caseStudy.image}
                        alt={selectedService.caseStudy.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-lg font-bold text-nexora-dark mb-2">
                        {selectedService.caseStudy.title}
                      </h4>
                      <p className="text-gray-600">
                        {selectedService.caseStudy.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-nexora-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200 inline-flex items-center space-x-2"
                      onClick={() => setSelectedService(null)}
                    >
                      <span>Get Started</span>
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <section className="py-20 bg-nexora-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nexora-dark mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution with precision' },
              { step: '04', title: 'Delivery', description: 'Launching and ongoing support' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-nexora-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-nexora-dark mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nexora-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and how we can help bring your vision to life 
              with our expert services.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-nexora-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Contact Us Today</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;