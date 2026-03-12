import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact | Product Manager Portfolio",
  description: "Get in touch to discuss product opportunities, collaborations, or just to connect.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600">
            Interested in working together? Have a product question? Just want to chat? Reach out!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors">
                <Mail className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Email</h2>
            </div>
            <p className="text-gray-600 mb-2">Drop me a line anytime</p>
            <p className="text-blue-600 font-medium">your.email@example.com</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors">
                <Linkedin className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">LinkedIn</h2>
            </div>
            <p className="text-gray-600 mb-2">Connect professionally</p>
            <p className="text-blue-600 font-medium">linkedin.com/in/yourprofile</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-xl bg-gray-100 group-hover:bg-gray-900 transition-colors">
                <Github className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">GitHub</h2>
            </div>
            <p className="text-gray-600 mb-2">Check out my code</p>
            <p className="text-blue-600 font-medium">github.com/yourusername</p>
          </a>

          {/* Twitter/X */}
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-xl bg-gray-100 group-hover:bg-gray-900 transition-colors">
                <MessageSquare className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Twitter</h2>
            </div>
            <p className="text-gray-600 mb-2">Follow for product insights</p>
            <p className="text-blue-600 font-medium">@yourhandle</p>
          </a>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for a Product Manager?</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities, especially roles that involve growth,
            experimentation, and building products from scratch. Let's talk about how I can
            help drive impact at your company.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Get in Touch
          </a>
        </div>

        {/* Response Time */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            I typically respond within 24-48 hours. Looking forward to connecting!
          </p>
        </div>
      </div>
    </div>
  );
}
