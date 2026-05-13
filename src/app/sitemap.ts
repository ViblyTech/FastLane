import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";
import { articles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorityMap: Record<string, number> = {
    "": 1.0,
    "/services": 0.9,
    "/pricing": 0.9,
    "/contact": 0.9,
    "/about": 0.7,
    "/reviews": 0.8,
    "/service-area": 0.8,
    "/faq": 0.7,
  };

  const changefreqMap: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
    "": "weekly",
    "/services": "weekly",
    "/pricing": "monthly",
    "/contact": "monthly",
    "/about": "monthly",
    "/reviews": "weekly",
    "/service-area": "monthly",
    "/faq": "monthly",
  };

  const staticPaths = [
    "",
    "/services",
    "/pricing",
    "/about",
    "/reviews",
    "/service-area",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: changefreqMap[path] ?? "monthly",
    priority: priorityMap[path] ?? 0.5,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
