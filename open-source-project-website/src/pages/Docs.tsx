import { motion } from 'motion/react';
import { Book, ChevronRight, FileText, Settings, Terminal } from 'lucide-react';

export default function Docs() {
  const sidebarLinks = [
    {
      title: 'Getting Started',
      icon: <Terminal className="w-4 h-4" />,
      links: ['Introduction', 'Installation', 'Quick Start']
    },
    {
      title: 'Core Concepts',
      icon: <Book className="w-4 h-4" />,
      links: ['Architecture', 'Routing', 'State Management', 'Data Fetching']
    },
    {
      title: 'Advanced',
      icon: <Settings className="w-4 h-4" />,
      links: ['Middleware', 'Authentication', 'Deployment', 'Performance']
    },
    {
      title: 'API Reference',
      icon: <FileText className="w-4 h-4" />,
      links: ['Server API', 'Client API', 'CLI Commands']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-8">
            {sidebarLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  {section.icon}
                  {section.title}
                </h3>
                <ul className="space-y-2 border-l border-border ml-2 pl-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href="#" 
                        className={`text-sm block py-1 transition-colors ${
                          idx === 0 && linkIdx === 1 
                            ? 'text-klein font-medium' 
                            : 'text-ink-light hover:text-ink'
                        }`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 max-w-3xl"
        >
          <div className="text-sm font-medium text-klein mb-2">Getting Started</div>
          <h1 className="text-4xl font-serif font-normal text-ink mb-6">Installation</h1>
          <p className="text-lg text-ink-light mb-10 leading-relaxed">
            Get up and running with BIoJ in less than a minute. We provide a CLI tool to scaffold your project automatically.
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">System Requirements</h2>
            <ul className="list-disc pl-5 space-y-2 text-ink-light mb-8">
              <li>Node.js 18.0 or later</li>
              <li>macOS, Windows (including WSL), and Linux are supported</li>
            </ul>

            <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">Automatic Setup</h2>
            <p className="text-ink-light mb-4">
              We recommend starting a new BIoJ app using our CLI, which sets up everything automatically for you.
            </p>
            
            <div className="bg-ink rounded-lg p-4 mb-8 flex items-center justify-between">
              <code className="text-paper font-mono text-sm">npm create bioj@latest</code>
              <button className="text-ink-lighter hover:text-paper transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>

            <p className="text-ink-light mb-4">
              On installation, you'll see the following prompts:
            </p>

            <div className="bg-surface border border-border rounded-lg p-6 mb-8 font-mono text-sm text-ink-light space-y-2">
              <div><span className="text-klein">?</span> What is your project named? <span className="text-ink">my-app</span></div>
              <div><span className="text-klein">?</span> Would you like to use TypeScript? <span className="text-ink">No / <span className="text-klein font-bold">Yes</span></span></div>
              <div><span className="text-klein">?</span> Would you like to use ESLint? <span className="text-ink">No / <span className="text-klein font-bold">Yes</span></span></div>
              <div><span className="text-klein">?</span> Would you like to use Tailwind CSS? <span className="text-ink">No / <span className="text-klein font-bold">Yes</span></span></div>
            </div>

            <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">Manual Setup</h2>
            <p className="text-ink-light mb-4">
              If you prefer to set up your project manually, you can install the core packages directly.
            </p>

            <div className="bg-ink rounded-lg p-4 mb-8">
              <code className="text-paper font-mono text-sm">npm install bioj react react-dom</code>
            </div>

            <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
              <a href="#" className="flex items-center gap-2 text-ink-light hover:text-ink transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Introduction</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-klein hover:text-klein-dark transition-colors font-medium">
                <span>Quick Start</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
