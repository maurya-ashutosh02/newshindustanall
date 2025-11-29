import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/newsApi';
import { Clock } from 'lucide-react';
import { getRelativeTime } from '@/lib/newsApi';

interface HeroSectionProps {
  article: Article;
  country:string;
}

export default function HeroSection({ article,country }: HeroSectionProps) {
  return (
    <section className="bg-white shadow-md overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-64 sm:h-80 lg:h-96">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
            <div className="mb-3">
              <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
            </div>

            <Link href={`/news/${article.slug}?country=${country}`}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-red-700 transition-colors leading-tight">
                {article.title}
              </h1>
            </Link>

            <p className="text-gray-600 text-base sm:text-lg mb-4 line-clamp-3">
              {article.summary}
            </p>

            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Clock className="h-4 w-4 mr-2" />
              <span>{getRelativeTime(article.publishedAt)}</span>
            </div>

            <Link
              href={`/news/${article.slug}?country=${country}`}
              className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors w-full sm:w-auto"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
