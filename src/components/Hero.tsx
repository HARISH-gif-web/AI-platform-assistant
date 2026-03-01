import { motion } from "motion/react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium">
              <Sparkles size={16} />
              <span>Hackathon 2026 Project</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Intelligent Assistance <br />
            <span className="text-indigo-600">Reimagined for the Web</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience a new standard of interaction. Our AI-powered assistant understands context, provides instant support, and adapts to your needs.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Explore Features <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById("project-info")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              For Judges
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
}
