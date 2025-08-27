import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Globe, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Zap,
  Mail
} from 'lucide-react';

const OurTeam: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/headers/our-team.jpg)' }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              The passionate minds behind Aethetech AI, driving innovation and exploration in artificial intelligence
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Carolyn Kao - Left Panel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Profile Header */}
                <div className="mb-12">
                  <div className="relative inline-block mb-8">
                    <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-blue-200 shadow-2xl">
                      <img 
                        src="/images/team/carolyn-kao.jpg" 
                        alt="Carolyn Kao - Co-founder, CEO"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"><Users className="w-24 h-24 text-white" /></div>';
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Carolyn Kao
                  </h2>
                  <p className="text-2xl text-blue-600 font-semibold mb-6">
                    Co-founder & CEO
                  </p>
                  <div className="flex flex-col space-y-3 text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Globe className="w-5 h-5" />
                      <span>London Stock Exchange Group & TSMC</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>Stanford University</span>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mb-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue-600 mr-3" />
                    About Carolyn
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Carolyn is the visionary co-founder and CEO of Aethetech AI, where she combines deep technical 
                      expertise with a passion for making AI accessible. She has been instrumental 
                      in taking machine learning solutions from research concepts into production at scale.
                    </p>
                    <p>
                      Currently, she serves as a highly valued Data Scientist at the London Stock Exchange Group, 
                      working on one of the company's largest strategic AI initiatives in 2025, focused on generative AI. 
                      Previously, Carolyn was a Data Scientist at TSMC, where she developed advanced ML methods for 
                      semiconductor R&D and achieved significant breakthroughs in recipe tuning and optimization.
                    </p>
                    <p>
                      She holds an M.S. in Computational and Mathematical Engineering from Stanford University and a 
                      B.S. in Applied Mathematics and Management Science from UC San Diego, graduating magna cum laude. 
                      Beyond her professional achievements, Carolyn has guided over 1,000 students across 5 university courses, 
                      inspiring the next generation of AI/ML professionals, engineers and data scientists.
                    </p>
                  </div>
                </motion.div>


              </motion.div>

              {/* Ivan Lin - Right Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Profile Header */}
                <div className="mb-12">
                  <div className="relative inline-block mb-8">
                    <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-green-200 shadow-2xl">
                      <img 
                        src="/images/team/ivan-lin.jpg" 
                        alt="Ivan Lin - Co-founder, CTO"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center"><Code className="w-24 h-24 text-white" /></div>';
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Ivan Lin
                  </h2>
                  <p className="text-2xl text-green-600 font-semibold mb-6">
                    Co-founder & CTO
                  </p>
                  <div className="flex flex-col space-y-3 text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Brain className="w-5 h-5" />
                      <span>Meta & TSMC</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>National Tsing Hua University</span>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 mb-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                    <Code className="w-8 h-8 text-green-600 mr-3" />
                    About Ivan
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Ivan is the technical co-founder and CTO of Aethetech AI, responsible for the company's 
                      cutting-edge AI architecture and product direction. With extensive experience as a Machine 
                      Learning Engineer at Meta, he played a key role in applying large-scale ML to one of the 
                      most advanced and high-impact systems in the world: digital advertising.
                    </p>
                    <p>
                      This gave him a unique perspective on deploying ML at true internet scale, balancing accuracy, 
                      efficiency, and fairness in systems that directly shape global markets. Earlier in his career, 
                      Ivan served as an ML Engineer at TSMC, contributing to the forefront of semiconductor 
                      manufacturing R&D by applying machine learning to highly complex and data-intensive IT challenges.
                    </p>
                    <p>
                      His experience across both consumer-facing and deep-tech industries enables him to bridge 
                      foundational AI research with real-world deployment, ensuring that Aethetech AI's solutions 
                      are both cutting-edge and practically applicable.
                    </p>
                  </div>
                </motion.div>


              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Shared Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Aethetech AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to achieve extraordinary results",
                color: "from-green-500 to-blue-600"
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Making AI knowledge accessible to everyone",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Zap,
                title: "Excellence",
                description: "Striving for the highest quality in everything we do",
                color: "from-orange-500 to-red-600"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
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
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's explore how our combined expertise in AI strategy and engineering can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
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

export default OurTeam;
