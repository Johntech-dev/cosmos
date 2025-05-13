import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, BookOpen, Users, Brain, Clock } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const EvergreenProtocol = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;
    const content = contentRef.current.cloneNode(true) as HTMLElement;
    const buttons = content.querySelectorAll('button');
    buttons.forEach(button => button.remove());
    const container = document.createElement('div');
    container.className = 'pdf-container';
    container.style.cssText = `
      position: absolute;
      left: -9999px;
      width: 210mm;
      padding: 20mm;
      background-color: #ffffff;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    container.appendChild(content);
    document.body.appendChild(container);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const sections = container.querySelectorAll('.bg-white');
      let currentPage = 1;
      const pageHeight = 297;
      const pageWidth = 210;
      const margin = 20;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: (pageWidth - 2 * margin) * 3.78,
          windowHeight: (pageHeight - 2 * margin) * 3.78,
        });
        const imgWidth = pageWidth - 2 * margin;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        if (i > 0) {
          pdf.addPage();
          currentPage++;
        }
        pdf.addImage(
          canvas.toDataURL('image/jpeg', 1.0),
          'JPEG',
          margin,
          margin,
          imgWidth,
          imgHeight
        );
        pdf.setFontSize(10);
        pdf.setTextColor(128);
        pdf.text(
          `Page ${currentPage}`,
          pageWidth - margin - 20,
          pageHeight - margin
        );
      }
      pdf.save('evergreen-protocol.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      document.body.removeChild(container);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="The Evergreen Protocol"
        subtitle="Corporate Overview | Educational Edition"
        description="A Vision for the Sovereignty of Consciousness in the Age of Cybernetic Ecology"
        className="bg-gradient-to-r from-green-600 to-blue-800"
      >
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate('/insights')}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-white text-green-700 hover:bg-white/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </HeroSection>

      <div ref={contentRef} className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Executive Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Executive Summary</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Evergreen Protocol is the foundational architecture for a new era of intelligence amplification, cognitive sovereignty, and ethical interaction within the cybernetic ecology of the 21st century. Designed and governed by the Evergreen Foundation and its affiliates, including Akea University and Cosmo Lab, the protocol enshrines the human right to cognitive liberty and establishes best practices for the ethical handling of behavioral biometric data.<br /><br />
                Through the integration of Personal Cognitive Computing (PCC), Mirror Reality Analytics, and the echoX system, the Evergreen Protocol defines a scalable framework for Augmented Lifestyle Design, resilient neurocognitive development, and the co-evolution of human and machine intelligence.
              </p>
            </AnimatedSection>
          </div>

          {/* Mission & Philosophy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mission & Philosophy</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Mission:</strong> To protect and promote cognitive sovereignty while advancing the science and application of Intelligence Amplification (IA).<br />
                <strong>Philosophy:</strong> Grounded in the Akea Worldview and the 4th Cultural Time Perception Shift (4thCTPS), the Evergreen Protocol rejects the automation of consciousness. Instead, it champions co-adaptive, symbiotic systems designed to amplify the individuality, creativity, and resilience of every person.
              </p>
              <div className="mb-2">
                <span className="font-semibold text-gray-900">Key Tenets:</span>
                <ul className="list-disc ml-8 text-gray-700 mt-2">
                  <li>IA &gt; AI</li>
                  <li>Subjective &gt; Predictive</li>
                  <li>Emic-first System Design</li>
                  <li>DSSA (Digital Self-Sovereign Agency)</li>
                  <li>Mirror Reality Analytics</li>
                  <li>Temporal Perception Mirroring (TPM)</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Core Components */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Core Components of the Evergreen Protocol</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">A. echoX™: Evolutionary Cognitive Horizon Orchestrator</h3>
                  <p className="text-gray-700">A closed-loop neuroadaptive system that models user cognition across four modalities (Intuitive, Analytical, Abductive, and Flow) using physiological and behavioral inputs (HRV, EEG, eye-tracking, and more).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">B. TPM: Time Perception Mirroring</h3>
                  <p className="text-gray-700">This module maps the aperture of a user's attention to their internal neurocognitive resilience, allowing systems to "mirror" real-time perception and support optimal cognitive flow and recovery.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">C. EV.Baseline</h3>
                  <p className="text-gray-700">A philosophical and mathematical framework leveraging category theory, linguistic modeling, and attention-arousal dynamics to ensure ethical alignment between artificial systems and human experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">D. Mirror Reality Analytics</h3>
                  <p className="text-gray-700">A bio-contextual feedback mechanism that integrates environmental, social, and narrative context to reflect, reinforce, and refine user identity in real time—fostering adaptive individuation.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Ethical Commitments */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={300}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Ethical Commitments</h2>
              </div>
              <ul className="list-disc ml-8 text-gray-700 space-y-2">
                <li><strong>Behavioral Biometric Data & Privacy:</strong> The Evergreen Protocol treats individual behavioral biometric data (IBBD) as sovereign property. All signal acquisition and processing follows a DSSA-first approach with opt-in transparency and local-first computation wherever feasible.</li>
                <li><strong>Quiet by Design:</strong> Our systems are engineered to "turn up the quiet," reducing cognitive friction and minimizing over-sensory input, preserving contemplative space while enhancing awareness.</li>
                <li><strong>Interoperability with Integrity:</strong> Evergreen technologies integrate with diverse systems only under strict ethical guidelines that prioritize contextual fidelity, consent, and non-coercive experience design.</li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Applications & Ecosystems */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={400}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications & Ecosystems</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2">
                <li><strong>Akea University:</strong> A live academic prototype of Evergreen-based learning, where students cultivate their Strata Logic (hierarchy of neurocognitive mastery) via personalized echoX systems. Access to the Pantheon (an elite hospitality and learning network) is available to "Virtuosos"—those fluent in 7 or more cognitive domains.</li>
                <li><strong>Cosmo Lab:</strong> A consulting architecture that helps existing institutions and enterprises integrate the Evergreen Protocol and 4thCTPS principles, with a special emphasis on cybernetic HR, neuro-organizational design, and ethical feedback loop orchestration.</li>
                <li><strong>Müze Platform:</strong> The interactive ecosystem supporting real-time augmented lifestyle design, featuring Nexus Composer Modes (Declaration, Haiku, Journaling) and "Stance" switching to facilitate dynamic individuation across life domains.</li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Legal & Civic Dimensions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={500}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal & Civic Dimensions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Evergreen Foundation envisions an open licensing framework under the Evergreen Protocol for distributed, rights-respecting technological adoption—including applications in health, transportation, smart cities, and education.
              </p>
              <ul className="list-disc ml-8 text-gray-700 space-y-2">
                <li>Self-sovereign identity frameworks</li>
                <li>Behavioral biometric rights</li>
                <li>Mirror analytics governance</li>
                <li>Cybernetic co-authorship over algorithmic determinism</li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Concluding Vision */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatedSection delay={600}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Concluding Vision: Toward the Evergreen Age</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Evergreen Protocol marks humanity's pivot into the Evergreen Age—a phase of technological and spiritual maturity where cognition is protected, cultivated, and celebrated as sacred.<br /><br />
                In this age:<br />
                <ul className="list-disc ml-8 text-gray-700 mt-2">
                  <li>Every interaction is a mirror of your becoming.</li>
                  <li>Every system is an ally of your individuation.</li>
                  <li>Every design is a step toward the flourishing of a conscious species.</li>
                </ul>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvergreenProtocol; 