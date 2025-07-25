# 📘 Pokémon Browser Project Documentation

## 🧪 Task Overview

Build a responsive Pokémon browser using **React** and **TypeScript**. The app includes:

- Two list views: Pagination and Infinite Scroll
- Dedicated Pokémon detail page
- Skeleton loaders and error fallback UI
- Fully responsive grid-based layout

---

## 🔧 Tech Stack

- **React 19** with App Router
- **TypeScript** for strict typing
- **Tailwind CSS** for modern styling
- **React Query** for data fetching
- **Vercel** for deployment

---

## 📁 Folder Structure

```bash
app/
├── infinite-scroll/page.tsx         # Infinite scroll view
├── page-controls/page.tsx          # Pagination view
├── pokemon/[name]/page.tsx         # Detail page
├── layout.tsx                      # Root layout
├── not-found.tsx                   # 404 handler
├── globals.css                     # Global styles

modules/pokemon/
├── components/                     # Pokémon UI components
├── hooks/                          # Custom hooks for API
├── utils/                          # Utility functions

shared/
├── components/                     # Reusable shared components (UI)
├── lib/                            # Common utilities (e.g., api)
├── providers/                      # Context/Query providers

config/react-query.ts              # React Query client setup
public/                            # Static assets (e.g. images, icons)
```

---

## 🔗 API Usage

Data is fetched from the [PokéAPI](https://pokeapi.co/).

- `/pokemon?limit=20&offset=0` - List endpoint with pagination
- `/pokemon/{id}` - Pokémon details

---

## 📦 Features

- Pagination with URL search params
- Infinite scroll with intersection observer
- Animated stat bars and color-coded type badges
- Error boundaries and loading skeletons
- Dynamic image fallback handling

---

## 🚀 Deployment

Deployed via [Vercel](https://vercel.com).

To run locally:

```bash
npm install
npm run dev
```

---

_Built for the frontend interview task. See [PokéAPI](https://pokeapi.co) for data._
