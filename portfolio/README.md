# Portfolio

A modern, animated portfolio website built with React and Vite, featuring smooth scroll animations, parallax effects, and interactive hover components.

## Features

- ✨ **Smooth Scroll Animations** - Elements animate as they come into view
- 🎨 **Parallax Effects** - Dynamic visual depth with parallax sections
- 🎯 **Interactive Hover Cards** - Engaging hover states and interactions
- 📱 **Responsive Design** - Mobile-friendly layout
- ⚡ **Fast Performance** - Built with Vite for instant HMR and optimized production builds
- 🎬 **Framer Motion** - Advanced animation library for smooth transitions

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **Framer Motion 12** - Animation library
- **React Router DOM 7** - Client-side routing
- **React Intersection Observer 10** - Scroll detection
- **ESLint** - Code linting

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── AnimatedButton.jsx
│   ├── AnimatedSection.jsx
│   ├── HoverCard.jsx
│   ├── ParallaxSection.jsx
│   └── StaggerContainer.jsx
├── hooks/            # Custom React hooks
│   └── useScrollAnimation.js
├── pages/            # Page components
│   └── ResumePage.jsx
├── assets/           # Static assets
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` with hot module replacement enabled.

## Building for Production

Build and optimize for production:
```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

## Deployment

Your project is configured for deployment to any static hosting platform (Netlify, Vercel, GitHub Pages, etc.). The build output directory is `dist/`.

Steps:
1. Run `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Set the base URL in `vite.config.js` if deploying to a subdirectory

## Animation Setup

See [ANIMATION_SETUP.md](./ANIMATION_SETUP.md) for detailed information about the animation system and how to add new animated components.

## License

Feel free to use this portfolio as a template for your own projects!
