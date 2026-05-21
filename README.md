# CineVault

A beautiful, immersive movie tracking application inspired by the elegant design of Marginalia. Track your cinematic journey with style.

![CineVault Preview](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=600&fit=crop)

## Features

- **Year-In-Watching Shelf**: Horizontal scrolling film strip showcasing your watched movies
- **Detailed Movie Cards**: Click any movie to see full details including ratings, reviews, and metadata
- **Statistics Dashboard**: Track your viewing habits with beautiful visualizations
- **Genre Palette**: Visual breakdown of your movie preferences
- **Film Strip Aesthetic**: Authentic cinema-inspired design with perforations and spotlight effects

## Design Philosophy

CineVault embraces a **dark, elegant aesthetic** inspired by:
- Anthropic/Claude's visual language
- Classic cinema and film photography
- Minimalist yet warm color palettes

**Colors:**
- Background: `#0a0a0a` (deep charcoal)
- Accent: `#d4a574` (warm amber gold)
- Surface: `#141414` (elevated dark)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for **GitHub Pages** deployment:

1. Push to GitHub
2. Go to Settings → Pages
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main

## Data Structure

Movies are stored in `lib/data.ts`. Each movie includes:

```typescript
interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  director: string;
  country: string;
  genre: string[];
  rating: number;
  watchedDate: string;
  poster: string;
  color: string;
  review?: string;
  duration?: number;
}
```

## Customization

To add your own movies, edit `lib/data.ts`:

1. Add new movie objects to the `movies` array
2. Use any color for the `color` field (shown as poster placeholder)
3. Update `stats` object if needed

## License

MIT License - feel free to use this for your own movie collection!