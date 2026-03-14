export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "欢迎来到 BioJ 博客",
    excerpt: "这是第一篇博客文章。在这里，我们将分享关于生物信息学、数据分析和前沿科技的见解。",
    content: "这是第一篇博客文章的完整内容。在这里，我们将分享关于生物信息学、数据分析和前沿科技的见解。未来你只需要在这个文件里添加新的对象，就可以发布新文章了！",
    date: "2026年3月14日",
    category: "公告",
    author: "BioJ 团队"
  },
  {
    id: 2,
    title: "单细胞测序数据分析指南",
    excerpt: "单细胞RNA测序(scRNA-seq)技术正在彻底改变我们对细胞异质性的理解。本文将介绍基础的分析流程。",
    content: "单细胞RNA测序(scRNA-seq)技术正在彻底改变我们对细胞异质性的理解。本文将介绍基础的分析流程，包括质控、降维、聚类和细胞类型注释...",
    date: "2026年3月10日",
    category: "教程",
    author: "数据分析组"
  }
];
