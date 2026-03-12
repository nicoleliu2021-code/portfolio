import Link from "next/link";
import { blogPosts } from "@/data/content";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Product Thinking | Product Manager Portfolio",
  description: "Essays on product management, growth strategy, experimentation, and AI.",
};

export default function ThinkingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-indigo-100">
              <BookOpen className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Product Thinking</h1>
          </div>
          <p className="text-xl text-gray-600">
            Essays and frameworks on product management, growth, experimentation, and building.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/thinking/${post.id}`}
            >
              <article className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-lg text-gray-700 mb-6">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-xl p-8">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">More Coming Soon</h3>
            <p className="text-gray-600">
              I'm regularly writing about product strategy, experimentation, and building. Check back soon for new posts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
