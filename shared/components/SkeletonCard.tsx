'use client'

import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-lg bg-white shadow p-4">
      <div className="h-32 bg-gray-200 rounded mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}

export default SkeletonCard
