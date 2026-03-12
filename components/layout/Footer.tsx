import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Product Manager Who Builds
            </h3>
            <p className="text-sm text-gray-600 max-w-md">
              I design and launch data-driven digital products across fintech, growth, and AI.
              This portfolio showcases real product work, strategic thinking, and builder projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-sm text-gray-600 hover:text-gray-900">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experiments" className="text-sm text-gray-600 hover:text-gray-900">
                  Experiment Lab
                </Link>
              </li>
              <li>
                <Link href="/teardowns" className="text-sm text-gray-600 hover:text-gray-900">
                  Product Teardowns
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-sm text-gray-600 hover:text-gray-900">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Your Name. Built with Next.js, Tailwind, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
