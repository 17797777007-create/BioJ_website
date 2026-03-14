import { motion } from 'motion/react';
import { ArrowRight, Code, Zap, Shield, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] overflow-hidden bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: "url('./BioJ_0.png')" }}
      >
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          {/* Buttons and Version Tag: Vertically centered on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 pointer-events-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/docs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink text-paper rounded-lg font-medium hover:bg-ink-light transition-colors shadow-lg"
              >
                立即开始
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="relative group">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-paper/80 text-ink border border-border rounded-lg font-medium hover:bg-surface transition-colors shadow-sm w-full sm:w-auto">
                  <Terminal className="w-4 h-4" />
                  下载 BioJ
                </button>
                {/* 下拉菜单 (Hover 时显示) */}
                <div className="absolute right-0 mt-2 w-48 bg-paper border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                  <a
                    href="https://github.com/你的用户名/仓库名/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-surface text-sm text-ink border-b border-border transition-colors"
                  >
                    🚀 GitHub 下载 (推荐)
                  </a>
                  <a
                    href="https://pan.baidu.com/s/你的网盘链接"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-surface text-sm text-ink transition-colors"
                  >
                    ☁️ 国内网盘下载
                  </a>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-border text-sm font-medium text-ink">
              <span className="w-2 h-2 rounded-full bg-bright-yellow"></span>
              v2.5.1
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">我们解决什么问题</h2>
            <p className="text-lg text-ink-light">
              在实际科研流程中，分析工作常常分散在多个脚本、文件夹和工具之间，导致版本混乱、参数分散、协作成本高。BioJ 的目标是把这些问题集中解决。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-bright-yellow-dark" />}
              title="插件化工具池"
              description="采用外置插件目录机制，便于扩展与维护。支持按项目需求灵活添加分析功能，插件扫描异常可提示，定位问题更直接。"
            />
            <FeatureCard 
              icon={<Code className="w-6 h-6 text-klein" />}
              title="文件池与画布协同"
              description="主池/子池结构，适配真实项目中的分层文件管理。文件可直接拖拽到画布形成节点，结果文件可自动进入流程视图，数据链路清晰可追踪。"
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-ink" />}
              title="输出结果自动防覆盖"
              description="反复运行同一任务时，自动为结果文件追加编号后缀。避免历史结果被覆盖，保留完整实验轨迹。"
            />
            <FeatureCard 
              icon={<Terminal className="w-6 h-6 text-ink-light" />}
              title="统一配置与稳定部署"
              description="运行时配置集中管理，路径策略清晰。安装时可选择数据根目录，自动生成插件与数据库子目录，配置文件自动写入并受保护。"
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section 
        className="relative py-32 bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: "url('./BioJ_1.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-end">
            {/* Text Content - Right-aligned */}
            <div className="w-full lg:w-1/2 text-right">
              <p className="text-lg text-ink-light mb-8 ml-auto max-w-lg">
                BioJ 不只是一个工具集合，而是一个可持续演进的分析工作台。我们关注的不仅是“能不能跑通”，更是“是否清晰、稳定、可复现、可协作”。
              </p>
              <ul className="space-y-4 flex flex-col items-end">
                {['选择数据目录', '导入文件', '连接工具', '运行分析'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink justify-end">
                    {item}
                    <div className="w-1.5 h-1.5 rounded-full bg-klein"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-paper border border-border shadow-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium text-ink mb-3">{title}</h3>
      <p className="text-ink-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
