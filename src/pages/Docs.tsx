import { useState } from 'react';
import { motion } from 'motion/react';
import { Book, ChevronRight, FileText, Settings, Terminal, HelpCircle } from 'lucide-react';

// 定义文档的结构
const sidebarData = [
  {
    title: '快速开始',
    icon: <Terminal className="w-4 h-4" />,
    links: [
      { id: 'intro', label: '简介' },
      { id: 'install', label: '安装指南' },
      { id: 'quickstart', label: '5分钟上手' }
    ]
  },
  {
    title: '核心功能',
    icon: <Book className="w-4 h-4" />,
    links: [
      { id: 'import', label: '图像导入与预处理' },
      { id: 'analysis', label: '细胞计数与分析' },
      { id: 'export', label: '数据导出' }
    ]
  },
  {
    title: '疑难解答',
    icon: <HelpCircle className="w-4 h-4" />,
    links: [
      { id: 'faq', label: '常见报错 (FAQ)' },
      { id: 'performance', label: '性能优化' },
      { id: 'contact', label: '联系我们' }
    ]
  }
];

export default function Docs() {
  // 当前选中的文档 ID，默认选中 'intro'
  const [activeDoc, setActiveDoc] = useState('intro');

  // 根据 activeDoc 渲染不同的内容
  const renderContent = () => {
    switch (activeDoc) {
      // ================= 快速开始 =================
      case 'intro':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">快速开始</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">简介</h1>
            <p className="text-lg text-ink-light mb-10 leading-relaxed">
              欢迎使用 BioJ！这是一款专为生物学研究设计的轻量级图像处理工具。
            </p>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">为什么选择 BioJ？</h2>
              <ul className="list-disc pl-5 space-y-2 text-ink-light mb-8">
                <li><strong>简单易用：</strong> 专为非计算机背景的科研人员设计，无需编写代码。</li>
                <li><strong>高效处理：</strong> 优化的底层算法，支持大批量荧光图像的快速分析。</li>
                <li><strong>开箱即用：</strong> 提供一键安装包，免去繁琐的环境配置。</li>
              </ul>
              {/* 占位图 */}
              <div className="w-full h-64 bg-surface border border-border rounded-xl flex items-center justify-center text-ink-lighter mb-8">
                [这里可以放一张软件主界面的截图]
              </div>
            </div>
          </motion.div>
        );

      case 'install':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">快速开始</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">安装指南</h1>
            <p className="text-lg text-ink-light mb-10 leading-relaxed">
              只需简单的几步，即可在您的电脑上安装并运行 BioJ。
            </p>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">系统要求</h2>
              <ul className="list-disc pl-5 space-y-2 text-ink-light mb-8">
                <li>操作系统：Windows 10 / Windows 11 (64位)</li>
                <li>内存：建议 8GB 及以上</li>
                <li>硬盘：至少 500MB 可用空间</li>
              </ul>

              <h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">安装步骤</h2>
              <ol className="list-decimal pl-5 space-y-4 text-ink-light mb-8">
                <li>在首页点击 <strong>“下载 BioJ”</strong>，获取最新的 <code>Setup.exe</code> 安装包。</li>
                <li>双击运行下载好的安装包。</li>
                <li>如果遇到 Windows Defender 提示“Windows 已保护你的电脑”，请点击 <strong>“更多信息”</strong>，然后选择 <strong>“仍要运行”</strong>。</li>
                <li>按照安装向导的提示，一直点击“下一步”即可完成安装。</li>
              </ol>
            </div>
          </motion.div>
        );

      case 'quickstart':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">快速开始</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">5分钟上手</h1>
            <p className="text-lg text-ink-light mb-10 leading-relaxed">
              通过一个简单的细胞计数案例，带您快速熟悉 BioJ 的工作流程。
            </p>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-serif font-medium text-ink mt-8 mb-4">第一步：导入图像</h2>
              <p className="text-ink-light mb-4">点击软件左上角的“打开文件”按钮，选择一张需要分析的细胞荧光图片（支持 TIFF, PNG, JPG 格式）。</p>
              
              <h2 className="text-2xl font-serif font-medium text-ink mt-8 mb-4">第二步：设置阈值</h2>
              <p className="text-ink-light mb-4">在右侧面板中，调整“阈值 (Threshold)”滑块，直到红色的蒙版刚好覆盖住所有的细胞。</p>
              
              <h2 className="text-2xl font-serif font-medium text-ink mt-8 mb-4">第三步：开始分析</h2>
              <p className="text-ink-light mb-4">点击底部的“开始分析”按钮。软件会在几秒钟内计算出细胞的数量、平均面积和荧光强度。</p>
            </div>
          </motion.div>
        );

      // ================= 核心功能 =================
      case 'import':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">核心功能</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">图像导入与预处理</h1>
            <p className="text-lg text-ink-light mb-10 leading-relaxed">详细介绍 BioJ 支持的图像格式以及预处理工具。</p>
            {/* 留给用户自己补充 */}
            <div className="p-6 bg-surface border border-border rounded-xl text-ink-light">
              [这里可以详细写图像裁剪、色彩通道分离、滤波降噪等功能的使用方法]
            </div>
          </motion.div>
        );

      case 'analysis':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">核心功能</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">细胞计数与分析</h1>
            <p className="text-lg text-ink-light mb-10 leading-relaxed">介绍核心的算法参数和分析选项。</p>
            {/* 留给用户自己补充 */}
            <div className="p-6 bg-surface border border-border rounded-xl text-ink-light">
              [这里可以详细写如何调整参数来分离粘连细胞、如何过滤杂质等]
            </div>
          </motion.div>
        );

      case 'export':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">核心功能</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">数据导出</h1>
            <p className="text-lg text-ink-light mb-10 leading-relaxed">如何将分析结果导出为 Excel 或 CSV 格式。</p>
            {/* 留给用户自己补充 */}
            <div className="p-6 bg-surface border border-border rounded-xl text-ink-light">
              [这里可以详细写导出的数据包含哪些指标，如何生成分析报告]
            </div>
          </motion.div>
        );

      // ================= 疑难解答 =================
      case 'faq':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">疑难解答</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">常见报错 (FAQ)</h1>
            <div className="space-y-6 mt-8">
              <div className="border border-border rounded-lg p-5">
                <h3 className="text-lg font-medium text-ink mb-2">Q: 软件打开后闪退怎么办？</h3>
                <p className="text-ink-light">A: 请检查您的电脑是否安装了最新版的显卡驱动。另外，请确保安装路径中没有中文字符。</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="text-lg font-medium text-ink mb-2">Q: 导入 TIFF 图片时提示格式不支持？</h3>
                <p className="text-ink-light">A: 目前 BioJ 仅支持 8-bit 和 16-bit 的 TIFF 图像，暂不支持 32-bit 浮点型图像。请先在其他软件中转换位深。</p>
              </div>
            </div>
          </motion.div>
        );

      case 'performance':
      case 'contact':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 max-w-3xl">
            <div className="text-sm font-medium text-klein mb-2">疑难解答</div>
            <h1 className="text-4xl font-serif font-normal text-ink mb-6">{activeDoc === 'performance' ? '性能优化' : '联系我们'}</h1>
            <div className="p-6 bg-surface border border-border rounded-xl text-ink-light">
              [内容待补充]
            </div>
          </motion.div>
        );

      default:
        return <div>选择左侧菜单查看文档</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar 侧边栏 */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-8">
            {sidebarData.map((section, idx) => (
              <div key={idx}>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  {section.icon}
                  {section.title}
                </h3>
                <ul className="space-y-2 border-l border-border ml-2 pl-4">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => setActiveDoc(link.id)}
                        className={`text-sm block py-1 transition-colors text-left w-full ${
                          activeDoc === link.id 
                            ? 'text-klein font-medium' 
                            : 'text-ink-light hover:text-ink'
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Content 右侧内容区 */}
        {renderContent()}
      </div>
    </div>
  );
}
