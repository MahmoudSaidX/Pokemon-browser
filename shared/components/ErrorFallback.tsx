'use client'

const ErrorFallback = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center text-center mt-16 px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 text-red-500 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <p className="text-xl font-semibold text-red-700">
        Failed to load Pokémon
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Something went wrong. Please try again.
      </p>

      <button
        onClick={onRetry}
        className="mt-6 px-5 py-2.5 bg-red-600 cursor-pointer text-white text-sm rounded-xl hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      >
        Retry
      </button>
    </div>
  )
}

export default ErrorFallback
