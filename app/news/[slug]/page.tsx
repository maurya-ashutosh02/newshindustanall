import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, formatDate } from '@/lib/newsApi';
import { Clock, ArrowLeft, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = "force-dynamic";   // ⭐ important

export async function generateStaticParams() {
  // ⭐ Do NOT statically build country-based slugs
  return [];
}

export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
  const country = searchParams.country || "in";
  const article = await getArticleBySlug(params.slug, country);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | NewsPulse`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      images: [article.imageUrl],
    },
  };
}

export default async function ArticlePage({ params, searchParams }: any) {
  const country = searchParams.country || "in";   // ⭐ read country
  const article = await getArticleBySlug(params.slug, country);  // ⭐ pass country

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    image: article.imageUrl,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'NewsPulse',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NewsPulse',
    },
    description: article.summary,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <Link
            href={`/?country=${country}`}
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                <Tag className="h-3 w-3 mr-1" />
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 font-semibold leading-relaxed mb-6">
              {article.summary}
            </p>

            <div className="text-gray-800 leading-relaxed space-y-4">
              {article.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Category:</span>{' '}
                {article.category}
              </div>
              <Link
                href={`/?country=${country}`}
                className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                More News
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
