import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center relative"
      >
        <h1 className="text-5xl font-serif font-normal text-ink mb-6">Blog</h1>
        <p className="text-xl text-ink-light max-w-2xl mx-auto">
          Updates, tutorials, and insights from the BIoJ team.
        </p>
      </motion.div>

      <div className="space-y-12">
        {posts.map((post, idx) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col items-start justify-between p-8 rounded-2xl bg-paper border border-border hover:border-klein/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <time dateTime={post.date} className="text-ink-lighter flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </time>
              <span className="relative z-10 rounded-full bg-surface px-3 py-1.5 font-medium text-ink-light border border-border">
                {post.category}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-serif font-medium leading-tight text-ink group-hover:text-klein transition-colors">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  {post.title}
                </a>
              </h3>
              <p className="mt-4 line-clamp-3 text-base leading-relaxed text-ink-light">
                {post.excerpt}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="font-medium text-ink">
                  <span className="absolute inset-0"></span>
                  {post.author}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1 text-sm font-medium text-klein opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                Read article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.article>
        ))}
        
        {posts.length === 0 && (
          <div className="text-center py-20 text-ink-light border border-dashed border-border rounded-2xl">
            暂无博客文章，请在 src/data/posts.ts 中添加！
          </div>
        )}
      </div>
    </div>
  );
}
