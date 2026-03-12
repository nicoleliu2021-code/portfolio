import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Product Thinking`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/thinking"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Product Thinking
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 pb-8 border-b border-gray-200">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-medium">
                📝 <strong>Note:</strong> This is a placeholder blog post. Full content coming soon as I continue writing about product management, growth, and experimentation.
              </p>
            </div>

            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>

            {/* Coming Soon Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-3">More Content Coming Soon</h3>
              <p className="text-gray-200 mb-4">
                I'm actively writing detailed posts on product strategy, experimentation frameworks, and building products. This article is currently in draft form.
              </p>
              <p className="text-gray-300 text-sm">
                Topics I'm covering: hypothesis-driven development, sample size calculations, activation metrics, retention analysis, and more.
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Product Thinking</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/thinking/${relatedPost.id}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
