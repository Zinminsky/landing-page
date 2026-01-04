# Active K9 Academy Landing Page - React Version

This landing page has been converted to React.js and matches the Figma design exactly, including layout, colors, typography, and all visual elements.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Images Setup
The images need to be placed in the `public/images/` directory for React to serve them correctly.

**Important:** Move all images from the root `images/` folder to `public/images/` folder.

Required images:
- `logo.png` - Company logo
- `hero-image.svg` - Hero section image
- `service-1.png` through `service-4.png` - Service cards images
- `section-image-1.svg` and `section-image-2.svg` - Section images
- `map-screenshot.png` - Map image
- `contact-image.png` - Contact section image
- `background-image.png` - Background image
- `facebook-icon.svg`, `instagram-icon.svg`, `linkedin-icon.svg` - Social media icons

### Running the Project

1. Move images from `images/` to `public/images/` folder
2. Start the development server:
```bash
npm start
```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a production build:
```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## Project Structure

```
Landing_Page/
├── public/
│   ├── images/          # All images should be here
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── KeyOutcomes.jsx
│   │   ├── HumanFocused.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main App component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Features

- **React Components**: Modular component structure for easy maintenance
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Form Handling**: Contact form with React state management
- **Scroll Animations**: Intersection Observer API for fade-in animations
- **Responsive Design**: Mobile-friendly layout

## Design Specifications

### Colors
- Primary Text: `#331B3B`
- Background: `#FFFFFF`
- Accent Orange: `#FD5621`
- Accent Yellow: `#FDC221`
- Light Blue: `#ECF7FF`
- Light Orange: `rgba(255, 222, 212, 0.3)`
- Text Secondary: `rgba(51, 27, 59, 0.66)`

### Typography
- Primary Font: Hind Vadodara (400, 500, 600, 700)
- Heading Font: Playfair Display (700)
- Quote Font: Indie Flower (400)

### Layout
- Container Max Width: 1400px
- Responsive breakpoints at 1200px and 768px

## Sections

1. **Header** - Logo, navigation, and social icons
2. **Hero Section** - Main title, description, and CTA button
3. **Services Section** - Four service cards with images
4. **Experience Section** - "We've Experienced It All" content
5. **Why Choose Section** - Four feature cards explaining benefits
6. **Key Outcomes Section** - List of training outcomes
7. **Human Focused Approach Section** - Detailed approach description with contact form
8. **Map Section** - Location map
9. **Footer** - Copyright information

## Browser Support

This page is designed to work in all modern browsers. For best results, use:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- React 18.2.0
- React DOM 18.2.0
- Create React App
