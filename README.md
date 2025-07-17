

Built with React and Tailwind CSS.

## Features

- 🎨 **Minimalist Design** - Clean, elegant interface with focus on typography and whitespace
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Fast loading with smooth animations
- 🎯 **Interactive Elements** - Subtle hover effects and transitions
- 📧 **Contact Form** - Functional contact form with validation
- 🔗 **Social Integration** - Links to professional social profiles
- 🖼️ **Project Showcase** - Modal-based project display with detailed information

## Design Inspiration

This portfolio is inspired by the minimalist design approach of [Nael Messaoudene](https://www.naelmessaoudene.com), featuring:
- Large, bold typography
- Clean black and white color scheme
- Generous whitespace
- Subtle animations and transitions
- Focus on content over decoration

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Clean, modern typography
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ProjectSites
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
ProjectSites/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Components

### Navigation
Fixed navigation bar with smooth scrolling to sections and backdrop blur effect.

### Hero
Large typography hero section with your name and a brief introduction.

### About
Two-column layout with personal information, skills, and experience.

### Projects
Grid layout showcasing your projects with modal popups for detailed information.

### Contact
Contact form with social media links and contact information.

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.js` - Your name and tagline
- `src/components/About.js` - Your bio, skills, and experience
- `src/components/Projects.js` - Your actual projects from matthewportfolio.vercel.app
- `src/components/Contact.js` - Your contact details and social links

### Projects
Replace the placeholder projects in `src/components/Projects.js` with your actual projects from your Matthew portfolio. Each project should include:
- Title
- Description
- Technologies used
- Project image
- Live link
- Category

### Styling
The design uses a minimalist approach with:
- Black background (#000000)
- White text (#ffffff)
- Gray accents for secondary text
- Inter font family
- Light font weights (300-400)

### Colors
The color scheme can be customized in `tailwind.config.js` under the `theme.extend.colors` section.

## Deployment

The app can be deployed to any static hosting service:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

### Recommended Platforms
- **Vercel** - Easy deployment with automatic builds
- **Netlify** - Great for static sites with form handling
- **GitHub Pages** - Free hosting for open source projects

## Performance

The site is optimized for performance with:
- Minimal JavaScript bundle
- Optimized images and assets
- Efficient CSS with Tailwind
- Smooth scrolling and animations
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Design inspiration: [Nael Messaoudene](https://www.naelmessaoudene.com)
- Typography: [Inter Font](https://rsms.me/inter/)
- Icons: Heroicons (via SVG)
- Framework: React + Tailwind CSS 
