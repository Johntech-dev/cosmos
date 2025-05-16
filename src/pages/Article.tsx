import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Clock, Users, Brain, Twitter, Linkedin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

interface Article {
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

interface Articles {
  [key: string]: Article;
}

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const articles: Articles = {
    '4th-ctps-paradigm': {
      title: "The 4th Cultural Time Perception Shift: A New Epoch in Human Potential",
      author: "Cosmo Lab Research Team",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      content: `
        <p class="lead mb-8">
          The 4th Cultural Time Perception Shift represents humanity's move from experiencing time as an external force to mastering 
          it as a fluid, personalized, and co-evolving construct. This shift, driven by advanced cognitive technologies, artificial 
          intelligence, and real-time feedback systems, transforms time from something we measure to something we optimize.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Introduction: A New Epoch of Perception</h3>
        <p class="mb-6">
          Throughout history, humanity has redefined its relationship with time, ushering in sweeping transformations in how we live, 
          create, and connect. From the natural rhythms of the first Cultural Time Perception Shift (CTPS) to the mechanized order 
          of the second and the relativistic understanding of the third, each shift has expanded our horizons. Now, the 4th Cultural 
          Time Perception Shift (4th CTPS) challenges us to go further—transforming time from a linear, external force into a fluid, 
          personal, and co-created dimension.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Reimagining Time: From Fixed to Fluid</h3>
        <p class="mb-6">
          The 4th CTPS represents a fundamental shift in our perception of time. No longer confined to rigid calendars or ticking 
          clocks, time becomes an adaptive, co-evolving construct shaped by three key dynamics:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Intelligence Amplification: Through wearable devices, biofeedback tools, and AI-driven systems</li>
          <li>Cybernetic Ecology: The interplay between humans, machines, and environments</li>
          <li>Temporal Elasticity: Understanding and shaping our perceptions of time</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">From Chronos to Kairos: Redefining How We Live and Create</h3>
        <p class="mb-6">
          Time has often been measured in Chronos—sequential, chronological time. The 4th CTPS invites us to prioritize Kairos—moments 
          of meaning, creativity, and peak performance. Imagine designing your life around these transformational moments, where every 
          task, interaction, and experience aligns with your highest potential.
        </p>
        <ul class="mb-6 space-y-2">
          <li>Peak Performance: Align work and goals with your cognitive and emotional peaks</li>
          <li>Enhanced Environments: Create spaces that enhance relaxation, focus, or collaboration</li>
          <li>Flow Expansion: Enter the "zone" more easily and remain there longer</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">Digital Self-Sovereignty: Reclaiming Time as a Personal Resource</h3>
        <p class="mb-6">
          At the core of the 4th CTPS lies the principle of Digital Self-Sovereignty—the empowerment of individuals to own and shape 
          their temporal experiences. By combining intelligence amplification with personalized insights, we can unlock new dimensions 
          of freedom and agency:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Owning Your Narrative: Data-driven tools allow us to align our schedules with personal values</li>
          <li>The Creative Continuum: Human and machine intelligence collaborate to generate innovative solutions</li>
          <li>Freedom through Agency: True liberation lies in having the agency to design lives filled with purpose</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">Co-Creation: Individual Mastery Meets Collective Progress</h3>
        <p class="mb-6">
          While the 4th CTPS transforms individual lives, its ripple effects extend far beyond the personal. As individuals harness 
          time to enhance their creativity, resilience, and productivity, their contributions fuel a collective intelligence that 
          benefits entire communities.
        </p>
        <ul class="mb-6 space-y-2">
          <li>Shared Progress: Tools and frameworks empower collaboration in solving complex challenges</li>
          <li>Equity in Access: Democratizing intelligence amplification and personalized time systems</li>
          <li>Planetary Harmony: Aligning human progress with ecological sustainability</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">The Promise of the 4th CTPS: Time as an Infinite Canvas</h3>
        <p class="mb-6">
          This shift challenges us to rethink the very fabric of our lives. Time, once seen as a finite resource, becomes an infinite 
          canvas for exploration, innovation, and growth. With this new understanding, the 4th CTPS offers us:
        </p>
        <ul class="mb-6 space-y-2">
          <li>A Deeper Connection to the Present: Embrace the richness of the moment</li>
          <li>An Enhanced Future: Use intelligence amplification to shape goals and aspirations</li>
          <li>A Harmonious Legacy: Balance personal and communal growth with ecological sustainability</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">Conclusion: Your Invitation to Master the Art of Time</h3>
        <p class="mb-6">
          The 4th Cultural Time Perception Shift isn't just a technological evolution—it's a call to awaken. It's an invitation to 
          rediscover the essence of living, to engage deeply with the present, and to build a future aligned with your highest 
          aspirations. Step into the era of the 4th CTPS—a future where time is no longer a limitation but a gateway to infinite 
          possibility.
        </p>
      `
    },
    'intelligence-amplification': {
      title: "Intelligence Amplification: Unlocking Human Potential",
      author: "Cosmo Lab Research Team",
      date: "April 22, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      content: `
        <p class="lead mb-8">
          What happens when technology doesn't replace you—but elevates you? Intelligence Amplification (IA) is reshaping how we 
          think, feel, create, and grow. At Cosmo Lab, IA is a philosophy, not just a tool. Explore how we're building systems 
          that augment your cognitive potential and emotional resilience.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Introduction: Augmentation as a Pathway to Awakening</h3>
        <p class="mb-6">
          The world has been captivated by Artificial Intelligence (AI), but Cosmo Lab takes a different approach: Intelligence 
          Amplification. IA expands awareness, synchronizes human intuition with machine precision, and invites collaboration.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">The Core Distinction: IA vs AI</h3>
        <p class="mb-6">
          AI narrows cognition into predictive patterns; IA expands it. AI substitutes; IA synchronizes. AI takes over; IA invites 
          partnership. Cosmo Lab firmly embraces IA—nurturing, not replacing, human ingenuity.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">How IA Works: The Architecture of Amplification</h3>
        <p class="mb-6">IA bridges multiple layers:</p>
        <ul class="mb-6 space-y-2">
          <li>Perception: Reflecting internal rhythms via HRV and TPM</li>
          <li>Decision-Making: echoX offers resonant insights, not prescriptive answers</li>
          <li>Memory & Learning: echoX stores patterns of attention and emotional salience</li>
          <li>Creative Continuum: Recognizing and extending optimal flow states</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">Real-World Example: IA in Healthcare</h3>
        <p class="mb-6">An IA-enabled clinician dashboard can:</p>
        <ul class="mb-6 space-y-2">
          <li>Detect elevated stress and initiate a micro-reset</li>
          <li>Adjust ambient conditions to support circadian rhythm</li>
          <li>Suggest compassionate phrasing for patient conversations</li>
          <li>Recommend breaks aligned with personal flow rhythms</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">The Supercreative Mind: IA as Catalyst</h3>
        <p class="mb-6">
          Intelligence is the ability to navigate ambiguity, synthesize perspectives, and create meaning. IA nurtures the 
          Supercreative Mind, enabling fluid movement through multiple cognitive stances.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Neurocognitive Resilience: The Unsung Gift of IA</h3>
        <p class="mb-6">
          IA sustains performance without burnout by tracking and expanding cognitive coherence, identifying loops, and suggesting 
          restorative rituals.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Data Sovereignty and the Ethics of Amplification</h3>
        <p class="mb-6">
          The Evergreen Protocol ensures full user control of behavioral biometric data, transparent models, and federated storage. 
          IA without ethics is surveillance; IA with ethics is self-sovereignty.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Conclusion: Becoming More Human, Not Less</h3>
        <p class="mb-6">
          Cosmo Lab builds ecosystems that help humans think more clearly, feel more deeply, and create more beautifully—awakening 
          the magnificence already within.
        </p>
      `
    },
    'human-machine-synergy': {
      title: "Designing for Human-Machine Synergy: Toward a Cybernetic Ecology",
      author: "Cosmo Lab Research Team",
      date: "March 30, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      content: `
        <p class="lead">
          What if your machine didn't just serve you—but understood you? Human-Machine Synergy is the new frontier of collaboration 
          and co-evolution. Learn how Cosmo Lab designs cybernetic ecosystems where humans and machines amplify each other's 
          intelligence in real time.
        </p>

        <h3>Introduction: Beyond Usefulness—Into Resonance</h3>
        <p>
          Machines are evolving from inert tools to cognitive partners. Human-Machine Synergy is co-adaptive—cognitive choreography 
          between humans and intelligent systems.
        </p>

        <h3>Trust Is the Foundation of Synergy</h3>
        <p>
          Trust arises through predictability, transparency, and contextual feedback. Machines must become attuned mirrors, 
          responding to tone, gesture, and tempo.
        </p>

        <h3>The Rise of the Cybernetic Ecology</h3>
        <p>Synergy marks the birth of cybernetic ecologies where systems are:</p>
        <ul>
          <li>Context-aware</li>
          <li>Emotionally intelligible</li>
          <li>Adaptive to user rhythms</li>
        </ul>

        <h3>Case Study: Synergy in Healthcare</h3>
        <p>
          A synergy-enabled ICU system adapts alerts to practitioner stress levels, preventing cognitive overload and maintaining 
          precision.
        </p>

        <h3>Education: Synergy as Learning Companion</h3>
        <p>
          Classrooms leverage real-time emotional bandwidth to adapt content to neuro-emotional fields, shifting from personalization 
          to relational cognition.
        </p>

        <h3>Manufacturing and Design: Collaborative Machines</h3>
        <p>
          Cobots pause, adjust resistance, and suggest optimal handoffs based on human attention, powered by echoX interfaces.
        </p>

        <h3>The echoX Advantage: The Engine of Synergy</h3>
        <p>
          echoX accesses behavioral biometric profiles, detects time perception shifts, and adjusts machine stance to user modality, 
          creating context-aware, supportive interfaces.
        </p>

        <h3>Ethical Implications: Consent, Not Control</h3>
        <p>
          Synergy systems follow Evergreen Protocol consent models, localized data, and transparent logic pathways—machines serving 
          human dignity.
        </p>

        <h3>Conclusion: Synergy Is Not a Feature—It's a Future</h3>
        <p>
          Cosmo Lab designs environments and relationships, not just devices, laying groundwork for a world of co-orchestration 
          between humans and machines.
        </p>
      `
    },
    'ethics-in-ia': {
      title: "Ethics in the Age of Intelligence Amplification: Designing for Sovereignty and Trust",
      author: "Cosmo Lab Research Team",
      date: "March 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      content: `
        <p class="lead">
          As technology becomes more intelligent, our responsibility must become more human. Explore how Cosmo Lab embeds ethics, 
          data sovereignty, and cognitive agency into every layer of IA.
        </p>

        <h3>Introduction: The Moral Architecture of the Future</h3>
        <p>
          Intelligence Amplification systems are intimate and adaptive. The Evergreen Protocol ensures technology aligns with human 
          dignity, not just productivity.
        </p>

        <h3>The Problem with "Tech Ethics" Today</h3>
        <p>
          Typical tech ethics are post-facto and opaque. IA systems learn from emotional and biometric data, raising existential stakes.
        </p>

        <h3>Enter the Evergreen Protocol</h3>
        <p>A living ethical architecture guiding IA design:</p>
        <ul>
          <li>Data sovereignty</li>
          <li>Transparent AI behavior</li>
          <li>Consent as ongoing dialogue</li>
          <li>Bias resilience via user-controlled learning</li>
        </ul>

        <h3>Data Sovereignty: You Are the Signal. You Own the Signal.</h3>
        <p>
          Individual Behavioral Biometric Data (IBBD) is stored locally or federated. Users control, delete, export, or anonymize 
          their cognitive profile at will.
        </p>

        <h3>The Ethics of Adaptation</h3>
        <p>
          When a system predicts emotional response, it must limit action without consent, offering options and respecting chosen stance.
        </p>

        <h3>Inclusivity as an Ethical Imperative</h3>
        <p>
          IA systems are tested across neurodiverse and multicultural populations, offering customizable stances and emic-first design.
        </p>

        <h3>Ecological Ethics: Sustainability as Design Constraint</h3>
        <p>
          Every product is evaluated for energy usage, server demand, and material sustainability.
        </p>

        <h3>Transparent Interfaces and Explainable Feedback</h3>
        <p>
          All adaptive changes are explainable; users can ask "Why did echoX do that?". Transparency earns trust.
        </p>

        <h3>Conclusion: Designing with the Soul in Mind</h3>
        <p>
          Ethics is part of the code. Cosmo Lab builds IA with reverence for autonomy, subjectivity, and the right to choose one's path.
        </p>
      `
    },
    'social-transformation': {
      title: "Social Transformation Systems: From Fragmentation to Wholeness",
      author: "Cosmo Lab Research Team",
      date: "February 28, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      content: `
        <p class="lead">
          Hyper-connectivity has made us faster but not more unified. Discover how Cosmo Lab builds Social Transformation Systems 
          to restore coherence and catalyze collective intelligence.
        </p>

        <h3>Introduction: The Age of Isolation in a Networked World</h3>
        <p>
          Connected yet fractured, humanity needs systems matching cyclical, adaptive intelligence. Enter Social Transformation 
          Systems (STS).
        </p>

        <h3>What Are Social Transformation Systems?</h3>
        <p>STS are co-adaptive infrastructures facilitating:</p>
        <ul>
          <li>Collective coherence</li>
          <li>Real-time feedback loops</li>
          <li>Trust-building through transparency</li>
          <li>Shared purpose via data-driven alignment</li>
        </ul>

        <h3>From Silos to Systems of Resonance</h3>
        <p>
          STS dissolve silos through temporal resonance and stance-based modeling, enhancing trust and reducing miscommunications.
        </p>

        <h3>Cybernetic Superrationality: The Logic of Shared Intelligence</h3>
        <p>
          Decision-making becomes distributed, transparent, and learning-based—intelligence embedded in structure.
        </p>

        <h3>Use Cases Across Domains</h3>
        <ul>
          <li>Education: Feedback loops for cognitive flow; stance-based personalization</li>
          <li>Government: Resonant democracy via adaptive policy dashboards</li>
          <li>Corporations: Living ecologies preventing burnout and amplifying collaboration</li>
        </ul>

        <h3>Mirror Reality Analytics: The Meta-System</h3>
        <p>
          MRA tracks narrative sentiment, collective HRV rhythms, and feedback coherence, suggesting rituals, rhythms, and 
          narratives for alignment.
        </p>

        <h3>Restoring Wholeness: The Real Work of the 4th CTPS</h3>
        <p>
          Humans are rhythms; culture is pattern. The 4th CTPS tools finally let us build systems where complexity thrives 
          without chaos.
        </p>

        <h3>Conclusion: Co-Creation Is the New Governance</h3>
        <p>
          Future systems bring us back to coherence. Cosmo Lab designs frameworks for cultural healing—inviting all to build 
          a world of collective resonance.
        </p>
      `
    },
    'work-life-balance': {
      title: "Work-Life Balance in the Age of Intelligence Amplification",
      author: "Cosmo Lab Research Team",
      date: "June 1, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      content: `
        <p class="lead mb-8">
          In an era of constant connectivity and accelerating change, achieving true work-life balance requires more than just time management—it demands a fundamental reimagining of how we integrate our professional and personal lives. Discover how Intelligence Amplification can help create harmony between productivity and well-being.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Introduction: Beyond the Traditional Balance</h3>
        <p class="mb-6">
          The concept of work-life balance has evolved from a simple division of time to a dynamic integration of our professional and personal selves. In the age of Intelligence Amplification, we have the tools to create a more fluid, responsive approach to living a fulfilling life.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">The New Balance: Integration Over Separation</h3>
        <p class="mb-6">
          Traditional work-life balance often implies a strict separation between work and personal life. However, Intelligence Amplification enables us to create a more nuanced approach:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Flow State Optimization: Using IA to identify and maximize peak performance periods</li>
          <li>Adaptive Boundaries: Creating flexible work structures that respond to personal needs</li>
          <li>Energy Management: Leveraging technology to maintain sustainable productivity</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">The Role of Technology in Modern Balance</h3>
        <p class="mb-6">
          Intelligence Amplification tools can help us achieve better balance by:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Monitoring cognitive load and suggesting optimal break times</li>
          <li>Adapting work environments to support focus and creativity</li>
          <li>Facilitating seamless transitions between work and personal activities</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">Creating Your Personal Balance Framework</h3>
        <p class="mb-6">
          A personalized approach to work-life balance involves:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Understanding your unique energy patterns</li>
          <li>Setting boundaries that align with your values</li>
          <li>Using technology to support, not disrupt, your natural rhythms</li>
        </ul>

        <h3 class="font-bold text-2xl mt-8 mb-4">The Future of Work-Life Integration</h3>
        <p class="mb-6">
          As we move forward, the integration of work and life will become increasingly fluid, supported by technologies that understand and adapt to our needs. The key is to use these tools mindfully, ensuring they enhance rather than complicate our lives.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Conclusion: Balance as a Dynamic Journey</h3>
        <p class="mb-6">
          True work-life balance is not a destination but a continuous journey of adjustment and growth. With Intelligence Amplification, we have the tools to make this journey more intentional and fulfilling, creating lives that are both productive and meaningful.
        </p>
      `
    }
  };

  const article = slug ? articles[slug] : null;

  const handleShare = (platform: 'twitter' | 'reddit' | 'linkedin') => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || '');
    const text = encodeURIComponent('Check out this article from Cosmo Lab: ');

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}${title}&url=${url}`;
        break;
      case 'reddit':
        shareUrl = `https://www.reddit.com/submit?url=${url}&title=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    // Open share dialog in a new window
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/insights')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title={article.title}
        subtitle="Article"
        description=""
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
        </div>
      </HeroSection>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-cosmo-blue" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Article Details</h2>
                  <div className="flex items-center mt-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
    
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{article.author}</p>
                      <p className="text-sm text-gray-500">{article.date} • {article.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection delay={100}>
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-cosmo-blue hover:prose-a:text-cosmo-blue-dark prose-ul:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </AnimatedSection>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Share This Article</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Found this article insightful? Share it with your network to spread the knowledge about Intelligence Amplification and the 4th Cultural Time Perception Shift.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => handleShare('twitter')}
                  className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Share on Twitter
                </Button>
                <Button 
                  onClick={() => handleShare('reddit')}
                  className="bg-[#FF4500] hover:bg-[#E03D00] text-white"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                  Share on Reddit
                </Button>
                <Button 
                  onClick={() => handleShare('linkedin')}
                  className="bg-[#0077B5] hover:bg-[#006699] text-white"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Share on LinkedIn
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article; 