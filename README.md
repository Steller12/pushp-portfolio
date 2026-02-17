# Pushp Gupta Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, and React Router. The site presents an introduction, tech stack, projects with animated transitions, project detail pages, achievements, and a downloadable CV.

## Features

- Responsive single-page portfolio layout
- Route-based project detail pages (`/projects/:slug`)
- Animated page wipe transition before project navigation
- Interactive project list with flip-card hover effect
- Centralized project and stack data in `src/data`
- Social links and downloadable CV in footer

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- React Router DOM 7
- Framer Motion
- React Icons

## Project Structure

```text
src/
  assets/
  components/
    Achievements.jsx
    Footer.jsx
    Header.jsx
    Intro.jsx
    PageWipe.jsx
    ProjectDetail.jsx
    Projects.jsx
    TechStack.jsx
  data/
    Projects.js
    TechStack.js
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

### 5. Run lint checks

```bash
npm run lint
```

## Content Updates

- Edit project entries in `src/data/Projects.js`
- Edit technology list in `src/data/TechStack.js`
- Update profile info in `src/components/Header.jsx`
- Replace CV file at `src/assets/Pushp_CV.pdf`
