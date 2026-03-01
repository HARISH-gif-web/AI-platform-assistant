import { Bot, Zap, Shield, Globe, Code, Cpu } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-white" />,
    title: "AI-Powered Intelligence",
    description: "Leverages Google's Gemini API for natural, context-aware conversations and instant problem-solving.",
    color: "bg-indigo-500",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Real-Time Responses",
    description: "Get immediate answers to your questions without waiting for human support agents.",
    color: "bg-amber-500",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Secure & Private",
    description: "Built with privacy-first architecture ensuring your data remains protected and confidential.",
    color: "bg-emerald-500",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "24/7 Availability",
    description: "Our AI assistant never sleeps, providing round-the-clock support for users worldwide.",
    color: "bg-blue-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with intuitive design to deliver an exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
