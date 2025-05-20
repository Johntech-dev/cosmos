import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Clock, Users, Brain, Twitter, Linkedin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';

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
      image: "/AdobeStock_297815351.jpeg",
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
      image: "/human-tinking.png",
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
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
      image: "/etic-by-design.jpeg",
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
      image: "/social-transformation.png",
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
      image: "/work-balance.jpeg",
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
    },
    'work-life-resonance': {
      title: "From Work-Life Balance to Work-Life Resonance",
      author: "Cosmo Lab Research Team",
      date: "June 1, 2023",
      readTime: "7 min read",
      image: "/work-balance.jpeg",
      content: `
        <p class="lead mb-8">
          The familiar quest for "work-life balance" imagines two forces forever fighting for equal time. In practice that scale tips with every urgent email or family surprise. Cosmo Lab reframes the problem around work-life resonance—a state in which what you are doing and how you are wired move in the same rhythm.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Quick-Read Overview</h3>
        <p class="mb-6">
          Three elements make the model work:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Personal Cognitive Computing (PCC) – a user-owned software layer that observes, reflects, and adapts to your current mental bandwidth.</li>
          <li>EchoX – the Evolutionary Cognitive Horizon Orchestrator inside PCC; it tracks how wide (or narrow) your attention can safely stretch at this moment.</li>
          <li>Time Perception Mirroring (TPM) – a method that senses subtle markers of your internal clock—heart-rate variability, breathing cadence, micro-pauses—and shows you when each type of task is most likely to feel effortless rather than forced.</li>
        </ul>
        <p class="mb-6">
          Together they replace static schedules with living cues. Instead of telling you how long to work, the system helps you decide when to create, collaborate, reflect, or rest—so effort and ease alternate like notes in a well-tuned melody.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Deep-Dive Read</h3>
        <h4 class="font-bold text-xl mt-6 mb-4">Why Balance Became a Losing Game</h4>
        <p class="mb-6">
          Balance presumes that more control over the calendar equals more freedom. Yet smartphones and global workflows have erased clear boundaries, turning control into constant micro-management. Resonance trades control for alignment: match tasks to the body-mind's natural waves and the day starts to carry you instead of the other way around.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">The Architecture of Personal Cognitive Computing</h4>
        <p class="mb-4"><strong>Sensing (TPM)</strong></p>
        <p class="mb-6">
          Lightweight, consent-based signals—heart-rate variability, breath rhythm, keystroke cadence—reveal your internal tempo.
        </p>

        <p class="mb-4"><strong>Modelling (EchoX)</strong></p>
        <p class="mb-6">
          EchoX converts those signals into a Cognitive Horizon: a real-time picture of how much focus, creativity, or sociability you can deploy without strain.
        </p>

        <p class="mb-4"><strong>Reflecting (PCC Interface)</strong></p>
        <p class="mb-6">
          The PCC dashboard surfaces that horizon in plain language—"wide," "steady," or "tight"—and suggests matching actions: protect deep work, switch modes, or insert a micro-reset.
        </p>
        <p class="mb-6">
          Nothing is prescribed; you remain the author. The system simply keeps a mirror in view.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">Three Fundamental States</h4>
        <div class="mb-6">
          <p class="mb-4"><strong>State: Intensity</strong></p>
          <ul class="mb-4 space-y-2">
            <li>Horizon Shape: very narrow; energy spiking</li>
            <li>Optimal Move: 60-second reset, slow breathing, short walk</li>
          </ul>

          <p class="mb-4"><strong>State: Dissonance</strong></p>
          <ul class="mb-4 space-y-2">
            <li>Horizon Shape: moderate width; task feels off-beat</li>
            <li>Optimal Move: swap to activity that fits current rhythm or tweak environment</li>
          </ul>

          <p class="mb-4"><strong>State: Coherence</strong></p>
          <ul class="mb-4 space-y-2">
            <li>Horizon Shape: wide and stable</li>
            <li>Optimal Move: defend the window for deep creation or vital dialogue</li>
          </ul>
        </div>
        <p class="mb-6 italic">These states are not diagnoses; they are navigational aids.</p>

        <h4 class="font-bold text-xl mt-6 mb-4">Designing a Resonant Day with PCC</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Pulse Mapping</strong> – Run TPM passively for a week to identify natural peaks and troughs.</li>
          <li><strong>Resonance Windows</strong> – Drag recurring tasks onto the map where they align with the discovered peaks.</li>
          <li><strong>Micro-Renewal Cues</strong> – EchoX offers minute-long resets just before predicted dips.</li>
          <li><strong>Evening Reflection</strong> – A one-question check-in ("Did work feel light, average, or heavy?") fine-tunes tomorrow's forecast.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Scaling to Teams</h4>
        <p class="mb-6">
          When several colleagues share only the shape of their horizons (never raw biometrics), PCC finds overlapping resonance windows for meetings and shields mismatched ones for solo focus. Early pilots show fewer after-hours messages and richer collaboration sessions.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">Ethical Foundations</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>User sovereignty</strong> – Raw data never leaves personal devices unless explicitly shared.</li>
          <li><strong>Transparent logic</strong> – Every suggestion carries a "why" link that explains the underlying pattern.</li>
          <li><strong>Revocability</strong> – Mirroring can be paused or deleted without penalty.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">First Steps</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Individual:</strong> Notice one moment today when a task felt naturally easy. What time was it? What was your body doing? That's resonance.</li>
          <li><strong>Organisation:</strong> Run a thirty-day micro-pilot with volunteers, gather both stories and metrics, then decide whether to expand.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Conclusion</h4>
        <p class="mb-6">
          Balance tries to hold competing weights steady; resonance lets them swing in harmony. By combining Personal Cognitive Computing, EchoX, and Time Perception Mirroring, Cosmo Lab offers a practical path from scheduling fatigue to rhythmic flow. If the idea resonates, we're ready to help you prototype a tuned-in workday.
        </p>
      `
    },
    'shared-awareness': {
      title: "From Enforcement to Shared Awareness",
      author: "Cosmo Lab Research Team",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      content: `
        <p class="lead mb-8">
          Traditional public-safety systems rely on prediction: analyse past incidents, flood "hot spots" with patrols, and hope deterrence follows. The approach often magnifies mistrust because it focuses on where risk might occur but ignores how people actually feel in the moment.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Quick-Read Overview</h3>
        <p class="mb-6">
          Cosmo Lab proposes a reflective alternative. We treat safety as a collective rhythm—a pattern of emotions, perceptions, and interactions that can drift into tension or settle into calm. Three building blocks enable the shift:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Personal Cognitive Computing (PCC) – lightweight, user-owned software that reflects each participant's current bandwidth for composure and dialogue.</li>
          <li>EchoX – the Evolutionary Cognitive Horizon Orchestrator inside PCC; it models how open or compressed the shared attention field is at any moment.</li>
          <li>Time Perception Mirroring (TPM) – a sensing method that detects subtle timing cues (voice cadence, motion pace, heart-rate variability) and shows when an encounter is ready for calm negotiation or needs a brief reset.</li>
        </ul>
        <p class="mb-6">
          Instead of forecasting crime, the system mirrors the collective state in real time. Officers, residents, and mediators see the same reflection, allowing everyone to adjust behaviour before tension hardens into conflict.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Deep-Dive Read</h3>
        <h4 class="font-bold text-xl mt-6 mb-4">Why Predict-and-Control Falls Short</h4>
        <p class="mb-6">
          Predictive analytics map historical events onto the future, freezing yesterday's biases into tomorrow's patrol routes. Communities on the receiving end often feel pre-judged, which itself raises stress. Reflection flips the lens: it asks what is happening right now and invites all parties to co-regulate.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">Public Safety as a Temporal Ecology</h4>
        <p class="mb-6">
          Stress spreads at the speed of a glance; calm can, too. Cities are networks of nervous systems. When those systems align, safety emerges naturally. When they drift out of phase, small misunderstandings escalate quickly. The task is therefore to sense rhythm and restore coherence—not to impose control.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">The Architecture of Reflective Safety</h4>
        <p class="mb-4"><strong>Sensing — Time Perception Mirroring</strong></p>
        <p class="mb-6">
          Consent-based microphones, wearables, or street-level nodes collect coarse timing signals: changes in speech tempo, group movement, heart-rate ranges. No identifying data leaves the device.
        </p>

        <p class="mb-4"><strong>Modelling — EchoX</strong></p>
        <p class="mb-6">
          EchoX translates those signals into a Collective Horizon—a real-time gauge of how much shared attention and composure exist. A widening horizon signals readiness for dialogue; a narrowing one signals mounting strain.
        </p>

        <p class="mb-4"><strong>Reflecting — PCC Interface</strong></p>
        <p class="mb-6">
          The PCC dashboard displays a simple colour or tone—green (coherence), amber (dissonance), red (compression)—visible to officers and residents alike. Because the mirror is symmetric, no side "reads" the other from a distance; everyone reads the atmosphere together.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">Three Archetypal States</h4>
        <div class="mb-6">
          <p class="mb-4"><strong>State: Compression</strong></p>
          <ul class="mb-4 space-y-2">
            <li>Collective Signature: Voices sharpen, body language closes, response times shorten.</li>
            <li>Recommended Move: Reduce sensory load, pause conversation, invite neutral party.</li>
          </ul>

          <p class="mb-4"><strong>State: Dissonance</strong></p>
          <ul class="mb-4 space-y-2">
            <li>Collective Signature: Participants speak past each other; stress oscillates.</li>
            <li>Recommended Move: Slow exchanges, restate intentions, re-establish common ground.</li>
          </ul>

          <p class="mb-4"><strong>State: Coherence</strong></p>
          <ul class="mb-4 space-y-2">
            <li>Collective Signature: Speech and pacing align, humour re-appears.</li>
            <li>Recommended Move: Proceed with discussion, confirm agreements, reinforce respect.</li>
          </ul>
        </div>
        <p class="mb-6 italic">These states describe the temperature of the interaction, not the character of individuals.</p>

        <h4 class="font-bold text-xl mt-6 mb-4">Designing the Reflective Loop</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Ambient Reflection</strong> – Street lights, wearable displays, or vehicle dashboards show the colour in real time.</li>
          <li><strong>Guided Adjustment</strong> – Training links each colour to a stance: softer tone, stepped-back posture, or brief listening pause.</li>
          <li><strong>Shared Debrief</strong> – After the encounter, anonymised trend lines reveal which moves restored coherence fastest. Communities refine their own playbook.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Collective Benefits</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Earlier De-Escalation</strong> – Visual cues prompt self-regulation before commands are issued.</li>
          <li><strong>Distributed Responsibility</strong> – Safety becomes a joint task, not a unilateral order.</li>
          <li><strong>Transparent Logic</strong> – Everyone can trace each colour shift to observable patterns—no hidden scoring.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Ethical Guardrails</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Minimal Data</strong> – Only the timing of behaviour, never the content, is processed.</li>
          <li><strong>Local Processing</strong> – Raw signals stay on edge devices; only aggregated horizon width travels.</li>
          <li><strong>Shared Governance</strong> – Residents, responders, and civic leaders co-set thresholds and review logs.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Implementation Path</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Community Dialogue</strong> – Align goals and boundaries before any sensor is deployed.</li>
          <li><strong>Prototype Walk-Through</strong> – Use volunteers to rehearse scenarios and fine-tune colour cues.</li>
          <li><strong>Micro-Pilot</strong> – Equip one street or one shift; collect qualitative stories alongside metrics.</li>
          <li><strong>Iterate & Expand</strong> – Scale only if reflection demonstrably lowers tension and raises trust.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Conclusion</h4>
        <p class="mb-6">
          Prediction tries to outguess disorder; reflection helps communities outgrow it. By combining Personal Cognitive Computing, EchoX, and Time Perception Mirroring, public safety shifts from enforcing compliance to nurturing coherence. If this theoretical approach resonates with your city or organisation, Cosmo Lab is ready to explore a pilot together.
        </p>
      `
    },
    'deep-time': {
      title: "Deep Time: Re-awakening Long-Range Awareness",
      author: "Cosmo Lab Research Team",
      date: "April 22, 2023",
      readTime: "9 min read",
      image: "/AdobeStock_800182196.jpeg",
      content: `
        <p class="lead mb-8">
          Digital culture compresses attention into two settings: now and too late. When every alert demands an instant reply, hours feel crowded and decades disappear from view. Cosmo Lab revives an older capacity—Deep Time—the sense that minutes, seasons, and millennia can coexist in a single thought.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Quick-Read Overview</h3>
        <p class="mb-6">
          Three components give the idea practical form:
        </p>
        <ul class="mb-6 space-y-2">
          <li>Personal Cognitive Computing (PCC) — a user-controlled layer that notices how far (or near) your attention is currently reaching.</li>
          <li>EchoX — the Evolutionary Cognitive Horizon Orchestrator inside PCC; it measures the "width" of your temporal horizon in real time.</li>
          <li>Time Perception Mirroring (TPM) — a sensing method that tracks subtle bodily rhythms—breath pacing, heart-rate variability, gaze pauses—to reveal when the mind is ready to widen or needs to zoom in.</li>
        </ul>
        <p class="mb-6">
          Instead of nagging you to slow down, the system holds up a mirror. When the horizon narrows, a cue might invite a pause, a soundscape, or a story fragment that re-anchors thought in a longer arc. When the horizon widens, distractions are quietly blocked so reflection can deepen.
        </p>

        <h3 class="font-bold text-2xl mt-8 mb-4">Deep-Dive Read</h3>
        <h4 class="font-bold text-xl mt-6 mb-4">The Compression of the Present</h4>
        <p class="mb-6">
          Economic and social platforms reward speed: trades per millisecond, posts per scroll. That temporal compression traps decision-makers in reactive loops. Short-term gains eclipse long-term costs; personal meaning erodes under perpetual urgency. Deep Time offers an antidote: it restores breadth without rejecting modern pace.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">A Layered Model of Time</h4>
        <div class="mb-6">
          <table class="w-full mb-6">
            <thead>
              <tr>
                <th class="text-left p-2">Layer</th>
                <th class="text-left p-2">Cognitive Focus</th>
                <th class="text-left p-2">Typical Span</th>
                <th class="text-left p-2">Common Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Immediate</td>
                <td class="p-2">survival, reflex</td>
                <td class="p-2">seconds–minutes</td>
                <td class="p-2">agility</td>
              </tr>
              <tr>
                <td class="p-2">Narrative</td>
                <td class="p-2">identity, goals</td>
                <td class="p-2">hours–years</td>
                <td class="p-2">meaning</td>
              </tr>
              <tr>
                <td class="p-2">Ancestral</td>
                <td class="p-2">culture, lineage</td>
                <td class="p-2">decades–centuries</td>
                <td class="p-2">belonging</td>
              </tr>
              <tr>
                <td class="p-2">Planetary</td>
                <td class="p-2">ecology, cosmos</td>
                <td class="p-2">millennia+</td>
                <td class="p-2">stewardship</td>
              </tr>
            </tbody>
          </table>
          <p class="italic">Healthy cognition moves among layers. Compression locks us at the top; Deep Time re-opens the lower three.</p>
        </div>

        <h4 class="font-bold text-xl mt-6 mb-4">How PCC + EchoX + TPM Make It Work</h4>
        <p class="mb-4"><strong>Sensing (TPM)</strong></p>
        <p class="mb-6">
          Micro-fluctuations in breathing and heart rhythm shift as attention toggles layers. TPM captures those signals—always with explicit consent.
        </p>

        <p class="mb-4"><strong>Modelling (EchoX)</strong></p>
        <p class="mb-6">
          EchoX converts raw signals into a Temporal Horizon: a real-time gauge of how far thought currently spans.
        </p>

        <p class="mb-4"><strong>Reflecting (PCC Dashboard)</strong></p>
        <p class="mb-6">
          The interface shows a simple indicator—narrow, balanced, or wide—and offers optional prompts matched to the state. Crucially, it never forces a practice; the user steers.
        </p>

        <h4 class="font-bold text-xl mt-6 mb-4">Applying Deep Time</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Education</strong> — Courses paced to seasonal or lunar cycles help students link facts to context; EchoX locks notification silence during reflection blocks.</li>
          <li><strong>Climate Action</strong> — Dashboards display carbon goals on a 100-year arc; TPM cues collective pauses when urgency slides into despair, keeping resolve steady.</li>
          <li><strong>Leadership & Strategy</strong> — Quarterly decisions are tested against decade-scale scenarios; when EchoX registered narrowed horizons during high-stakes talks, a two-minute reset prevents rash trade-offs.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Cultivating the Practice</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Anchor Rituals</strong> — Begin meetings with a reference to events older than any attendee or goals beyond anyone's tenure.</li>
          <li><strong>Depth Windows</strong> — Schedule protected spans where PCC blocks rapid-fire pings, letting reflection mature.</li>
          <li><strong>Shared Chronicle</strong> — Maintain a living timeline of past choices and their ripples; EchoX highlights patterns your team might forget.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Ethical Grounding</h4>
        <ul class="mb-6 space-y-2">
          <li><strong>Minimal capture</strong> — Only horizon-width metrics leave the device, never raw biometrics.</li>
          <li><strong>Explainable cues</strong> — Each prompt cites the pattern that triggered it ("breath pace shortened 20 %, horizon narrowing").</li>
          <li><strong>Revocable mirror</strong> — Deep Time cannot be coerced; users can silence reflection instantly.</li>
        </ul>

        <h4 class="font-bold text-xl mt-6 mb-4">Conclusion</h4>
        <p class="mb-6">
          Fast technology on a slow planet demands minds that can stretch time, not just fill it. By weaving Personal Cognitive Computing, EchoX, and Time Perception Mirroring, Cosmo Lab turns Deep Time from philosophy into daily practice—helping individuals, teams, and whole communities act with agility and foresight. If expanding temporal horizons sounds useful in your work, we're ready to explore the next step with you.
        </p>
      `
    },
    'cognitive-sovereignty': {
      title: "Cognitive Sovereignty: Protecting the Self in the Age of Augmentation",
      author: "Cosmo Lab Research Team",
      date: "July 8, 2024",
      readTime: "12 min read",
      image: "/low-angle-woman-posing-outdoors.jpg",
      content: `
        <p class="lead mb-8">
          When technology can sense pulse changes, predict preferences, and reorder your schedule, freedom is no longer just legal—it is neurocognitive. Cosmo Lab anchors that freedom in Cognitive Sovereignty: the un-transferable right to decide how your inner signals are captured, reflected, and acted upon.
        </p>
        <h3 class="font-bold text-2xl mt-8 mb-4">Quick-Read Overview</h3>
        <p class="mb-6">
          Personal Cognitive Computing, EchoX, and Time Perception Mirroring for self-governing minds.
        </p>
        <ul class="mb-6 space-y-2">
          <li><strong>Personal Cognitive Computing (PCC):</strong> A local software vault that stores and processes your data first, keeping raw signals under your direct control.</li>
          <li><strong>EchoX:</strong> The Evolutionary Cognitive Horizon Orchestrator within PCC; it converts rhythms into plain-language reflections only you can see unless you choose otherwise.</li>
          <li><strong>Time Perception Mirroring (TPM):</strong> A sensing method that observes timing patterns—breath cadence, heart-rate variability, micro-pauses—never private content, showing when you are open, compressed, or in flow.</li>
        </ul>
        <p class="mb-6">
          These layers uphold the Cognitive Rights Charter—five guarantees that you can pause mirroring, demand explanations, refuse predictive nudges, and erase your profile at will. If you want the full theoretical scaffold, continue to the deep dive.
        </p>
        <h3 class="font-bold text-2xl mt-8 mb-4">Deep-Dive Read</h3>
        <h4 class="font-bold text-xl mt-6 mb-4">Why Classic Privacy Protections Fall Short</h4>
        <p class="mb-6">
          Biometric tech moves intimate signals from clinic to wristband; predictive models steer behaviour invisibly; "opt-in" checkboxes bury consent in fine print. True autonomy now requires continuous, granular control over sensing, modelling, and feedback.
        </p>
        <h3 class="font-bold text-2xl mt-8 mb-4">The Cognitive Rights Charter</h3>
        <table class="w-full mb-6">
          <thead>
            <tr>
              <th class="text-left p-2">Right</th>
              <th class="text-left p-2">Operational Guarantee</th>
              <th class="text-left p-2">Where It Lives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2">Temporal Consent</td>
              <td class="p-2">Change data-sharing settings instantly, no feature lock-out.</td>
              <td class="p-2">PCC settings panel</td>
            </tr>
            <tr>
              <td class="p-2">Emotional Safety</td>
              <td class="p-2">Algorithms may not amplify arousal for profit; TPM stabilises, never exploits.</td>
              <td class="p-2">Sensor-to-cue pipeline</td>
            </tr>
            <tr>
              <td class="p-2">Narrative Choice</td>
              <td class="p-2">Select how reflections appear—analytics, metaphors, visuals.</td>
              <td class="p-2">EchoX stance engine</td>
            </tr>
            <tr>
              <td class="p-2">Predictive Opt-Out</td>
              <td class="p-2">Disable foresight models that nudge behaviour.</td>
              <td class="p-2">PCC model toggle</td>
            </tr>
            <tr>
              <td class="p-2">Portability & Erasure</td>
              <td class="p-2">Export or delete the entire profile in one action.</td>
              <td class="p-2">Local data vault</td>
            </tr>
          </tbody>
        </table>
        <h3 class="font-bold text-2xl mt-8 mb-4">How PCC, EchoX & TPM Enforce Sovereignty</h3>
        <ul class="mb-6 space-y-2">
          <li><strong>Sensing – TPM:</strong> Captures cadence, not content. The system knows your breath quickened, not why.</li>
          <li><strong>Modelling – EchoX:</strong> Builds a Cognitive Horizon on-device; nothing leaves your hardware unless you share an abstract form (e.g., "team horizon: steady").</li>
          <li><strong>Reflecting – PCC Interface:</strong> Every prompt carries a "why" link. One tap can mute, narrow, or delete any data stream—no questions asked.</li>
        </ul>
        <h3 class="font-bold text-2xl mt-8 mb-4">Daily Life in a Sovereign System</h3>
        <table class="w-full mb-6">
          <thead>
            <tr>
              <th class="text-left p-2">Scenario</th>
              <th class="text-left p-2">Right Exercised</th>
              <th class="text-left p-2">User Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2">Mid-project stress spike</td>
              <td class="p-2">Emotional Safety</td>
              <td class="p-2">EchoX suggests a reset; user accepts, horizon widens without ad-driven dopamine tricks.</td>
            </tr>
            <tr>
              <td class="p-2">Sensitive negotiation</td>
              <td class="p-2">Predictive Opt-Out</td>
              <td class="p-2">User pauses foresight models; PCC stops scenario nudges until re-enabled.</td>
            </tr>
            <tr>
              <td class="p-2">Travel to new region</td>
              <td class="p-2">Narrative Choice</td>
              <td class="p-2">User switches reflection style to visual icons for quick scanning on the move.</td>
            </tr>
            <tr>
              <td class="p-2">End of internship</td>
              <td class="p-2">Portability & Erasure</td>
              <td class="p-2">Entire profile exported to USB, then wiped locally in under 10 seconds.</td>
            </tr>
          </tbody>
        </table>
        <h3 class="font-bold text-2xl mt-8 mb-4">Institutional Adoption Path</h3>
        <ul class="mb-6 space-y-2">
          <li><strong>Charter Workshop:</strong> Stakeholders adapt the Cognitive Rights Charter to local policy.</li>
          <li><strong>Pilot with Audit Hooks:</strong> Deploy PCC+EchoX+TPM to volunteers; immutable logs allow third-party review.</li>
          <li><strong>Trust Metrics Review:</strong> Measure consent-revocation speed, explanation clarity, deletion completeness.</li>
          <li><strong>Governed Roll-out:</strong> Scale only when trust metrics meet agreed thresholds.</li>
        </ul>
        <h3 class="font-bold text-2xl mt-8 mb-4">Ethical Safeguards & Overrides</h3>
        <ul class="mb-6 space-y-2">
          <li><strong>Role-Based Views:</strong> Managers see team horizon width, never individual biometrics.</li>
          <li><strong>Emergency Override:</strong> Time-limited, dual-confirmation switch; creates non-erasable audit trail.</li>
          <li><strong>Bias Audit Loop:</strong> External reviewers test reflections across cultures and neurotypes.</li>
        </ul>
        <h3 class="font-bold text-2xl mt-8 mb-4">Conclusion</h3>
        <p class="mb-6">
          Augmentation should expand the self, not edit it. By intertwining Personal Cognitive Computing, EchoX, and Time Perception Mirroring, Cosmo Lab converts abstract rights into live reflexes—pause, inspect, erase—available at any moment. If your organisation seeks technology that amplifies without annexing, let's design sovereignty together.
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
    <div className="min-h-screen">
      <SEO
        title={`${article.title} - Cosmo Lab`}
        description={article.content.split('</p>')[0].replace(/<[^>]*>/g, '')}
        keywords={['Intelligence Amplification', '4th CTPS', 'Research', 'Insights', article.title.split(' ').slice(0, 3).join(' ')]}
        url={`https://cosmolab.cc/article/${slug}`}
        author={article.author}
        publishedTime={article.date}
      />
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
    </div>
  );
};

export default Article; 