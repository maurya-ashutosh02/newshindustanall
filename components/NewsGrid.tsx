"use client";

import { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import { Article } from "@/lib/newsApi";

interface NewsGridProps {
  articles: Article[];
  columns?: number;
  country: string;
  batch?: number; // number of articles to load per scroll
}

export default function NewsGrid({
  articles,
  columns = 3,
  country,
  batch = 6,
}: NewsGridProps) {
  const [visibleCount, setVisibleCount] = useState(batch);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Infinite Scroll Logic
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting) {
          setVisibleCount((prev) => {
            if (prev >= articles.length) return prev;
            return prev + batch;
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [articles.length, batch]);

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <div className="w-full">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-6`}
      >
        {visibleArticles.map((article) => (
          <NewsCard
            key={article.id}
            article={article}
            country={country}
            variant="default"
          />
        ))}
      </div>

      {/* Invisible loader target for scroll detection */}
      <div ref={loaderRef} className="h-10"></div>

      {visibleCount >= articles.length && (
        <p className="text-center text-gray-500 mt-4">No more news</p>
      )}
    </div>
  );
}
