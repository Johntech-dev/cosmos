import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';

const FAQ = () => {
  const navigate = useNavigate();

  const faqCategories = [
    {
      title: "Core Concepts",
      questions: [
        {
          q: "What is the Evergreen Initiative?",
          a: "The Evergreen Initiative is a global movement dedicated to Intelligence Amplification (IA) as the foundation of a sustainable and regenerative future. It envisions a cybernetic ecology where humans thrive in harmony with nature and technology—through cognitive sovereignty, ecological design, and cultural resilience."
        },
        {
          q: "What is Intelligence Amplification (IA)?",
          a: "IA is a design paradigm that enhances human intelligence—cognitive, emotional, and creative—by working symbiotically with natural neurocognitive rhythms. Unlike AI, IA does not replace people; it empowers them to become more adaptive, self-aware, and aligned with real-time feedback from their environment."
        },
        {
          q: "How is IA different from AI?",
          a: "AI automates. IA collaborates. While AI often centralizes control and efficiency, IA supports the decentralization of agency—amplifying perception, memory, learning, and decision-making in harmony with human values and ecological feedback."
        },
        {
          q: "What are Cybernetics and Cymatics, and why are they central?",
          a: "Cybernetics is the study of adaptive systems and feedback. Cymatics is the study of vibrational resonance. Together, they form the core framework of IA design—ensuring that technology mirrors and co-regulates with human attention, emotion, and ecological rhythms."
        }
      ]
    },
    {
      title: "Time Perception & Cultural Shifts",
      questions: [
        {
          q: "What are the Four Cultural Time Perception Shifts (CTPS)?",
          a: "1st CTPS – Calendar: Organized cyclical time (agriculture).\n2nd CTPS – Metronome: Mechanical time and scientific inquiry.\n3rd CTPS – Atomic Clock: Precision time driving industry and computation.\n4th CTPS – Personal Cognitive Computing: Time as fluid, adaptive, and internalized via neurocognitive rhythms and real-time feedback."
        },
        {
          q: "What is Time Perception Mirroring (TPM)?",
          a: "TPM uses HRV, vagal tone, and real-time biometric signals to adjust how you experience time—supporting peak flow states, deep relaxation, and sustained attention. It is a core function of the echoX system."
        }
      ]
    },
    {
      title: "Technology & Systems",
      questions: [
        {
          q: "How does the echoX system work?",
          a: "The echoX (Evolutionary Cognitive Horizon Orchestrator) is a dynamic model of your neurocognitive activity. It tracks attention, arousal, and learning feedback in real-time—helping you stay in Creative Continuum across your daily stances, projects, and identities."
        },
        {
          q: "What is the Müze Platform?",
          a: "Müze is a Personal Cognitive Computing (PCC) app powered by echoX. It mirrors your time perception, cognitive horizon, and emotional experience—allowing you to consciously design your life rhythm, optimize your learning, and cultivate resilience."
        },
        {
          q: "What is behavioral biometrics, and why are they prioritized?",
          a: "Behavioral biometrics track subtle patterns like motion, rhythm, attention, and emotion. They allow IA tools to adapt fluidly to a user's state—without needing invasive inputs—enabling resonance-based feedback systems that deepen cognition and well-being."
        }
      ]
    },
    {
      title: "Privacy & Ethics",
      questions: [
        {
          q: "What does 'data sovereignty' mean in Evergreen?",
          a: "Data sovereignty is the ethical principle that individuals fully own and control their behavioral biometric data. In Evergreen, IA tools are designed to empower the user—never extract from or manipulate them."
        },
        {
          q: "How does Evergreen protect user privacy?",
          a: "All IA systems used in Evergreen are governed by decentralized data architecture, biometric sovereignty principles, and real-time user consent protocols—ensuring no centralized exploitation of identity or experience."
        }
      ]
    },
    {
      title: "Organizations & Implementation",
      questions: [
        {
          q: "Can organizations partner with Evergreen?",
          a: "Yes. Through Cosmo Lab, organizations can engage Evergreen to transform HR systems, urban design, leadership development, and technology strategy—anchoring in the 4thCTPS model of adaptive performance and IA-driven intelligence systems."
        },
        {
          q: "What is the role of IA in education?",
          a: "IA personalizes learning experiences, augments cognitive skill development, and supports resilience training. Evergreen-aligned education promotes deep literacy across disciplines and fosters ecological and cultural intelligence."
        },
        {
          q: "What does Cosmo Lab do?",
          a: "Cosmo Lab is Evergreen's consulting entity. It helps existing institutions transition into cybernetic ecology alignment through IA adoption, cultural integration, strategic training, and performance resonance modeling."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Frequently Asked Questions - Cosmo Lab"
        description="Find answers to common questions about the Evergreen Initiative, Intelligence Amplification, and the 4th Cultural Time Perception Shift."
        keywords={['FAQ', 'Frequently Asked Questions', 'Intelligence Amplification', '4th CTPS', 'Evergreen Initiative']}
        url="https://cosmolab.cc/faq"
      />
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="FAQ"
        description="Explore common questions about the Evergreen Initiative, Intelligence Amplification, and the 4th Cultural Time Perception Shift."
      />

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8"
            onClick={() => navigate('/insights')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Button>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={100 * categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 text-cosmo-blue">{category.title}</h2>
                <div className="space-y-6">
                  {category.questions.map((item, index) => (
                    <div key={item.q} className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold mb-4">{item.q}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{item.a}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 