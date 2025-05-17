import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cookie, Settings, Shield, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Cookie Policy"
        subtitle="Legal"
        description="Learn how we use cookies to enhance your experience while respecting your privacy."
        className="bg-gradient-to-r from-green-600 to-blue-800"
      >
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </HeroSection>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Cookie className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help remember your preferences, 
                track usage patterns, and ensure proper site functionality.
              </p>
            </AnimatedSection>
          </div>

          {/* Types of Cookies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-lg text-gray-700">
                    These are necessary for the website to function (e.g., page navigation, access control).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-lg text-gray-700">
                    We use tools like Google Analytics to understand visitor behavior. These cookies collect anonymous data to help us improve site performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-lg text-gray-700">
                    These remember your preferences (e.g., language or consent status).
                  </p>
                </div>
                <p className="text-lg text-gray-700 mt-4">
                  We do not use cookies for targeted advertising.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Managing Cookies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Managing Cookies</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">You can:</p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>Accept or reject non-essential cookies via our cookie banner (if implemented)</li>
                  <li>Change cookie settings in your browser at any time</li>
                  <li>Delete existing cookies manually from your device</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  Disabling cookies may affect some site features.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Respect for Cognitive Privacy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={300}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Respect for Cognitive Privacy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cosmo Lab aligns with the principles of cognitive integrity and autonomy. We avoid manipulative tracking and dark patterns. 
                Any data collected is used ethically and only as needed for performance and understanding — not exploitation.
              </p>
            </AnimatedSection>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatedSection delay={400}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                For any cookie-related questions, please email: connect@cosmolab.cc
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 