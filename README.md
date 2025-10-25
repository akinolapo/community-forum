# AllNova Community Forum

A modern, responsive one-page community platform built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI Components**: Reusable components built with React and Tailwind CSS
- **Five Main Sections**:
  1. **Hero Section**: Eye-catching landing with CTA buttons and community stats
  2. **Community Highlights**: Showcase of recent community events and activities
  3. **Explore Categories**: Browse through 9 different creative categories
  4. **Featured Discussions**: Trending topics and community conversations
  5. **Footer**: Newsletter signup and comprehensive site navigation

## Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
community-forum/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Button.tsx              # Reusable button component
│       ├── Header.tsx              # Navigation header with mobile menu
│       ├── HeroSection.tsx         # Hero section (Section 1)
│       ├── CommunityHighlights.tsx # Event highlights (Section 2)
│       ├── ExploreCategories.tsx   # Category cards (Section 3)
│       ├── FeaturedDiscussions.tsx # Discussion threads (Section 4)
│       └── Footer.tsx              # Footer with newsletter (Section 5)
├── public/
│   └── design/              # Design reference images
│       ├── 1.png            # Hero section design
│       ├── 2.png            # Community highlights design
│       ├── 3.png            # Categories design
│       ├── 4.png            # Discussions design
│       └── 5.png            # Footer design
└── package.json
```

## Components

### Reusable Components

- **Button**: Customizable button with variants (primary, secondary, outline) and sizes (sm, md, lg)

### Page Sections

1. **Header**: Sticky navigation with mobile responsive menu
2. **HeroSection**: Main landing section with statistics and call-to-action
3. **CommunityHighlights**: Grid layout showcasing community events
4. **ExploreCategories**: 9 category cards with gradient backgrounds
5. **FeaturedDiscussions**: List of trending discussion topics
6. **Footer**: Multi-column footer with newsletter subscription

## Customization

### Colors

The primary brand color is `#FF5C5C` (coral red). You can customize this in the component files or by modifying the Tailwind configuration.

### Adding Images

Replace placeholder images in the components with actual images:
- Hero section: Update `HeroSection.tsx`
- Community highlights: Update `CommunityHighlights.tsx`
- User avatars: Update `FeaturedDiscussions.tsx`

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary.
