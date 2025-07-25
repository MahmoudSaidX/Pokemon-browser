'use client'

import React from 'react'
import SkeletonCard from './SkeletonCard'

const GridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 20 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  )
}

export default GridSkeleton
