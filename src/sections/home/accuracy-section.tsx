"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Keyboard,
  ClipboardCopy,
  FileSearch,
  Brain,
  PlayCircle,
  ClipboardCheck,
  MessageSquare,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "Keystroke Analysis",
    brief: "Verify authentic writing/typing patterns",
    description: "Tracks typing speed and patterns to verify authentic writing. Like watching a student write in real-time, this helps identify when work matches their natural writing pace.",
  },
  {
    icon: ClipboardCopy,
    title: "Copy Paste Detection",
    brief: "Catch copied content instantly",
    description: "Identifies when text is pasted rather than typed. Shows exactly where students copied content, helping you spot plagiarism before grading.",
  },
  {
    icon: FileSearch,
    title: "Uncited Text",
    brief: "Normal plagiarism detection",
    description: "Traditional plagiarism detection that finds text matching online sources. Highlights uncited passages and shows the original sources students forgot to cite.",
  },
  {
    icon: Brain,
    title: "AI Detection",
    brief: "Identify AI-generated writing",
    description: "Identifies AI-generated text by analyzing writing patterns. We look at how consistent the writing style is, unusual word choices, and sentence flow—similar to how you'd notice when an essay doesn't sound like your student's usual voice.",
  },
  {
    icon: PlayCircle,
    title: "Essay Playback™",
    brief: "Review the writing process",
    description: "Watch a video replay showing how the essay was written, including every pause, deletion, and edit. It's like having a time machine to review the entire writing process and verify flagged scores.",
  },
  {
    icon: ClipboardCheck,
    title: "Autograder",
    brief: "Grade with your rubric automatically",
    description: "Automatically grades assignments based on your custom rubric. Provides clear explanations for every point awarded or deducted, maintaining consistency across all submissions.",
  },
  {
    icon: MessageSquare,
    title: "Writing Feedback",
    brief: "Help students improve their writing",
    description: "Generates specific, actionable feedback like a writing tutor. Helps students improve their grammar, structure, and clarity with personalized suggestions.",
  },
  {
    icon: Zap,
    title: "No External Download",
    brief: "Deploy once, works everywhere",
    description: "Works seamlessly inside Canvas and Google Classroom. Your school IT deploys it once, and students use it immediately—no downloads, installations, or separate accounts needed.",
  },
];

const FlipCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[280px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${feature.title} - Click to flip card`}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-white shadow-soft hover:shadow-medium transition-shadow border-2 border-transparent hover:border-brand-500/30 px-8 pt-8 pb-4 flex flex-col items-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
              <feature.icon className="w-8 h-8 text-brand-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">{feature.brief}</p>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-4">Click to learn more</p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-brand-700 shadow-soft p-8 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">
            {feature.title}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const AccuracySection = () => {
  return (
    <section id="features" className="py-30 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-brand-700 mb-4">
            Our Tools
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Designed with teachers to support student writing and save teachers time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FlipCard key={index} feature={feature} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default AccuracySection;
