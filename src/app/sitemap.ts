import type { MetadataRoute } from "next";
import { blogPosts, newsArticles, programs } from "@/data/content";
import { siteConfig } from "@/lib/site";

const paths = ["/", "/about", "/academics", "/admissions", "/university-counseling", "/campus-life", "/campus-life/clubs", "/student-life", "/faculty", "/events", "/gallery", "/news", "/blog", "/testimonials", "/faq", "/contact", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return [...paths, ...programs.map((program) => program.href), ...newsArticles.map((article) => `/news/${article.slug}`), ...blogPosts.map((post) => `/blog/${post.slug}`)].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: updated, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : .7 }));
}
