import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/newsApi";
import { Clock } from "lucide-react";
import { getRelativeTime } from "@/lib/newsApi";
interface NewsCardProps {
  article: Article;
  country: string;
  variant?: "default" | "compact";
}

export default function NewsCard({
  article,
  country,
  variant = "default",
}: NewsCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/news/${article.slug}?country=${country}`}
        className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
      >
        <div className="flex gap-3 p-3">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover rounded"
              sizes="96px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-red-700 transition-colors mb-1">
              {article.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{getRelativeTime(article.publishedAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300">
      <Link href={`/news/${article.slug}?country=${country}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {article.summary}
          </p>

          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{getRelativeTime(article.publishedAt)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
