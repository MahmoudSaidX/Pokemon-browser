'use client'

import React, { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setPageInURL = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
  }

  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = []
    const maxVisible = 5
    const isTruncated = totalPages > maxVisible

    if (isTruncated) {
      const firstPages = [1, 2, 3, 4, 5]
      const lastPages = [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]

      if (currentPage <= 3) {
        pages.push(...firstPages, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', ...lastPages)
      } else {
        pages.push(
          1,
          '...',
          currentPage - 2,
          currentPage - 1,
          currentPage,
          '...',
          totalPages
        )
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    }

    return pages
  }, [currentPage, totalPages])

  const handleClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      setPageInURL(page)
    }
  }

  return (
    <nav
      className="flex flex-col items-center gap-2 text-sm"
      aria-label="Pagination Navigation"
    >
      <ul className="flex items-center gap-1">
        <li>
          <button
            className="px-3 py-2 rounded shadow-sm bg-white text-black font-bold cursor-pointer disabled:opacity-50"
            onClick={() => setPageInURL(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            {'<'} <span className="hidden md:inline">Previous</span>
          </button>
        </li>

        {pageNumbers.map((page, idx) => (
          <li key={`${page}-${idx}`}>
            <button
              className={`px-3 py-2 rounded shadow-sm font-bold cursor-pointer ${
                page === currentPage
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => handleClick(page)}
              disabled={page === '...'}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className="px-3 py-2 rounded shadow-sm bg-white text-black font-bold cursor-pointer disabled:opacity-50"
            onClick={() => setPageInURL(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            <span className="hidden md:inline">Next</span> {'>'}
          </button>
        </li>
      </ul>

      <p className="text-gray-600">
        Page {currentPage} of {totalPages} (20 Pokémon shown)
      </p>
    </nav>
  )
}

export default Pagination
