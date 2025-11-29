import rawData from "@/data/mockArticles.json";

export interface Article {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  summary: string;
  content: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
}

interface CountryNews {
  latest: Article[];
  sports: Article[];
  technology: Article[];
  entertainment: Article[];
}

type NewsData = Record<string, CountryNews>;

const mockData = rawData as NewsData;

// 🔥 Combine all categories into one array
function getMerged(country: string): Article[] {
  const data = mockData[country];
  if (!data) return [];

  return [
    ...(data.latest || []),
    ...(data.sports || []),
    ...(data.technology || []),
    ...(data.entertainment || []),
  ];
}

// ✅ Get ALL articles of a country
export async function getAllArticles(country = "in") {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return getMerged(country);
}

// ✅ Featured = first "featured: true" anywhere in that country
export async function getFeaturedArticle(country = "in") {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const merged = getMerged(country);
  return merged.find((a) => a.featured) || null;
}

// ✅ Highlight = first 3 non-featured
export async function getHighlightArticles(country = "in") {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const merged = getMerged(country);
  return merged.filter((a) => !a.featured).slice(0, 3);
}

// ✅ Category filtering
export async function getArticlesByCategory(category: string, limit = 10, country = "in") {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const key = category.toLowerCase();
  const data = mockData[country];
  if (!data) return [];

  if (key.includes("latest")) return data.latest.slice(0, limit);
  if (key.includes("sports")) return data.sports.slice(0, limit);
  if (key.includes("tech")) return data.technology.slice(0, limit);
  if (key.includes("entertainment")) return data.entertainment.slice(0, limit);

  return [];
}

// ✅ Slug lookup across all categories
export async function getArticleBySlug(slug: string, country = "in") {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const merged = getMerged(country);
  return merged.find((a) => a.slug === slug) || null;
}

// 🔧 Helpers
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return formatDate(dateString);
}
