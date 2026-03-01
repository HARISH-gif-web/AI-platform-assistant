/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ChatWidget from "./components/ChatWidget";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProjectInfo from "./components/ProjectInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <main>
        <Hero />
        <Features />
        <ProjectInfo />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
