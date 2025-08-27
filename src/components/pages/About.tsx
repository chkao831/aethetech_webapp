import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Brain, Code, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new approaches and technologies.",
      color: 'bg-blue-500',
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "We believe in developing AI that is ethical, transparent, and beneficial to society.",
      color: 'bg-green-500',
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together with clients, partners, and the community to create meaningful AI solutions.",
      color: 'bg-purple-500',
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "We're committed to making AI accessible and understandable to everyone.",
      color: 'bg-red-500',
    },
  ];

  const milestones = [
    { year: "2020", title: "First AI Projects", description: "Started working on AI research & implementation", icon: Brain },
    { year: "2025", title: "Aethetech Founded", description: "Company established", icon: Code },
    { year: "2025.08", title: "YouTube Channel Launch", description: "Began posting live demos and technical insights about AI", icon: Globe },
    { year: "2025.09", title: "Advanced AI Solutions", description: "Developed cutting-edge generative AI applications", icon: TrendingUp },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/about-banner.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto text-white"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                About Aethetech
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-md">
                Exploring the frontier of artificial intelligence
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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

      {/* Brand Name Origin */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/headers/name-origin.jpg)' }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">The Meaning Behind Our Name</h2>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="font-semibold text-blue-600">Aethetech</span> blends inspiration and technology. 
                  <span className="font-semibold text-purple-600">"Ae"</span> evokes AI, innovation, and the Greek concept of 
                  <span className="italic text-gray-600"> aether</span>—the pure, bright medium of ideas and higher thinking—while 
                  <span className="font-semibold text-green-600">"tech"</span> reflects our focus on building practical, real-world AI systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Together, it represents a space where <span className="font-semibold text-blue-600">curiosity meets capability</span>, 
                  and <span className="font-semibold text-purple-600">imagination turns into intelligent solutions</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at Aethetech
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a personal initiative to a global AI company
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <milestone.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-bold text-blue-600">
                      {milestone.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether as a viewer, a collaborator, or a partner. Together, we can explore the potential of AI and create solutions that are not just innovative, but thoughtful, ethical, and impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get in Touch
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

export default About; 