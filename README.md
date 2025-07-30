# The-Gist

An hybrid news app that runs on web (Next.js) and mobile (React Native + Expo) for Android, iOS, and responsive web.

## 🏗️ Project Structure

```
The-Gist/
├── web/              # Next.js web application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx       # Multi-story home page
│   │   │   ├── layout.tsx     # Root layout with hydration fixes
│   │   │   └── globals.css    # Global styles
│   │   ├── components/
│   │   │   ├── NewsCard.tsx   # News card component for home page
│   │   │   ├── StoryViewer.tsx # Instagram Stories-style viewer
│   │   │   └── ClientOnly.tsx # Client-side rendering wrapper
│   │   └── types/
│   │       └── news.ts        # Local TypeScript interfaces
│   ├── next.config.ts         # Next.js configuration with image domains
│   ├── package.json
│   └── tsconfig.json
├── mobile/           # Expo React Native application
│   ├── App.tsx                # Main app with multi-story home page
│   ├── components/
│   │   ├── NewsCard.tsx       # Mobile news card component
│   │   └── StoryViewer.tsx    # Mobile Instagram Stories viewer
│   ├── metro.config.js        # Metro config for shared folder access
│   ├── package.json
│   └── tsconfig.json
├── shared/           # Shared types and utilities
│   ├── types/
│   │   └── news.ts            # TypeScript interfaces
│   ├── constants/
│   │   └── index.ts           # Mock news data and design tokens
│   ├── data/
│   └── utils/
└── # The Gist - AI News App

A cross-platform news application that provides AI-powered summaries of the latest news stories in an Instagram Stories-style interface.

## 🌟 Features

- **Instagram Stories Interface**: Swipe through news stories with auto-advance timers and progress bars
- **AI-Powered Summaries**: Get concise, intelligent summaries of news articles
- **Cross-Platform**: Available on both web and mobile platforms
- **Interactive Elements**: Like, follow, and share news stories
- **Responsive Design**: Optimized for all screen sizes
- **Card-Based Layout**: Beautiful, modern card design with blurred backgrounds
- **Dark Theme**: Sleek dark interface for comfortable reading

## 🏗️ Architecture

This is a monorepo containing:

- **`/web`** - Next.js 15.4.4 web application with Turbopack
- **`/mobile`** - Expo React Native application
- **`/shared`** - Shared TypeScript types and constants

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- For mobile development: Expo CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/oliviahe0111/The-Gist.git
   cd The-Gist
   ```

2. **Install web dependencies**
   ```bash
   cd web
   npm install
   ```

3. **Install mobile dependencies**
   ```bash
   cd ../mobile
   npm install
   ```

### Running the Applications

#### Web Application
```bash
cd web
npm run dev
```
The web app will be available at `http://localhost:3000`

#### Mobile Application
```bash
cd mobile
npx expo start
```
Scan the QR code with Expo Go app or run on simulator

## 📱 Usage

1. **Browse News**: View news stories in a grid layout on the home page
2. **Story Mode**: Tap any news card to enter Instagram Stories-style viewer
3. **Navigation**: 
   - Tap left/right sides to navigate between stories
   - Stories auto-advance every 5 seconds
   - Hold to pause auto-advance
4. **Interactions**:
   - ❤️ Like stories
   - 👥 Follow news sources
   - 📤 Share stories
   - ⋯ Access menu options

## 🛠️ Tech Stack

### Web
- **Framework**: Next.js 15.4.4 with Turbopack
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build**: Turbopack for fast development builds

### Mobile  
- **Framework**: Expo SDK 51+
- **Language**: TypeScript
- **Navigation**: React Native components
- **Styling**: React Native StyleSheet

### Shared
- **Types**: Shared TypeScript interfaces
- **Constants**: Centralized app constants
- **Data**: Mock news data structure

## 📁 Project Structure

```
The-Gist/
├── web/                    # Next.js web application
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   └── types/         # TypeScript types
│   ├── public/            # Static assets
│   └── package.json
├── mobile/                # Expo React Native app
│   ├── components/        # React Native components
│   ├── assets/           # App icons and images
│   └── package.json
├── shared/               # Shared code
│   ├── types/           # Shared TypeScript types
│   └── constants/       # App constants
└── README.md
```

## 🎨 Design Features

- **Consistent Branding**: "The Gist" attribution across platforms
- **Blurred Backgrounds**: Dynamic blurred image backgrounds for immersive experience
- **Card-Based Design**: Rounded corner cards with image/text layout
- **Cross-Platform Consistency**: Matching UI/UX between web and mobile
- **Interactive Animations**: Smooth transitions and hover effects
- **Progress Indicators**: Visual progress bars for story advancement

## 🚧 Development

### Adding New Features

1. **Shared Types**: Add new interfaces to `/shared/types/`
2. **Constants**: Update `/shared/constants/` for app-wide settings
3. **Web Components**: Add to `/web/src/components/`
4. **Mobile Components**: Add to `/mobile/components/`

### Code Style

- TypeScript for type safety
- Consistent component structure
- Shared types between platforms
- Responsive design principles

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created by [oliviahe0111](https://github.com/oliviahe0111)

---

*The Gist - Your AI-powered news summary* ✨         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.18.0+ (for Next.js compatibility)
- npm or yarn
- Expo CLI (optional, for mobile development)
- Expo Go app on your mobile device (for testing)

### Web Application (Next.js)

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Mobile Application (Expo)

1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Scan the QR code with:
   - **iOS**: Camera app or Expo Go app
   - **Android**: Expo Go app

## 📱 Features

### ✅ Implemented Features

- **Instagram Stories-Style News Viewer**: 
  - Auto-advancing stories (5 seconds each)
  - Progress bars showing story progression
  - Tap navigation (left/right) and keyboard controls
  - Like, Share, and Follow interactive buttons
  - Pause on hold/press functionality

- **Multi-Story Home Page**:
  - Grid layout displaying multiple news stories
  - Click/tap any story to enter Instagram Stories mode
  - Responsive design for both web and mobile

- **Hybrid Architecture**: Separate web and mobile apps with shared data structure
- **Responsive Design**: 
  - Desktop web: Centered story viewer (max-width mobile-style)
  - Mobile web & native: Full-screen immersive experience
- **Dynamic Content**: All content from shared JSON data source
- **Cross-Platform UI**: Consistent Instagram Stories experience across platforms
- **TypeScript**: Full type safety with shared interfaces

### 🎨 Instagram Stories Design Implementation

- **Story Viewer Component**: 
  - Full-screen overlay with background image
  - Progress bars at the top showing story sequence
  - Source name and close/menu buttons in header
  - Story title and summary text overlay
  - Bottom action buttons (Like, Follow, Share)
  - Auto-advance timer with smooth transitions

- **Navigation Controls**:
  - **Tap Navigation**: Left side = previous, right side = next
  - **Keyboard**: Arrow keys for navigation, Escape to close
  - **Touch**: Hold to pause, release to resume
  - **Buttons**: Like (heart), Follow (toggle), Share, Menu

- **Multi-Story Home Page**:
  - **Desktop**: Responsive grid of news cards
  - **Mobile**: Vertical scrolling list
  - **Interaction**: Click/tap any card to start story sequence

## 📊 JSON Data Structure

The app uses the following JSON structure for news content with 5 different stories:

```json
{
  "id": "1",
  "image_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "pubDate": "2024-07-29 14:30:00",
  "publishedDate": 1722265800000,
  "title": "Canada pledges additional weapons to Ukraine during surprise visit",
  "summary": "Prime Minister Trudeau, during an unannounced trip to Kyiv, announces Canada's commitment to send more weapons to Ukraine...",
  "source": "National Post",
  "category": "Politics"
}
```

### Mock Data Sources
- **5 Different News Stories** from various sources:
  - National Post (Politics)
  - TechCrunch (Technology) 
  - BBC News (Science)
  - Financial Times (Finance)
  - MIT Technology Review (Technology)

### Design Tokens
- **Colors**: Primary, secondary, background, text colors
- **Spacing**: XS(4px) to XL(32px) standardized spacing
- **Border Radius**: Small, medium, large radius values
- **Breakpoints**: Mobile (768px), Desktop (1024px)

## 🛠️ Technical Stack

### Web (Next.js)
- **Framework**: Next.js 15.4.4 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component with remote patterns
- **Responsive Design**: Tailwind responsive utilities
- **Configuration**: Custom webpack aliases for shared folder imports

### Mobile (Expo/React Native)
- **Framework**: Expo SDK 51+
- **Language**: TypeScript  
- **Navigation**: React Native core components with Instagram Stories navigation
- **Styling**: StyleSheet with responsive design
- **Image Handling**: React Native Image component
- **Metro Config**: Custom configuration for shared folder resolution

### Shared
- **Type Safety**: Shared TypeScript interfaces for NewsItem, StoryViewer props
- **Mock Data**: 5 different news stories with consistent data structure
- **Design Tokens**: Consistent spacing, colors, breakpoints, and sizing
- **Cross-Platform**: Metro config (mobile) and webpack alias (web) for shared imports

## 🔧 Development Notes

### Node.js Version
- **Required**: Node.js 18.18.0+ for Next.js compatibility
- **Current Issue**: If using Node.js 18.13.0, you may encounter compatibility warnings

### TypeScript Configuration
- **Web**: Path aliases configured for `@/*` (src folder), local types for compatibility
- **Mobile**: Metro config for shared folder access, relative imports to shared constants
- **Shared**: Common interfaces and data structure used by both platforms

### Cross-Platform Considerations
- **Styling**: Web uses Tailwind CSS classes, Mobile uses StyleSheet
- **Images**: Web uses Next.js Image with optimization, Mobile uses React Native Image  
- **Layout**: Web uses flexbox with CSS Grid, Mobile uses React Native flexbox
- **Navigation**: Web uses click events, Mobile uses touch events
- **Stories Implementation**: Consistent auto-advance, progress bars, and controls across platforms

### Instagram Stories Features
- **Auto-Advance**: 5-second timer per story with smooth transitions
- **Progress Indicators**: Multi-segment progress bars showing current story position  
- **Touch/Click Navigation**: Left/right tap zones for story navigation
- **Interactive Controls**: Like (heart with animation), Follow (toggle state), Share buttons
- **Keyboard Support**: Arrow keys for navigation, Escape to exit (web only)
- **Pause/Resume**: Hold to pause story progression, release to continue

## 🎯 Design Requirements Met

- ✅ **Instagram Stories Experience**: Full implementation with auto-advance, navigation, and controls
- ✅ **Multi-Story Home Page**: Grid layout with story selection functionality  
- ✅ **From Scratch**: Both apps built without templates
- ✅ **UI Implementation**: Instagram Stories-style interface with progress bars and interactions
- ✅ **Responsive**: Mobile-first design with consistent experience across platforms
- ✅ **Dynamic Content**: All content from shared JSON, no hardcoded text
- ✅ **Hybrid Architecture**: Optimized apps for web and mobile with shared data structure
- ✅ **Interactive Controls**: Like, Share, Follow buttons with state management
- ✅ **Cross-Platform Navigation**: Touch/click controls working on both platforms

## 🚨 Known Issues

1. **Node.js Version**: Requires Node.js 18.18.0+ for optimal Next.js compatibility
2. **Hydration Warnings**: Resolved with suppressHydrationWarning for browser extensions
3. **Image Domains**: Configured for Unsplash and other news image sources
4. **Module Resolution**: Uses relative imports for better compatibility across platforms

## 📈 Future Enhancements

- [ ] Add swipe gestures for mobile story navigation
- [ ] Implement actual sharing functionality (Web Share API)
- [ ] Add story reactions and comments
- [ ] Support for video stories
- [ ] API integration for dynamic news fetching
- [ ] User preferences and followed sources
- [ ] Dark mode support
- [ ] Accessibility improvements (screen reader support)
- [ ] Story analytics and engagement tracking

## 💡 Testing

### Web Testing
1. **Desktop**: Open http://localhost:3000, test Instagram Stories navigation with clicks and keyboard
2. **Mobile Web**: Use browser dev tools mobile simulation
3. **Story Features**: Test auto-advance, progress bars, like/follow buttons, pause on hold
4. **Navigation**: Verify left/right click zones, arrow keys, escape to close

### Mobile Testing  
1. **iOS**: Use Expo Go app to scan QR code
2. **Android**: Use Expo Go app to scan QR code
3. **Story Features**: Test touch navigation, auto-advance, interactive buttons
4. **Gestures**: Verify left/right tap zones, hold to pause functionality

### Instagram Stories Testing Checklist
- [ ] Stories auto-advance after 5 seconds
- [ ] Progress bars show current story position
- [ ] Left/right navigation works (tap zones on mobile, clicks on web)
- [ ] Like button toggles heart color (red when liked)
- [ ] Follow button toggles text and styling
- [ ] Share button logs story title (placeholder)
- [ ] Menu button shows (placeholder functionality)
- [ ] Hold/pause functionality works
- [ ] Keyboard controls work on web (arrow keys, escape)
- [ ] Stories close properly when sequence ends

---

**Built with ❤️ for Instagram Stories-style hybrid app development**
