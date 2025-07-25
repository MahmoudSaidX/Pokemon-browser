'use client'

import React from 'react'

const SkeletonDetailCard = () => {
  return (
    <div className="animate-pulse bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl max-h-5xl">
      <div className="h-48 bg-gray-200 rounded mb-4" />
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
    </div>
  )
}

export default SkeletonDetailCard
