import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, FileText, BookOpen, BarChart3, Globe, Brain, Users, Award, Search, Filter, Code } from 'lucide-react';

const Resource: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: "AI Trends & Insights 2024",
      category: "whitepapers",
      description: "Comprehensive analysis of emerging trends in artificial intelligence and machine learning",
      fileSize: "2.4 MB",
      downloads: 1247,
      lastUpdated: "2024-01-15",
      icon: BarChart3,
      tags: ["trends", "AI", "machine-learning"]
    },
    {
      id: 2,
      title: "Responsible AI Development Guide",
      category: "guides",
      description: "Essential guide to ethical AI development and responsible AI practices",
      fileSize: "1.8 MB",
      downloads: 892,
      lastUpdated: "2024-01-10",
      icon: FileText,
      tags: ["ethics", "responsible-AI", "guidelines"]
    },
    {
      id: 3,
      title: "Machine Learning Implementation",
      category: "brochures",
      description: "Complete overview of our ML services and implementation capabilities",
      fileSize: "3.1 MB",
      downloads: 567,
      lastUpdated: "2024-01-08",
      icon: Brain,
      tags: ["machine-learning", "implementation", "services"]
    },
    {
      id: 4,
      title: "AI Model Deployment Best Practices",
      category: "guides",
      description: "Best practices for deploying and maintaining AI models in production",
      fileSize: "2.7 MB",
      downloads: 445,
      lastUpdated: "2024-01-05",
      icon: Code,
      tags: ["deployment", "best-practices", "production"]
    },
    {
      id: 5,
      title: "Generative AI Case Study",
      category: "case-studies",
      description: "Real-world example of generative AI implementation and business impact",
      fileSize: "1.5 MB",
      downloads: 678,
      lastUpdated: "2024-01-03",
      icon: Users,
      tags: ["case-study", "generative-AI", "implementation"]
    },
    {
      id: 6,
      title: "AI Strategy & Consulting",
      category: "brochures",
      description: "Overview of our AI strategy consulting and advisory services",
      fileSize: "1.2 MB",
      downloads: 334,
      lastUpdated: "2024-01-01",
      icon: Award,
      tags: ["strategy", "consulting", "advisory"]
    },
    {
      id: 7,
      title: "Data Science Fundamentals",
      category: "whitepapers",
      description: "Research paper on fundamental concepts in data science and analytics",
      fileSize: "2.9 MB",
      downloads: 456,
      lastUpdated: "2023-12-28",
      icon: BookOpen,
      tags: ["data-science", "fundamentals", "analytics"]
    },
    {
      id: 8,
      title: "AI Integration Framework",
      category: "guides",
      description: "How to integrate AI solutions into existing business systems and workflows",
      fileSize: "2.1 MB",
      downloads: 389,
      lastUpdated: "2023-12-25",
      icon: Globe,
      tags: ["integration", "framework", "business-systems"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: resources.length },
    { id: 'whitepapers', name: 'Whitepapers', count: resources.filter(r => r.category === 'whitepapers').length },
    { id: 'guides', name: 'Guides', count: resources.filter(r => r.category === 'guides').length },
    { id: 'brochures', name: 'Brochures', count: resources.filter(r => r.category === 'brochures').length },
    { id: 'case-studies', name: 'Case Studies', count: resources.filter(r => r.category === 'case-studies').length }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (resource: any) => {
    // Simulate download
    console.log(`Downloading: ${resource.title}`);
    // In a real app, this would trigger an actual download
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Resource Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our latest whitepapers, guides, and industry insights to stay ahead in artificial intelligence
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {categories.find(c => c.id === resource.category)?.name}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.fileSize}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Last Updated: {resource.lastUpdated}
                  </span>
                  <button
                    onClick={() => handleDownload(resource)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-medium mb-2">No AI resources found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter to find what you're looking for.</p>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl p-8 lg:p-12 text-white">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/images/headers/cta-banner.jpg)' }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10">
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Need Custom AI Resources?
              </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team can create custom reports, whitepapers, and documentation tailored to your specific AI needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Request Custom Resource
            </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resource;
