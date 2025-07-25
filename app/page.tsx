import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 sm:px-12 md:px-20 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          📘 Pokémon Browser Project Documentation
        </h1>

        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/page-controls"
            className="bg-black text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-gray-800 transition cursor-pointer"
          >
            🔁 Pagination View
          </Link>
          <Link
            href="/infinite-scroll"
            className="bg-black text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-gray-800 transition cursor-pointer"
          >
            🔄 Infinite Scroll View
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">🧪 Task Overview</h2>
          <p>
            Build a responsive Pokémon browser using <strong>React</strong> and{' '}
            <strong>TypeScript</strong>. The app includes:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Two list views: Pagination and Infinite Scroll</li>
            <li>Dedicated Pokémon detail page</li>
            <li>Skeleton loaders and error fallback UI</li>
            <li>Fully responsive grid-based layout</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">🔧 Tech Stack</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>React 19</strong> with App Router
            </li>
            <li>
              <strong>TypeScript</strong> for strict typing
            </li>
            <li>
              <strong>Tailwind CSS</strong> for modern styling
            </li>
            <li>
              <strong>React Query</strong> for data fetching
            </li>
            <li>
              <strong>Vercel</strong> for deployment
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">📁 Folder Structure</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`app/
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
`}
          </pre>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">🔗 API Usage</h2>
          <p>
            Data is fetched from the{' '}
            <a
              href="https://pokeapi.co/"
              className="text-blue-600 underline"
              target="_blank"
            >
              PokéAPI
            </a>
            .
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <code>/pokemon?limit=20&amp;offset=0</code> - List endpoint with
              pagination
            </li>
            <li>
              <code>{`/pokemon/{id}`}</code> - Pokémon details
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">📦 Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Pagination with URL search params</li>
            <li>Infinite scroll with intersection observer</li>
            <li>Animated stat bars and color-coded type badges</li>
            <li>Error boundaries and loading skeletons</li>
            <li>Dynamic image fallback handling</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">🚀 Deployment</h2>
          <p>
            Deployed via
            <a
              href="https://vercel.com"
              className="text-blue-600 underline"
              target="_blank"
            >
              Vercel
            </a>
            .
          </p>
          <p>To run locally:</p>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mt-2">
            {`npm install
npm run dev`}
          </pre>
        </section>

        <footer className="text-sm text-gray-500 pt-4 border-t mt-10">
          <p>
            Built for the frontend interview task. See
            <a
              href="https://pokeapi.co"
              target="_blank"
              className="text-blue-600 underline"
            >
              PokéAPI
            </a>
            for data.
          </p>
        </footer>
      </div>
    </main>
  )
}
