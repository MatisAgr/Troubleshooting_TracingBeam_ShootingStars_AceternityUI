# 🌟 Troubleshooting TracingBeam & ShootingStars - Aceternity UI

A modern React application showcasing **Aceternity UI components** with shooting stars animation and tracing beam scroll effects. This project demonstrates the integration and troubleshooting of these beautiful space-themed UI components.

## 🚀 Live Demo

### See the [Codesandbox](https://codesandbox.io/p/github/MatisAgr/Troubleshooting_TracingBeam_ShootingStars_AceternityUI/draft/peaceful-andras)

Navigate between pages to see different effects:
- **Home (`/`)**: Shooting stars with enhanced visibility (configs boosted for demo)
- **About (`/about`)**: Tracing beam effect with disabled shooting stars for better UX

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion) v12
- **Routing**: React Router DOM v7
- **UI Components**: Aceternity UI

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MatisAgr/Troubleshooting_TracingBeam_ShootingStars_AceternityUI.git
cd Troubleshooting_TracingBeam_ShootingStars_AceternityUI
```

2. **Install dependencies:**
```bash
npm install --legacy-peer-deps
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:5173](http://localhost:5173)

## 🎮 Configuration & Troubleshooting

### 🌠 Shooting Stars Configuration

Customize shooting stars in [`src/components/Space/Layout.tsx`](src/components/Space/Layout.tsx):

```tsx
<ShootingStars
  minSpeed={10}           // Minimum star speed
  maxSpeed={30}           // Maximum star speed  
  minDelay={1200}         // Minimum delay between stars (ms)
  maxDelay={4200}         // Maximum delay between stars (ms)
  starColor="#9E00FF"     // Star color
  trailColor="#2EB9DF"    // Trail color
  starWidth={100}         // Star width (boosted for demo visibility)
  starHeight={100}        // Star height (boosted for demo visibility)
/>
```

> **Note**: `starWidth` and `starHeight` are intentionally boosted for better visibility in this demo.


### 🔧 Force Shooting Stars on All Pages

To enable shooting stars on all pages (including `/about`), modify [`src/App.tsx`](src/App.tsx):

```tsx
// Change this line:
<SpaceLayout showStars={!isAboutPage}>

// To this:
<SpaceLayout showStars={true}>
```

**Why this matters**: The `/about` page disables shooting stars by default to showcase the TracingBeam component without visual interference.


## 🐛 Issue & Solution

### ⚡ Issue: TracingBeam not working properly when ShootingStars is enabled
**Problem**: The TracingBeam component may not render correctly when ShootingStars animations are active on the same page.

**Solution**: 
- **Disable ShootingStars on pages using TracingBeam** (approach used in this project)

**Implementation**:
```tsx
// In App.tsx - Conditional rendering based on route
const isAboutPage = location.pathname === '/about';

<SpaceLayout showStars={!isAboutPage}>
  {/* TracingBeam works smoothly on /about without shooting stars */}
</SpaceLayout>
```

## 📝 Scripts

```bash
npm run dev      # Start development server
```

## 🎨 Aceternity UI Components Used

- **ShootingStars**: [Documentation](https://ui.aceternity.com/components/shooting-stars-and-stars-background)
- **StarsBackground**: [Documentation](https://ui.aceternity.com/components/shooting-stars-and-stars-background)  
- **TracingBeam**: [Documentation](https://ui.aceternity.com/components/tracing-beam)

