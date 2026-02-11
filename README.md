<div align="center">

# 🚀 Vishal Kushwaha — Portfolio

**A modern, responsive developer portfolio built with Next.js, Tailwind CSS & Framer Motion**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[**Live Demo →**](https://vishal-kushwaha-info.netlify.app/)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Clean Light Theme** | Minimal, elegant UI with subtle animations |
| 📱 **Fully Responsive** | Optimized for all screen sizes — mobile, tablet & desktop |
| 🗺️ **Interactive Maps** | Click any education location to view it on an OpenStreetMap with smooth zoom-in & breathing circle animation |
| 🖼️ **Image Lightbox** | Click photos to view them in a full-screen popup with spring animations |
| ⏱️ **Dynamic Duration** | Experience section auto-calculates and displays work duration |
| 🔗 **Social Integration** | Direct links to GitHub, LinkedIn, WhatsApp, Instagram & Email |
| ⚡ **Smooth Animations** | Scroll-triggered animations powered by Framer Motion |
| 🧩 **shadcn/ui Components** | Beautiful, accessible UI components |

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4, shadcn/ui |
| **Animations** | Framer Motion |
| **Maps** | Leaflet + React-Leaflet (OpenStreetMap) |
| **Icons** | Lucide React |
| **Font** | Inter (Google Fonts) |
| **Deployment** | Vercel |

</div>

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets (images, photos)
│   ├── profile.webp         # Profile photo
│   ├── clg1-5.webp          # College campus photos
│   └── extra1-7.webp        # Extracurricular photos
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (Inter font, metadata)
│   │   ├── page.tsx         # Home page (composes all sections)
│   │   └── globals.css      # Tailwind config & custom styles
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx       # Fixed navbar + mobile hamburger
│   │   │   ├── Hero.tsx         # Profile photo, name & social links
│   │   │   ├── Experience.tsx   # Work experience with dynamic duration
│   │   │   ├── Education.tsx    # Timeline + photos + interactive maps
│   │   │   ├── Projects.tsx     # Project cards grid
│   │   │   ├── Skills.tsx       # Categorized skill badges
│   │   │   ├── Extras.tsx       # Coursework, extracurriculars & gallery
│   │   │   └── Footer.tsx       # Contact section + social buttons
│   │   └── ui/
│   │       ├── leaflet-map.tsx      # OpenStreetMap with breathing circle
│   │       ├── section-heading.tsx  # Reusable section heading
│   │       └── ...                  # shadcn/ui components
│   └── lib/
│       ├── data.ts          # All portfolio content & data
│       └── utils.ts         # Utility functions
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm / bun)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/vishalkushwaha2003/portfolio.git
cd portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the development server**

```bash
npm run dev
```

**4. Open in browser**

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎨 Customization

### Update Your Info

Edit **`src/lib/data.ts`** to replace with your own details:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ...
};
```

### Update Photos

Replace the images in the **`public/`** folder:

| File | Purpose |
|---|---|
| `profile.webp` | Your profile photo |
| `clg1-5.webp` | College/campus photos |
| `extra1-7.webp` | Extracurricular activity photos |

---

## 🌐 Deployment

### Deploy on Netlify (Recommended)

1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com/)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub and select the `portfolio` repository
5. Configure build settings:

   | Setting | Value |
   |---|---|
   | **Build command** | `npm run build` |
   | **Publish directory** | `.next` |

6. Click **"Deploy site"** ✅

> **Note:** Install the **Next.js plugin** for Netlify for full support.  
> Go to **Site settings → Build & deploy → Plugins** → Search and add `@netlify/plugin-nextjs`

### Other Platforms

```bash
# Build for production
npm run build

# The output will be in the .next/ folder
npm run start
```

---

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-vishal2003kushwaha@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vishal2003kushwaha@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vishal_Kushwaha-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vishal-kushwaha-947364249/)
[![GitHub](https://img.shields.io/badge/GitHub-vishalkushwaha2003-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vishalkushwaha2003)
[![Instagram](https://img.shields.io/badge/Instagram-vishal__jnv-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/vishal_jnv)

</div>

---

<div align="center">

by **Vishal Kushwaha**

⭐ Star this repo if you found it helpful!

</div>
