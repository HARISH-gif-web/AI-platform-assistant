import { Code, Database, Layout, Server } from "lucide-react";

export default function ProjectInfo() {
  return (
    <section id="project-info" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium mb-6">
              For Judges & Developers
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Technical Architecture & Innovation
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Statement</h3>
                <p className="text-gray-600">
                  Traditional web support is often static, slow, or relies on rigid decision trees. Users struggle to find specific information quickly, leading to frustration and drop-offs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Solution</h3>
                <p className="text-gray-600">
                  We integrated a Large Language Model (Gemini) directly into the frontend experience. This allows for natural language understanding, context retention, and dynamic response generation that adapts to the user's specific intent.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future Roadmap</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Multi-modal support (Voice & Image input)</li>
                  <li>User personalization based on browsing history</li>
                  <li>Integration with backend databases for real-time order tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-4">Tech Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Layout className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-400">Frontend</h4>
                  <p className="text-sm text-gray-400 mt-1">React 19, Tailwind CSS, Framer Motion</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Server className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-green-400">AI Integration</h4>
                  <p className="text-sm text-gray-400 mt-1">Google Gemini API (Flash Preview)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Code className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-yellow-400">Language</h4>
                  <p className="text-sm text-gray-400 mt-1">TypeScript (Strict Mode)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Database className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-purple-400">State</h4>
                  <p className="text-sm text-gray-400 mt-1">React Hooks & Context</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="font-mono text-xs text-gray-500 bg-black/30 p-4 rounded-lg">
                <span className="text-purple-400">const</span> <span className="text-blue-400">aiModel</span> = <span className="text-green-400">"gemini-3-flash-preview"</span>;<br/>
                <span className="text-purple-400">const</span> <span className="text-blue-400">latency</span> = <span className="text-green-400">"&lt; 500ms"</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
