import rawData from "@/data/mockArticles.json";

interface Article {
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
export function getFeaturedArticle(country = "in") {
  const latest = mockData[country]?.latest || [];
  if (latest.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * latest.length);
  return latest[randomIndex];
}


export function getHighlightArticles(country = "in") {
  const latest = mockData[country]?.latest || [];
  if (latest.length <= 1) return [];

 
  const shuffled = [...latest].sort(() => Math.random() - 0.5);

  // Remove the random featured article if needed
  // OPTIONAL: remove featured article by index 0
  // shuffled.splice(0, 1);

  // Return the first 7 random articles
  return shuffled.slice(0, 7);
}


export function getArticlesByCategory(category: string, limit: number, country = "in") {
  const data = mockData[country];
  if (!data) return [];

  const key = category.toLowerCase();

  if (key.includes("latest")) return data.latest.slice(0, limit);
  if (key.includes("sports")) return data.sports?.slice(0, limit) || [];
  if (key.includes("technology")) return data.technology?.slice(0, limit) || [];
  if (key.includes("entertainment")) return data.entertainment?.slice(0, limit) || [];

  return [];
}
