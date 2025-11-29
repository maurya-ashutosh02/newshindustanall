import {
  getFeaturedArticle,
  getHighlightArticles,
  getArticlesByCategory,
} from '@/lib/newsMock';

import HeroSection from '@/components/HeroSection';
import HighlightSection from '@/components/HighlightSection';
import SectionHeader from '@/components/SectionHeader';
import NewsGrid from '@/components/NewsGrid';
import ErrorState from '@/components/ErrorState';

export const revalidate = 300;

export default async function Home({ searchParams }: { searchParams: { country?: string } }) {
  try {
    const country = searchParams.country || "in";

    const [
      featuredArticle,
      highlightArticles,
      latestNews,
      sports,
      technology,
      entertainment
    ] = await Promise.all([
      getFeaturedArticle(country),
      getHighlightArticles(country),
      getArticlesByCategory('Latest News', 50, country),       // ⭐ Fetch more
      getArticlesByCategory('Sports', 50, country),            // ⭐ Fetch more
      getArticlesByCategory('Technology', 50, country),        // ⭐ Fetch more
      getArticlesByCategory('Entertainment', 50, country),     // ⭐ Fetch more
    ]);

    if (!featuredArticle) {
      return (
        <ErrorState
          title="No featured article available"
          message="Please check back later for updates."
        />
      );
    }

    return (
      <div className="pb-12">
        <HeroSection article={featuredArticle} country={country} />

        <HighlightSection articles={highlightArticles} country={country} />

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
          
          {/* Latest News */}
          <section id="latest-news">
            <SectionHeader
              title="Latest News"
              subtitle="Stay informed with the most recent updates"
            />
            <NewsGrid articles={latestNews} columns={3} country={country} batch={6} />
          </section>

          {/* Sports */}
          <section id="sports">
            <SectionHeader
              title="Sports"
              subtitle="Breaking sports news and highlights"
            />
            <NewsGrid articles={sports} columns={3} country={country} batch={6} />
          </section>

          {/* Technology */}
          <section id="technology">
            <SectionHeader
              title="Technology"
              subtitle="Innovation and tech trends"
            />
            <NewsGrid articles={technology} columns={3} country={country} batch={6} />
          </section>

          {/* Entertainment */}
          <section id="entertainment">
            <SectionHeader
              title="Entertainment"
              subtitle="Bollywood, movies, and celebrity news"
            />
            <NewsGrid articles={entertainment} columns={3} country={country} batch={6} />
          </section>

        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading home page:', error);
    return (
      <ErrorState
        title="Failed to load news"
        message="We're having trouble loading the news. Please try refreshing the page."
      />
    );
  }
}
