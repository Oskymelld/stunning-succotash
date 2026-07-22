import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { getAllPosts, formatDate } from "../data/blog";
import { usePageTitle } from "../hooks/usePageTitle";

export function Blog() {
  usePageTitle("Writing");
  const posts = getAllPosts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl font-black font-['Outfit',sans-serif] tracking-tight mb-4"
        >
          Writing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400"
        >
          Thoughts on design, process, and the things I build.
        </motion.p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group block p-6 sm:p-8 rounded-[2rem] bg-card border border-border hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {post.coverImage && (
                  <div className="sm:w-48 sm:flex-shrink-0 aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex-1">
                  {/* zinc-400: zinc-500 fails contrast at 3.8:1 on the dark bg */}
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] mb-3 flex items-start gap-2">
                    {post.title}
                    <ArrowUpRight className="w-5 h-5 mt-1 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                  </h2>

                  <p className="text-zinc-400 leading-relaxed mb-4">{post.excerpt}</p>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
