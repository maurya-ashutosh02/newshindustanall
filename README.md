# NewsPulse - News Portal Built with Next.js 14

A modern, responsive news portal inspired by LiveHindustan, built with Next.js 14, TypeScript, and TailwindCSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-06B6D4)

## 📸 Features

- ✅ **Server-Side Rendering** with ISR (Incremental Static Regeneration)
- ✅ **Dynamic Article Pages** with SEO optimization
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **Category Sections** (Latest News, Sports, Technology, Entertainment)
- ✅ **Image Optimization** using Next.js Image component
- ✅ **Type-Safe** with TypeScript
- ✅ **Accessible** with semantic HTML and ARIA labels
- ✅ **SEO-Friendly** with metadata and JSON-LD structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd newspulse

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
newspulse/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Home page (ISR)
│   └── news/[slug]/
│       ├── page.tsx            # Article detail page
│       └── not-found.tsx       # 404 handler
│
├── components/
│   ├── Navbar.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Footer with social links
│   ├── HeroSection.tsx         # Featured article hero
│   ├── HighlightSection.tsx    # Top stories section
│   ├── NewsGrid.tsx            # Reusable grid layout
│   ├── NewsCard.tsx            # Article card component
│   ├── SectionHeader.tsx       # Category headers
│   ├── ErrorState.tsx          # Error UI
│   └── LoadingState.tsx        # Loading skeletons
│
├── lib/
│   └── newsApi.ts              # Data fetching utilities
│
├── data/
│   └── mockArticles.json       # Mock article data (12 articles)
│
├── public/
│   └── (static assets)
│
├── DESIGN_ARCHITECTURE.md      # Part B: Design Document
├── TESTING_EDGE_CASES.md       # Part C: Testing Strategy
├── AI_USAGE_REFLECTION.md      # Part D: AI Reflection
└── README.md                   # This file
```

## 🎨 Design Philosophy

### Layout

- **Hero Section**: Large featured article with image and content side-by-side (desktop)
- **Top Stories**: 3 compact cards highlighting secondary stories
- **Category Sections**: Grid layout (3 columns) for Latest News, Sports, Technology, Entertainment
- **Color Scheme**: Red accent (#DC2626) on neutral grays and whites

### Responsive Breakpoints

- **Mobile** (< 640px): Single column, stacked layout
- **Tablet** (640px - 1024px): 2 columns
- **Desktop** (> 1024px): 3-4 columns

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.2
- **Styling**: TailwindCSS 3.3
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image
- **Data Fetching**: Server Components with ISR

## 📊 Data Fetching Strategy

This project uses **Incremental Static Regeneration (ISR)** for optimal performance:

```typescript
// app/page.tsx
export const revalidate = 300; // Revalidate every 5 minutes
```

### Why ISR?

✅ **Fast**: Pages are statically generated
✅ **Fresh**: Content updates every 5 minutes
✅ **SEO-Friendly**: Fully rendered HTML
✅ **Scalable**: CDN-ready

### Alternative Approaches Considered

- **SSG**: Too static for news content
- **SSR**: Slower, higher server load
- **CSR**: Poor SEO, slow initial load

**Verdict**: ISR provides the best balance for a news portal.

## 🧪 Testing

See [TESTING_EDGE_CASES.md](./TESTING_EDGE_CASES.md) for comprehensive testing strategy including:

- Unit tests (Jest + React Testing Library)
- Integration tests
- E2E tests (Cypress)
- Edge case handling
- Performance testing
- Accessibility testing

## 📝 Documentation

This project includes detailed documentation:

1. **[DESIGN_ARCHITECTURE.md](./DESIGN_ARCHITECTURE.md)** (Part B)
   - Wireframes and layout descriptions
   - Component architecture
   - Data fetching strategy comparison
   - Future improvements

2. **[TESTING_EDGE_CASES.md](./TESTING_EDGE_CASES.md)** (Part C)
   - Testing strategy (unit, integration, E2E)
   - 10+ edge cases with solutions
   - Performance and security testing
   - Accessibility compliance

3. **[AI_USAGE_REFLECTION.md](./AI_USAGE_REFLECTION.md)** (Part D)
   - How AI was used in development
   - AI strengths and limitations
   - Human oversight requirements
   - Future of AI-assisted development

## 🌟 Key Components

### Navbar
- Sticky navigation with site logo
- Responsive hamburger menu on mobile
- Anchor links to category sections

### NewsCard
- Two variants: default (full card) and compact (thumbnail + title)
- Hover effects with smooth transitions
- Category badge and relative timestamps
- Optimized images with Next.js Image

### HeroSection
- Featured article display
- 2-column layout (desktop), stacked (mobile)
- Call-to-action button

### Article Detail Page
- Dynamic routing (`/news/[slug]`)
- SEO metadata with OpenGraph tags
- JSON-LD structured data
- Breadcrumb navigation

## 🎯 SEO Optimization

- ✅ Dynamic metadata per page
- ✅ OpenGraph tags for social sharing
- ✅ JSON-LD structured data (NewsArticle schema)
- ✅ Semantic HTML
- ✅ Optimized images with alt text
- ✅ Descriptive URLs (slugs)

## ♿ Accessibility

- ✅ Semantic HTML (`<nav>`, `<article>`, `<section>`)
- ✅ ARIA labels for icon buttons
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance (WCAG AA)
- ✅ Alt text for all images

## 🚧 Future Enhancements

### Short-term
- [ ] Search functionality
- [ ] Pagination for large category results
- [ ] Dark mode toggle
- [ ] Social sharing buttons

### Long-term
- [ ] User authentication and profiles
- [ ] Bookmarking and reading lists
- [ ] Comments and engagement
- [ ] Personalized news feed
- [ ] Push notifications for breaking news
- [ ] Multilingual support (Hindi, Tamil, Bengali)
- [ ] Progressive Web App (PWA)

## 📈 Performance

Target Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔒 Security

- ✅ Content escaping (React default)
- ✅ HTTPS only (production)
- ✅ No exposed API keys
- ✅ CSRF protection (Next.js default)

## 🤝 Contributing

This is an academic project, but suggestions are welcome! Please open an issue to discuss proposed changes.

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Pexels** for free stock photos
- **LiveHindustan** for design inspiration
- **Anthropic Claude** for AI development assistance

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 14 and AI-assisted development**
