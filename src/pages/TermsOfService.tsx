import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Scale, Shield, FileText, Link, Brain, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Terms of Service"
        subtitle="Legal"
        description="Please read these terms carefully before using our website."
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
                  <Scale className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Introduction & Acceptance</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Cosmo Lab. By accessing or using our website, you agree to these Terms of Use, which form a legally binding agreement between you and Fourth Gate LLE. If you do not agree to these terms, you must not use our website.
              </p>
            </AnimatedSection>
          </div>

          {/* Modifications */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modifications to These Terms</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We reserve the right to update or modify these Terms at any time without prior notice. Changes become effective upon posting. Continued use of the site constitutes your acceptance of any revised terms.
              </p>
            </AnimatedSection>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Eligibility & User Obligations</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">By using this website, you confirm that:</p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>You are at least 13 years old, or meet your country's legal digital consent age.</li>
                  <li>All information you provide is accurate and truthful.</li>
                  <li>You agree not to misuse the site, including engaging in unlawful behavior, scraping, hacking, or impersonating others.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={300}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  All content on this website, including but not limited to text, graphics, logos, illustrations, videos, designs, and other material, is the property of Fourth Gate LLE or its content providers and is protected by intellectual property laws, including Federal Law No. 38 of 2021 (UAE Copyright Law) and international treaties.
                </p>
                <p className="text-lg text-gray-700">
                  In accordance with the Berne Convention for the Protection of Literary and Artistic Works, to which the UAE and over 180 countries are signatories, copyright protection is automatic upon creation and does not require registration.
                </p>
                <p className="text-lg text-gray-700">You may not:</p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>Reproduce, distribute, or display site content for commercial purposes without permission.</li>
                  <li>Use Cosmo Lab's trademarks, copyrights or branding without prior written consent.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={400}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Link className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Third-Party Links & Tools</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website may include links to or integrations with third-party services (e.g., YouTube, Google Analytics). We are not responsible for third-party content, policies, or practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                You access these services at your own risk, and we recommend reviewing their individual terms and privacy policies.
              </p>
            </AnimatedSection>
          </div>

          {/* Cognitive Autonomy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={500}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cognitive Autonomy & Ethical Design</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  At Cosmolab, we value your mental clarity and cognitive rights. We pledge to:
                </p>
                <ul className="list-disc ml-8 text-gray-700 space-y-2">
                  <li>Avoid manipulative design patterns ("dark patterns")</li>
                  <li>Use clear, non-coercive interfaces</li>
                  <li>Respect your cognitive agency and digital well-being</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4">
                  We align with principles of ethical and neuroethical design, prioritizing trust, respect, and user sovereignty.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={600}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law & Jurisdiction</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                These Terms are governed by the laws of the United Arab Emirates. Any disputes arising shall be settled under these laws through appropriate legal channels in the UAE.
              </p>
            </AnimatedSection>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatedSection delay={700}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you have questions about these Terms, or need to reach us for legal, technical, or data concerns:
                connect@cosmolab.cc
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 