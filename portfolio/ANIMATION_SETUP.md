# Portfolio Animation System

This portfolio uses **Framer Motion** and **Intersection Observer API** for smooth scroll animations and rendering effects.

## Installation

The following packages are already installed:
- `framer-motion` - For animations
- `react-intersection-observer` - For scroll detection

## Components

### 1. AnimatedSection
Wraps content to trigger animations when scrolling into view.

**Props:**
- `variant` (string): Animation type
  - `'fadeIn'` - Fade in
  - `'slideInUp'` - Slide up
  - `'slideInLeft'` - Slide from left
  - `'slideInRight'` - Slide from right
  - `'scaleIn'` - Scale up
  - `'fadeInUp'` - Fade in and slide up
- `delay` (number): Delay in seconds (default: 0)
- `duration` (number): Animation duration in seconds (default: 0.6)
- `threshold` (number): When to trigger (0-1, default: 0.1)
- `className` (string): CSS class

**Example:**
```jsx
import { AnimatedSection } from './components';

<AnimatedSection variant="slideInUp" duration={0.6}>
  <h2>Your Content</h2>
</AnimatedSection>
```

### 2. StaggerContainer
Animates multiple children with staggered timing.

**Props:**
- `staggerDelay` (number): Delay between each child in seconds (default: 0.1)
- `duration` (number): Animation duration (default: 0.6)
- `threshold` (number): When to trigger (default: 0.15)
- `className` (string): CSS class

**Example:**
```jsx
import { StaggerContainer } from './components';

<StaggerContainer staggerDelay={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerContainer>
```

### 3. ParallaxSection
Creates parallax scrolling effect for depth.

**Props:**
- `strength` (number): Parallax intensity (default: 30, higher = more movement)
- `className` (string): CSS class

**Example:**
```jsx
import { ParallexSection } from './components';

<ParallaxSection strength={50}>
  <h1>Hero Title</h1>
</ParallaxSection>
```

## Hook: useScrollAnimation

Manual scroll detection hook for custom animations.

**Returns:**
- `ref` - Attach to element you want to animate
- `isVisible` - Boolean indicating if element is in view

**Example:**
```jsx
import { useScrollAnimation } from './hooks';

const MyComponent = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0 }}>
      Content
    </div>
  );
};
```

## Features

✨ **Smooth Rendering**
- GPU acceleration enabled
- Sub-pixel rendering
- Optimized for 60fps

📱 **Responsive**
- Mobile-friendly animations
- Touch-optimized
- Respects `prefers-reduced-motion`

🎨 **Customizable**
- Multiple animation variants
- Adjustable timing
- Configurable scroll thresholds

## Performance Tips

1. **Use appropriate thresholds** - Higher threshold = animations trigger later (less overhead)
2. **Limit stagger items** - Too many staggered items can impact performance
3. **Use ParallaxSection sparingly** - Only on hero/key sections
4. **Test on mobile** - Animations on low-end devices can stutter

## Accessibility

The system respects `prefers-reduced-motion` for users who prefer reduced animations. CSS is configured to disable animations for these users automatically.

## File Structure

```
src/
├── components/
│   ├── AnimatedSection.jsx
│   ├── StaggerContainer.jsx
│   ├── ParallaxSection.jsx
│   └── index.js
├── hooks/
│   ├── useScrollAnimation.js
│   └── index.js
├── App.jsx
├── App.css
└── index.css
```

## Customization

To add new animation variants, edit `AnimatedSection.jsx` `variants` object:

```jsx
const variants = {
  fadeIn: { /* ... */ },
  slideInUp: { /* ... */ },
  // Add your custom variant here
  customVariant: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  }
};
```

## Next Steps

Replace the placeholder content in `App.jsx` with your actual portfolio content:
- Update hero section
- Add your projects
- Add your skills
- Add contact information
- Customize colors and styling
