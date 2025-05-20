import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import SEO from '@/components/SEO';

const Carrers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO
        title="Careers - Cosmo Lab"
        description="Join Cosmo Lab in building the future of Intelligence Amplification. We're looking for passionate individuals who want to make a real impact."
        keywords={['Careers', 'Jobs', 'Intelligence Amplification', 'Innovation', 'Technology']}
        url="https://cosmolab.cc/careers"
      />
      <div className="container mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmo-blue to-cosmo-blue-dark bg-clip-text text-transparent">
            Join Our Journey
          </h1>
          
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-cosmo-blue/5 rounded-2xl transform -rotate-1"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                Stay tuned for exciting upcoming opportunities. In the meantime, we welcome spontaneous applications from passionate and driven individuals.
              </p>
              <div className="w-24 h-1 bg-cosmo-blue mx-auto mb-8"></div>
              <p className="text-gray-600 mb-8">
                At Cosmo Lab, we're building the future of Intelligence Amplification. If you're passionate about technology, innovation, and making a real impact, we'd love to hear from you.
              </p>
              <Button
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white px-8 py-6 text-lg group"
              >
                <a href="/contact" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Us Your Application
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Innovation",
                description: "Work on cutting-edge technologies that shape the future of human-machine collaboration."
              },
              {
                title: "Growth",
                description: "Join a team that values continuous learning and personal development."
              },
              {
                title: "Impact",
                description: "Make a real difference in how organizations operate and evolve."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-cosmo-blue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carrers; 