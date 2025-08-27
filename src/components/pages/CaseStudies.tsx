import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Code, Globe, TrendingUp, Database, Shield } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      icon: Brain,
      title: "AI-Powered Economics Text Classification",
      company: "London Stock Exchange Group",
      industry: "Financial Services",
      challenge: "The Economics Content team faced a highly complex and labor-intensive challenge: categorizing economic terms into nuanced, interlinked subcategories. Manual labeling by domain experts consumed significant time and effort, limiting scalability and slowing downstream workflows.",
      solution: "Independently developed a machine learning–driven classification framework within one month. The solution combined Neural Networks, BERT-based embeddings, proximity search, hierarchical tree modeling, and hierarchical search to capture complex relationships between terms. Additionally, delivered a custom UI to streamline model training and result generation, enabling domain experts to validate and refine outputs efficiently.",
      results: "Successfully deployed into business use, reducing manual effort by 90% (10x decrease in human engagement), accelerating content categorization, and empowering the team to focus on higher-value analytical tasks."
    },
    {
      id: 2,
      icon: Code,
      title: "Data Scraping & Business Intelligence Project",
      company: "London Stock Exchange Group",
      industry: "Financial Services",
      challenge: "Business teams required timely and accurate access to structured data from diverse online sources, but manual collection was slow, error-prone, and unsustainable.",
      solution: "Independently designed and implemented a robust Python-based data scraping and processing pipeline within one week, converting unstructured web data into clean, structured insights for immediate business use.",
      results: "First prize in internal innovation competition, rapid deployment into production, and direct resolution of a key business issue through automation and scalability."
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Aspect-Based Sentiment Analysis System",
      company: "Stanford University",
      industry: "Academia",
      challenge: "Studying market behavior and anticipate short-term movements is notoriously difficult because market sentiment shifts rapidly in response to unexpected events, driving fast price changes. Traditional approaches are limited, as technical analysis cannot effectively incorporate unstructured data such as financial news, which often contains crucial market-moving signals. The challenge was to combine structured market indicators with unstructured textual data to better forecast short-term equity movements.",
      solution: "Developed a hybrid deep learning model from scratch that integrates convolutional and recurrent neural network architectures. The model jointly processed sequences of financial news headlines (published the day prior) alongside a set of technical indicators, capturing both temporal dependencies and sentiment-driven effects. By leveraging NLP techniques and time-series modeling, the system aimed to detect complex patterns between news, sentiment, and intraday price direction.",
      results: "Provided empirical evidence that market forecasts can be improved through the integration of financial news analysis, offering a blueprint for more effective trading strategies."
    }
  ];

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
            AI Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses succeed through innovative AI solutions
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <study.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-sm text-gray-500 mb-4">
                  {study.company}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Results:</h4>
                    <p className="text-sm text-gray-600 font-medium text-green-600">{study.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                Ready to Start Your AI Success Story?
              </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations and drive growth through intelligent automation and insights.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Get Started Today
            </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
