'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white text-gray-800">
      <svg
        viewBox="0 0 1024 1024"
        className="w-40 h-40 text-red-500 mb-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="512" cy="512" r="400" fill="#FEE2E2" />
        <path
          d="M412 412 L612 612 M612 412 L412 612"
          stroke="#DC2626"
          strokeWidth="40"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-500 max-w-md mb-6">
        Sorry, we couldn’t find the page you were looking for. It might have
        been moved or deleted.
      </p>

      <Link
        href="/page-controls"
        className="inline-block px-6 py-3 cursor-pointer bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
      >
        Go back home
      </Link>
    </div>
  )
}
