import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPostBySlug, formatDate } from "../data/blog";

// Maps each Markdown element to a styled component so the post body matches
// the site's design. Edit these classes to restyle all posts at once.
const markdownComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold font-['Outfit',sans-serif] mt-12 mb-6" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold font-['Outfit',sans-serif] mt-12 mb-5" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-bold font-['Outfit',sans-serif] mt-8 mb-4" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg text-zinc-300 leading-relaxed mb-6" {...props} />
  ),
  a: (props: any) => (
    <a className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-lg text-zinc-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-lg text-zinc-300" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-white/20 pl-6 my-8 text-xl text-zinc-400 italic" {...props} />
  ),
  code: (props: any) => (
    <code className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-200 text-[0.9em] font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="p-5 rounded-2xl bg-black/40 border border-white/10 overflow-x-auto mb-6 text-sm" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-2xl border border-white/10 my-8 w-full" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-12" />,
  strong: (props: any) => <strong className="font-semibold text-white" {...props} />,
};

export function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug ?? "");

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4 font-['Outfit',sans-serif]">Post Not Found</h1>
        <Link to="/blog" className="text-zinc-400 hover:text-white flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Writing
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto"
    >
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-medium">Back to Writing</span>
      </Link>

      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
        <Calendar className="w-4 h-4" />
        <span>{formatDate(post.date)}</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-black font-['Outfit',sans-serif] tracking-tight mb-6"
      >
        {post.title}
      </motion.h1>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
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

      {post.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full aspect-video rounded-[2rem] overflow-hidden mb-12 border border-white/10"
        >
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>
      )}

      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {post.content}
      </ReactMarkdown>
    </motion.article>
  );
}
