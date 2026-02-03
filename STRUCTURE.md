# CodengenX - Project Structure

A modern Next.js 15 application with TypeScript, following best development practices for scalability and maintainability.

## 🏗️ Project Structure

```
Codengenx/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups (optional)
│   ├── api/                      # API routes
│   ├── about/                    # About page
│   ├── blog/                     # Blog page
│   ├── contact/                  # Contact page
│   ├── services/                 # Services page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
│
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/                     # Home page specific components
│   │   ├── HeroSection.tsx
│   │   ├── CoreValuesSection.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── TrainingSection.tsx
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── CountUp.tsx
│   │   └── StatCard.tsx
│   └── shared/                   # Shared components (optional)
│
├── lib/                          # Utility functions
│   ├── utils.ts                  # General utilities
│   └── cn.ts                     # Class name merger
│
├── hooks/                        # Custom React hooks
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
│
├── types/                        # TypeScript type definitions
│   └── index.ts
│
├── constants/                    # Constants and configuration
│   └── index.ts
│
├── public/                       # Static assets
│   └── assets/
│       └── hero_img.webp
│
├── .env.example                  # Environment variables template
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 📁 Folder Descriptions

### `app/`
- **Purpose**: Contains all pages and routing using Next.js 13+ App Router
- **Best Practice**: Keep this directory clean with only routing logic
- **Files**: Each `page.tsx` should be minimal, importing components from the `components/` folder

### `components/`
Organized into three main categories:

#### `components/layout/`
- **Purpose**: Global layout components used across multiple pages
- **Examples**: Navbar, Footer, Sidebar, Header
- **Usage**: Import in layout.tsx or pages that need them

#### `components/home/` (or page-specific folders)
- **Purpose**: Components specific to a particular page
- **Examples**: HeroSection, CoreValuesSection, etc.
- **Benefit**: Keeps page files clean and components reusable

#### `components/ui/`
- **Purpose**: Reusable UI components (design system)
- **Examples**: Button, Card, Input, Modal, CountUp
- **Best Practice**: Make these generic and highly reusable

### `lib/`
- **Purpose**: Utility functions and helper methods
- **Examples**: API clients, formatters, validators
- **Best Practice**: Pure functions without side effects

### `hooks/`
- **Purpose**: Custom React hooks
- **Examples**: useScrollPosition, useMediaQuery, useDebounce
- **Best Practice**: Prefix all files with "use"

### `types/`
- **Purpose**: TypeScript type definitions and interfaces
- **Best Practice**: Export all types from index.ts for easy importing

### `constants/`
- **Purpose**: Application-wide constants, configuration
- **Examples**: API endpoints, navigation links, company info
- **Best Practice**: Never hardcode values, use constants

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 🎨 Component Architecture

### Component Organization Pattern

```tsx
// Page component (app/page.tsx)
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';

export default function Page() {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
}

// Section component (components/home/Section1.tsx)
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Section1() {
  return (
    <section>
      <Card>
        <h2>Title</h2>
        <Button>Click me</Button>
      </Card>
    </section>
  );
}
```

## 📦 Importing Convention

Use path aliases defined in `tsconfig.json`:

```tsx
// ✅ Good
import Button from '@/components/ui/Button';
import { formatNumber } from '@/lib/utils';
import { NavLink } from '@/types';

// ❌ Avoid
import Button from '../../../components/ui/Button';
```

## 🎯 Best Practices Implemented

### 1. **Separation of Concerns**
- Pages contain only routing logic
- Components are broken down into logical pieces
- Business logic is in lib/
- Types are centralized

### 2. **Component Reusability**
- UI components are generic and reusable
- Section components are composable
- Consistent prop patterns

### 3. **Type Safety**
- Full TypeScript coverage
- Proper interface definitions
- Type exports from centralized location

### 4. **Scalability**
- Clear folder structure
- Easy to add new features
- Logical grouping of related code

### 5. **Maintainability**
- Single responsibility principle
- DRY (Don't Repeat Yourself)
- Clear naming conventions

## 🔧 Adding New Features

### New Page
1. Create folder in `app/` (e.g., `app/portfolio/`)
2. Add `page.tsx` in that folder
3. Create page-specific components in `components/portfolio/`
4. Import and compose components in page.tsx

### New Component
1. Determine category (ui, layout, or page-specific)
2. Create component file in appropriate folder
3. Export and use where needed

### New API Route
1. Create folder in `app/api/` (e.g., `app/api/contact/`)
2. Add `route.ts` with handler functions
3. Implement GET, POST, etc. as needed

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## 📚 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk, JetBrains Mono
- **Icons**: React Icons

## 🤝 Contributing

When adding new code:
1. Follow the existing folder structure
2. Use TypeScript for type safety
3. Keep components small and focused
4. Add proper TypeScript interfaces
5. Use constants instead of hardcoded values

## 📝 Notes

- This structure follows Next.js 13+ App Router conventions
- Components use Server Components by default
- Add `'use client'` only when needed (state, effects, browser APIs)
- All paths use the `@/` alias for cleaner imports

---

Built with ❤️ by CodengenX Team
