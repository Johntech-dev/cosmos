import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, BookOpen, Users, Brain, Clock } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const WhitePaper = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;

    // Create a clone of the content to modify for PDF
    const content = contentRef.current.cloneNode(true) as HTMLElement;
    
    // Remove the back button and download button from the PDF
    const buttons = content.querySelectorAll('button');
    buttons.forEach(button => button.remove());

    // Create a temporary container for the PDF content
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

    // Add the content to the container
    container.appendChild(content);
    document.body.appendChild(container);

    try {
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Get all sections
      const sections = container.querySelectorAll('.bg-white');
      let currentPage = 1;
      const pageHeight = 297; // A4 height in mm
      const pageWidth = 210; // A4 width in mm
      const margin = 20; // Margin in mm

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        // Convert section to canvas
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: (pageWidth - 2 * margin) * 3.78, // Convert mm to pixels
          windowHeight: (pageHeight - 2 * margin) * 3.78,
        });

        // Calculate dimensions to fit the content
        const imgWidth = pageWidth - 2 * margin;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add new page if not the first section
        if (i > 0) {
          pdf.addPage();
          currentPage++;
        }

        // Add the section to PDF
        pdf.addImage(
          canvas.toDataURL('image/jpeg', 1.0),
          'JPEG',
          margin,
          margin,
          imgWidth,
          imgHeight
        );

        // Add page number
        pdf.setFontSize(10);
        pdf.setTextColor(128);
        pdf.text(
          `Page ${currentPage}`,
          pageWidth - margin - 20,
          pageHeight - margin
        );
      }

      // Save the PDF
      pdf.save('cosmo-lab-white-paper.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Clean up
      document.body.removeChild(container);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Cosmo Lab White Paper"
        subtitle="White Paper"
        description="Guiding Organizations into the Age of Intelligence Amplification and the 4th Cultural Time Perception Shift"
        className="bg-gradient-to-r from-blue-600 to-blue-800"
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
            className="bg-white text-blue-600 hover:bg-white/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </HeroSection>

      <div ref={contentRef} className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Executive Summary</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cosmo Lab is a next-generation consultancy designed to assist institutions, corporations, and communities in adapting to the emergent cybernetic epoch of human development. Rooted in the Akea Worldview and aligned with the 4th Cultural Time Perception Shift (4thCTPS), Cosmo Lab facilitates transformation by integrating Intelligence Amplification (IA), Personal Cognitive Computing (PCC), and Mirror Reality Analytics into the structure and function of human systems. The lab's work is not merely technical—it is civilizational. Cosmo Lab exists to realign institutional life with the evolutionary imperative of individual awakening, organizational resilience, and ecological coherence.
              </p>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mission Statement</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To catalyze systemic transformation by embedding the principles of the 4th Cultural Time Perception Shift into real-world organizations—amplifying intelligence, harmonizing human-system dynamics, and fostering cultures of adaptive resonance, meaning, and sovereign individuation.
              </p>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Foundational Premises</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-cosmo-blue pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Human Intelligence is Co-Constructed and Systemic</h3>
                  <p className="text-gray-700">
                    Institutions today are artifacts of 20th-century industrial cognition. Cosmo Lab brings 21st-century cognitive architectures based on emic-first system design, digital self-sovereignty, and lived neurocognitive feedback.
                  </p>
                </div>

                <div className="border-l-4 border-cosmo-blue pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Time is Not a Constant—It is a Cognitive Variable</h3>
                  <p className="text-gray-700">
                    Organizational tempo, learning, adaptation, and health are functions of time perception mirroring. The 4thCTPS provides a framework for cultivating new cognitive time geometries that foster long-term flourishing.
                  </p>
                </div>

                <div className="border-l-4 border-cosmo-blue pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Self is the First Signal</h3>
                  <p className="text-gray-700">
                    Individual agency and biometric sovereignty are not optional add-ons—they are the foundation of resilient cybernetic ecosystems. Cosmo Lab activates the latent intelligence in every individual within the system to achieve emergent synergy.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={300}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Core Capabilities</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybernetic Organizational Diagnosis</h3>
                  <p className="text-gray-700">
                    Using tools from systems theory, IA, and real-time biometric analytics, Cosmo Lab assesses and maps the existing state of organizational cognition, decision entropy, feedback latency, and individual disengagement.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mirror Reality Analytics (MRA) Deployment</h3>
                  <p className="text-gray-700">
                    Cosmo Lab introduces Mirror Reality Analytics to monitor and reflect the internal "neuro-cognitive weather" of the organization—tracking mood, meaning, stress cycles, creative rhythms, and collective flow states.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Strata-Aligned Transformation Models</h3>
                  <p className="text-gray-700">
                    Leveraging the "Strata Logic" from the echoX system, Cosmo Lab segments employee development into meaningful cognitive paths—from Supercreative activation to Virtuoso stabilization—structuring upskilling and empowerment along emic-identified intelligences.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Self-Sovereign Agency (DSSA) Implementation</h3>
                  <p className="text-gray-700">
                    We work with IT, legal, and HR divisions to implement data frameworks that protect individual behavioral biometric data (IBBD), ensuring ethical, transparent AI and analytics integration that prioritizes human flourishing.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={400}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Methodology</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase I: Perceptual Grounding Audit</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Map organizational culture through the lens of cybernetic ecology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Identify feedback loops and bottlenecks in communication, cognition, and adaptability</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase II: EchoX Emulation Environment</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Deploy light-touch echoX simulations to sample individual and group neurocognitive dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Introduce Müze-inspired tools for narrative journaling, stance awareness, and TPM metrics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase III: Integration of IA Protocols</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Build emic-first dashboards for leaders and teams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Implement cognitive resonance training, creative continuum modules, and domain literacy workshops</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase IV: The Pantheon Layer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Develop internal "Pantheon" networks of Virtuoso-caliber contributors and mentors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmo-blue mr-2">•</span>
                      <span className="text-gray-700">Establish an evergreen learning infrastructure across departments through the PCC model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={500}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Deliverables</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Custom-built PCC/echoX frameworks tailored to client culture and mission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Monthly Mirror Reality Analytics reports and Strata Logic performance maps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Facilitation of Creative Continuum rituals and adaptive cognition workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Establishment of Cosmo Circles—ongoing, internally-run evolutionary intelligence hubs</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={600}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Metrics</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Increase in cross-functional fluency and metacognitive agility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Reduction in decision fatigue and stress-related productivity loss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Rise in employee resonance (measured via HRV & narrative sentiment analytics)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cosmo-blue mr-2">•</span>
                  <span className="text-gray-700">Enhanced time perception coherence across departments</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={700}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cosmo Lab will serve as the consultancy arm of the Evergreen Initiative—supporting a decentralized, neurocognitively optimized civilization. Our work is not just about fixing problems. It's about midwifing new patterns of collective becoming. Our clients do not just change—they evolve.
              </p>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatedSection delay={800}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cosmo Lab is more than a consultancy—it is a consciousness infrastructure partner. In a world fragmented by information overload and alienation, we offer the architecture for remembering: who we are, why we matter, and how intelligence, once amplified, can restore meaning and coherence to human life and culture.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper; 