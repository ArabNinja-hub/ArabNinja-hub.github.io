# Ronisher Bwalya — Personal Portfolio

> "Building digital products, exploring ideas and turning real-world problems into practical technology solutions."

Official production-ready personal portfolio website for **Ronisher Bwalya**, Web Developer and Technology Entrepreneur studying at Copperbelt University, Zambia.

Live site: [https://arabninja-hub.github.io/](https://arabninja-hub.github.io/)

---

## 🛠️ Technology Stack

- **Frontend Core:** [React 18](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Styling & Design System:** [Tailwind CSS](https://tailwindcss.com/) (Custom Dark-First Palette)
- **Typography:** Inter (Sans-serif) & JetBrains Mono (Monospace)
- **Icons:** [Lucide Icons](https://lucide.dev/) + Custom SVG Monograms
- **SEO & Discoverability:** Open Graph, Twitter Cards, Schema.org JSON-LD Structured Data, `sitemap.xml`, and `robots.txt`
- **CI/CD & Hosting:** GitHub Actions & GitHub Pages

---

## 📂 Project Architecture

```
ronisher-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Monogram branded SVG favicon
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Search engine XML sitemap
├── src/
│   ├── components/
│   │   ├── About.jsx           # Editorial background & research pillars
│   │   ├── AbstractVisual.jsx  # Interactive system topology visual
│   │   ├── Contact.jsx         # Verified communication & GitHub channels
│   │   ├── Footer.jsx          # Dynamic copyright, credentials & links
│   │   ├── GithubIcon.jsx      # High-performance inline SVG GitHub icon
│   │   ├── Hero.jsx            # High-impact introduction & CTAs
│   │   ├── Navbar.jsx          # Sticky responsive header & mobile drawer
│   │   ├── ProjectCard.jsx     # Project preview cards with status tags
│   │   ├── ProjectModal.jsx    # Accessible architectural case study modal
│   │   ├── Projects.jsx        # Project gallery & modal controller
│   │   └── Skills.jsx          # Two-category verified skill matrices
│   ├── config/
│   │   └── portfolioData.js    # Single source of truth for portfolio data
│   ├── App.jsx                 # Root component with skip links & observer
│   ├── index.css               # Tailwind directives & a11y focus rings
│   └── main.jsx                # Application mounting entrypoint
├── index.html                  # Semantic root with rich SEO metadata
├── package.json                # Project dependencies & npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom colors, fonts & animations
└── vite.config.js              # Vite configuration (base: '/')
```

---

## 🚀 Local Development

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm (version 9+ or 10+)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArabNinja-hub/ArabNinja-hub.github.io.git
   cd ArabNinja-hub.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-optimized bundle is output to the `dist/` folder.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 GitHub Pages Deployment Guide

This website is configured for automated deployment to **https://arabninja-hub.github.io/** using GitHub Actions.

### Deployment Steps:

1. **Create the GitHub Pages repository on your account:**
   - Repository Name: `ArabNinja-hub.github.io`
   - Repository Visibility: **Public**

2. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub: `https://github.com/ArabNinja-hub/ArabNinja-hub.github.io`
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment > Source**, select **GitHub Actions**

3. **Push the codebase to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial production portfolio release"
   git branch -M main
   git remote add origin https://github.com/ArabNinja-hub/ArabNinja-hub.github.io.git
   git push -u origin main
   ```

4. **Automated Deployment:**
   - The workflow in `.github/workflows/deploy.yml` will automatically trigger on push to `main`.
   - It runs `npm ci`, builds the site via `npm run build`, uploads the `dist` directory, and deploys it live to `https://arabninja-hub.github.io/`.
   - Verify deployment under the **Actions** tab of your repository.

---

## 👤 Author

**Ronisher Bwalya**  
Web Developer & Technology Entrepreneur  
Copperbelt University • Kitwe, Zambia  
GitHub: [@ArabNinja-hub](https://github.com/ArabNinja-hub)
