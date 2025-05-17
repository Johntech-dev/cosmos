import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Users, Globe, Cookie, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Privacy Policy"
        subtitle="Legal"
        description="Your privacy matters to us. Learn how we protect and handle your data."
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
                  <Shield className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cosmolab is owned and operated by Fourth Gate LLE, a company registered in Fujairah Creative City Free Zone, UAE.
                For privacy inquiries, email us at: connect@cosmolab.cc
              </p>
            </AnimatedSection>
          </div>

          {/* Data Collection */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What We Collect</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">We may collect:</p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>Contact info (name, email)</li>
                  <li>Technical info (IP address, browser type, device info)</li>
                  <li>Usage data (pages visited, time spent)</li>
                  <li>Cookies & analytics data</li>
                  <li>Messages you send us (e.g., contact forms)</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  We do not knowingly collect personal data from children under 13.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Data Usage */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How We Use It</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">We use your data to:</p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>Respond to your inquiries</li>
                  <li>Improve our website</li>
                  <li>Analyze usage trends</li>
                  <li>Fulfill legal obligations</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  Legal basis: Consent, contractual necessity, and legitimate interest.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* User Rights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={300}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>Access, correct, or delete your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Withdraw consent at any time</li>
                  <li>Request data portability</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  To exercise any of these rights, email: connect@cosmolab.cc
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={400}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Cookie className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cookies</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cosmolab uses cookies to improve your experience and track website usage via tools like Google Analytics.
                You can manage or disable cookies through your browser settings.
              </p>
            </AnimatedSection>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={500}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security & Retention</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We protect your data using technical and organizational measures.
                We retain data only as long as necessary for its intended purpose.
              </p>
            </AnimatedSection>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={600}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We may share your data with trusted third-party processors (e.g., hosting, analytics), who are bound by confidentiality and data protection obligations.
                We do not sell personal data.
              </p>
            </AnimatedSection>
          </div>

          {/* UAE Compliance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={700}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">UAE Compliance Notice</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We comply with the Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL).
              </p>
            </AnimatedSection>
          </div>

          {/* Copyright Notice */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={800}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Copyright and Intellectual Property Notice</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, illustrations, videos, designs, and other material, is the property of Fourth Gate LLE and is protected under Federal Law No. 38 of 2021 (UAE Copyright Law) and international treaties.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In accordance with the Berne Convention for the Protection of Literary and Artistic Works, to which the UAE and over 180 countries are signatories, copyright protection is automatic upon creation and does not require registration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Unauthorized use, reproduction, or distribution of any content from this site — including copying, scraping, or reposting — without explicit written permission is strictly prohibited and may result in legal action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For permissions or copyright inquiries, please contact: connect@cosmolab.cc
              </p>
            </AnimatedSection>
          </div>

          {/* Updates */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatedSection delay={900}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We may revise this Privacy Policy. Updates will be posted here with a revised "Effective Date."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                By using our website, you consent to this policy.
                For any questions or data requests, please contact us at: connect@cosmolab.cc
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 