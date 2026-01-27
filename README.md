# Adnan Hameed - Portfolio Website (Next.js)

A high-end, professional portfolio website for Adnan Hameed, CEO & Founder of Aizentra Labs. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Dark theme with gradient accents (purple, blue, cyan)
- **Glassmorphism UI**: Premium glass-effect cards and components
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Performance**: Optimized for fast loading and smooth scrolling

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Company.tsx      # Aizentra Labs section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx        # Skills section
│       ├── Experience.tsx   # Experience section
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer
└── public/                  # Static assets (images)
```

## Customization

### Images

Replace placeholder images in the following locations:
- **Profile Image**: `components/sections/About.tsx` - Update the Image src
- **Project Images**: `components/sections/Projects.tsx` - Update Image srcs for each project

All images should be placed in the `/public` directory and referenced accordingly.

### Contact Information

Update contact details in:
- `components/sections/Contact.tsx` - Email and social links
- `app/layout.tsx` - SEO metadata

### Social Links

Update social media links in `components/sections/Contact.tsx`:
- LinkedIn
- GitHub

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder or connect your Git repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## License

© 2025 Aizentra Labs. All rights reserved.
