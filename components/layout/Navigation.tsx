"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Lab", href: "/projects" },
  { name: "Approach", href: "/about" },
  { name: "Resume", href: "/resume" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Xuejing Liu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
