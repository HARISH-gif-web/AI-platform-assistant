import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about the project? Want to see a live demo? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">contact@ai-platform.demo</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
