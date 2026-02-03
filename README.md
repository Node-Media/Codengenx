# CodengenX - Software & Ed-Tech Company

A modern, scalable Next.js 15 application built with TypeScript and Tailwind CSS, following industry best practices for enterprise-level development.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

This project follows a well-organized structure for scalability and maintainability:

```
Codengenx/
├── app/                    # Next.js App Router (pages & routes)
├── components/             # React components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── home/              # Page-specific components
│   ├── ui/                # Reusable UI components
│   └── shared/            # Shared components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript definitions
├── constants/             # App constants & config
└── public/                # Static assets
```

📖 **For detailed structure documentation, see [STRUCTURE.md](./STRUCTURE.md)**

## ✨ Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Component-based architecture**
- ✅ **Custom hooks** for reusable logic
- ✅ **Organized folder structure**
- ✅ **Type-safe with interfaces**
- ✅ **SEO optimized**
- ✅ **Responsive design**
- ✅ **Performance optimized**

## 🏗️ Architecture Highlights

### Separation of Concerns
- Pages contain only routing logic
- Components are modular and reusable
- Business logic in utility functions
- Type definitions centralized

### Component Organization
- **Layout**: Navbar, Footer (used globally)
- **UI**: Button, Card, CountUp (reusable design system)
- **Home**: Section components (page-specific)
- **Shared**: Logo, Container, SectionHeader (common across pages)

### Path Aliases
Clean imports using `@/` prefix:

```tsx
import Button from '@/components/ui/Button';
import { formatNumber } from '@/lib/utils';
import { NavLink } from '@/types';
```

## 📄 Pages

- **Home** - Hero, services overview, core values, training programs
- **About Us** - Company story, mission, team
- **Services** - Web development, mobile apps, cloud solutions
- **Blog** - Technical articles and case studies
- **Contact** - Contact form and information

## 🔧 Key Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Space Grotesk, JetBrains Mono
- **Icons**: React Icons 5.5

## 📚 Documentation

- [Project Structure Guide](./STRUCTURE.md) - Detailed folder structure and best practices
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎨 Component Usage Examples

### Using UI Components

```tsx
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

<Button variant="primary" size="lg">
  Click Me
</Button>

<Card hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Using Shared Components

```tsx
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';

<Container size="lg">
  <SectionHeader
    label="Our Services"
    title="What We Offer"
    description="Comprehensive solutions for your business"
  />
</Container>
```

## 🔐 Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Update values in `.env.local` with your configuration

## 🚦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📈 Best Practices Implemented

✅ Component reusability  
✅ Type safety with TypeScript  
✅ Clean code architecture  
✅ Separation of concerns  
✅ DRY principle  
✅ Consistent naming conventions  
✅ Optimized performance  
✅ Accessible components  

## 🤝 Contributing

When contributing to this project:
1. Follow the existing folder structure
2. Use TypeScript for all new files
3. Keep components small and focused
4. Add proper type definitions
5. Use constants instead of hardcoded values
6. Write meaningful commit messages

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ by CodengenX Team
