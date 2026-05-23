# Agero — Design Studio Website

A premium creative agency website built with React + Vite + Tailwind CSS, inspired by the Agero Framer website.

## Stack

- **React 19** — UI framework
- **Vite** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling
- **React Router DOM v7** — client-side routing
- **Framer Motion v12** — animations & transitions

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/works` | Portfolio / Works |
| `/services` | Services |
| `/about` | About |
| `/blog` | Blog |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    layout/
      Header.jsx       # Fixed navigation header
      Footer.jsx       # Site footer with links
      MobileMenu.jsx   # Full-screen mobile menu
    sections/
      Hero.jsx
      ClientStrip.jsx
      MarqueeSection.jsx
      IntroStatement.jsx
      Testimonials.jsx
      RecentWorks.jsx
      ServicesPreview.jsx
      FounderSection.jsx
      Awards.jsx
      Pricing.jsx
      FAQ.jsx
      ContactSection.jsx
    ui/
      Button.jsx
      SectionHeader.jsx
      ProjectCard.jsx
      ServiceCard.jsx
      BlogCard.jsx
      Accordion.jsx
  data/
    projects.js
    services.js
    testimonials.js
    blogPosts.js
    awards.js
    pricing.js
  pages/
    Home.jsx
    Works.jsx
    Services.jsx
    About.jsx
    Blog.jsx
    Contact.jsx
    PrivacyPolicy.jsx
    TermsOfService.jsx
  App.jsx              # Router setup
  main.jsx             # Entry point
  index.css            # Global styles + Tailwind
```

## Design System

- **Fonts:** DM Serif Display (headings) + DM Sans (body) via Google Fonts
- **Colors:** Dark (`#0c0c0c`), Cream (`#f4f0e8`), Accent (`#e8623a`)
- **Animations:** Framer Motion scroll-triggered reveals, marquee CSS animations, accordion transitions
