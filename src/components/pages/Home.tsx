import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Globe, Users } from 'lucide-react';

const Home: React.FC = () => {

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Strategic guidance on implementing AI solutions for your business",
      href: "/case-studies",
      color: 'bg-blue-500',
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Tailored machine learning solutions and AI applications",
      href: "/case-studies",
      color: 'bg-green-500',
    },
    {
      icon: Globe,
      title: "AI Education & Training",
      description: "Making AI accessible through demos, insights, and knowledge sharing",
      href: "/case-studies",
      color: 'bg-purple-500',
    },
    {
      icon: Users,
      title: "AI Implementation",
      description: "End-to-end AI solution deployment and integration",
      href: "/case-studies",
      color: 'bg-orange-500',
    },
  ];

  const stats = [
    { label: "AI Product Experience", value: "5+ Years" },
    { label: "AI Projects Delivered", value: "50+" },
    { label: "Mentored Students", value: "1000+" },
    { label: "Scientific Research Papers Initiated", value: "5+" },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home-banner.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Exploring the Frontier of AI
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Making artificial intelligence tangible, understandable, and exciting
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/case-studies"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn-outline border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">AI Innovation</h3>
                    <p className="text-sm text-blue-100">Cutting-edge Solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">ML Engineering</h3>
                    <p className="text-sm text-blue-100">Expert Development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">Global Impact</h3>
                    <p className="text-sm text-blue-100">Worldwide Reach</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-sm text-blue-100">Knowledge Sharing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Aethetech Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Aethetech
            </h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At Aethetech, we're driven by a simple yet ambitious mission: to explore the frontier of artificial intelligence and share its potential with the world. We believe that AI is not just a technology—it's a lens through which we can rethink creativity, problem-solving, and the way we interact with data and knowledge.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team is made up of experienced data scientists and machine learning engineers who have spent years building AI systems across academia and industry. We've worked hands-on with cutting-edge machine learning models, from foundational algorithms to advanced generative AI applications, and we understand not just how AI works, but how it can be applied effectively to real-world challenges.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aethetech started as a personal initiative—a YouTube channel where we post live demos, technical insights, and explorations into the latest AI developments. It's a space where curiosity meets practicality: we want to make AI tangible, understandable, and exciting for anyone interested, whether you're a fellow engineer, a researcher, or just someone passionate about the future of technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                But this is only the beginning. Just as we started by sharing knowledge and building a community, our next step is to work with businesses and organizations that want to leverage AI in meaningful ways. From advising on strategy to developing custom AI solutions, Aethetech is poised to help transform ideas into actionable, intelligent systems—bringing the promise of AI from concept to impact.
              </p>
            </div>
          </motion.div>
                </div>
      </section>

      {/* Team Preview Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/headers/meet-our-team.jpg)' }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Meet Our Team
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
              The passionate minds behind Aethetech AI, driving innovation and exploration in artificial intelligence
            </p>
            <Link
              to="/our-team"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Meet the Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions and expertise for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/headers/cta-banner.jpg)' }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Explore AI Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We are passionate, experienced, and curious. We value transparency, experimentation, and collaboration. Every demo, every insight, and every project reflects our belief that AI should be approachable, responsible, and powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 