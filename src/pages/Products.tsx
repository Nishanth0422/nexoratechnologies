import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  MessageSquare,
  X,
  ArrowRight,
  ExternalLink,
  Play,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'NexCommerce',
      category: 'E-commerce Platform',
      shortDescription: 'Complete e-commerce solution for modern businesses.',
      fullDescription: 'NexCommerce is a comprehensive e-commerce platform that provides everything you need to start, run, and grow your online business. With advanced features, seamless integrations, and powerful analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingCart,
      features: [
        'Multi-vendor marketplace support',
        'Advanced inventory management',
        'Integrated payment processing',
        'Mobile-responsive design',
        'SEO optimization tools',
        'Real-time analytics dashboard',
        'Customer support system',
        'Multi-language support'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      pricing: 'Starting at $99/month',
      demoUrl: '#',
      rating: 4.8,
      reviews: 156,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'TeamSync',
      category: 'Project Management',
      shortDescription: 'Collaborative project management and team coordination platform.',
      fullDescription: 'TeamSync revolutionizes how teams collaborate and manage projects. With intuitive interfaces, real-time collaboration tools, and powerful project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Users,
      features: [
        'Real-time collaboration',
        'Task and milestone tracking',
        'Team communication tools',
        'File sharing and version control',
        'Time tracking and reporting',
        'Integration with popular tools',
        'Custom workflows',
        'Mobile applications'
      ],
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      pricing: 'Starting at $49/month',
      demoUrl: '#',
      rating: 4.9,
      reviews: 203,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'DataViz Pro',
      category: 'Analytics Platform',
      shortDescription: 'Advanced data visualization and business intelligence platform.',
      fullDescription: 'DataViz Pro transforms complex data into actionable insights through beautiful visualizations, interactive dashboards, and powerful analytics tools.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: BarChart3,
      features: [
        'Interactive dashboards',
        'Real-time data processing',
        'Custom chart types',
        'Data source integrations',
        'Automated reporting',
        'Collaborative analytics',
        'Export and sharing tools',
        'API access'
      ],
      technologies: ['D3.js', 'Python', 'Apache Kafka', 'Redis', 'Kubernetes'],
      pricing: 'Starting at $199/month',
      demoUrl: '#',
      rating: 4.7,
      reviews: 89,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'ChatBot Builder',
      category: 'AI Communication',
      shortDescription: 'No-code chatbot builder with AI-powered conversations.',
      fullDescription: 'Create intelligent chatbots without coding. Our platform uses advanced AI to provide natural conversations, automate customer support, and enhance user engagement.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: MessageSquare,
      features: [
        'Drag-and-drop bot builder',
        'Natural language processing',
        'Multi-channel deployment',
        'Analytics and insights',
        'Integration capabilities',
        'Custom training data',
        'Voice support',
        '24/7 availability'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'WebSocket', 'React'],
      pricing: 'Starting at $79/month',
      demoUrl: '#',
      rating: 4.6,
      reviews: 124,
      color: 'bg-orange-500'
    },
    {
      id: 5,
      name: 'SecureVault',
      category: 'Security Platform',
      shortDescription: 'Enterprise-grade security and data protection solution.',
      fullDescription: 'SecureVault provides comprehensive security solutions including data encryption, access control, threat detection, and compliance management for enterprises.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingCart,
      features: [
        'End-to-end encryption',
        'Multi-factor authentication',
        'Threat detection and response',
        'Compliance reporting',
        'Access control management',
        'Audit trails',
        'Data backup and recovery',
        'Security monitoring'
      ],
      technologies: ['Go', 'Kubernetes', 'Vault', 'Prometheus', 'Grafana'],
      pricing: 'Contact for pricing',
      demoUrl: '#',
      rating: 4.9,
      reviews: 67,
      color: 'bg-red-500'
    },
    {
      id: 6,
      name: 'CloudScale',
      category: 'Infrastructure Platform',
      shortDescription: 'Auto-scaling cloud infrastructure management platform.',
      fullDescription: 'CloudScale automatically manages your cloud infrastructure, optimizing costs and performance while ensuring high availability and scalability.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: BarChart3,
      features: [
        'Auto-scaling capabilities',
        'Cost optimization',
        'Multi-cloud support',
        'Performance monitoring',
        'Disaster recovery',
        'Infrastructure as code',
        'Security compliance',
        'Resource allocation'
      ],
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Ansible'],
      pricing: 'Starting at $299/month',
      demoUrl: '#',
      rating: 4.8,
      reviews: 91,
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
              Our <span className="text-nexora-blue">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of innovative software products designed to streamline 
              operations, enhance productivity, and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${product.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                    <product.icon className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-nexora-blue font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-nexora-dark mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-nexora-blue">{product.pricing}</span>
                    <button className="text-nexora-blue font-semibold hover:text-blue-600 transition-colors duration-200 inline-flex items-center space-x-1">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white text-gray-600 hover:text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X size={20} />
                </button>
                <div className={`absolute bottom-4 left-4 ${selectedProduct.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                  <selectedProduct.icon className="text-white" size={32} />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-sm text-nexora-blue font-medium">{selectedProduct.category}</span>
                    <h2 className="text-3xl font-bold text-nexora-dark mb-2">{selectedProduct.name}</h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={20} />
                        <span className="font-semibold">{selectedProduct.rating}</span>
                        <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                      </div>
                      <span className="text-2xl font-bold text-nexora-blue">{selectedProduct.pricing}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-nexora-dark mb-4">About This Product</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedProduct.fullDescription}
                    </p>

                    <h3 className="text-xl font-bold text-nexora-dark mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-nexora-blue rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-nexora-dark mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.technologies.map((tech, index) => (
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
                    <div className="bg-nexora-gray rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-bold text-nexora-dark mb-4">Try It Now</h3>
                      <p className="text-gray-600 mb-4">
                        Experience the power of {selectedProduct.name} with our interactive demo.
                      </p>
                      <div className="space-y-3">
                        <button className="w-full bg-nexora-blue text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <Play size={20} />
                          <span>Live Demo</span>
                        </button>
                        <button className="w-full border-2 border-nexora-blue text-nexora-blue py-3 px-4 rounded-lg hover:bg-nexora-blue hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                          <ExternalLink size={20} />
                          <span>Free Trial</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-nexora-dark mb-4">What's Included</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>✓ Full access to all features</li>
                        <li>✓ 24/7 customer support</li>
                        <li>✓ Regular updates and improvements</li>
                        <li>✓ API access and documentation</li>
                        <li>✓ Training and onboarding</li>
                        <li>✓ 30-day money-back guarantee</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-nexora-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200 inline-flex items-center space-x-2"
                      onClick={() => setSelectedProduct(null)}
                    >
                      <span>Contact Sales</span>
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-nexora-blue text-nexora-blue px-8 py-3 rounded-full font-semibold hover:bg-nexora-blue hover:text-white transition-all duration-200"
                  >
                    Start Free Trial
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
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
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are built with cutting-edge technology and designed 
              to solve real business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Ready',
                description: 'Built for scale with enterprise-grade security and reliability.',
                icon: '🏢'
              },
              {
                title: 'Easy Integration',
                description: 'Seamlessly integrate with your existing tools and workflows.',
                icon: '🔗'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support from our expert technical team.',
                icon: '🛟'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-nexora-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their 
              operations with our innovative products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-nexora-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-nexora-blue transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;