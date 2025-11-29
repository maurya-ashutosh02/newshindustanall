import { Article } from "@/lib/newsApi";
import NewsCard from "./NewsCard";

interface HighlightSectionProps {
  articles: Article[];
  country: string;
}

export default function HighlightSection({
  articles,
  country,
}: HighlightSectionProps) {
  if (articles.length === 0) return null;
  return (
    <section className="bg-gray-50 py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-3">
          Top Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              country={country}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
