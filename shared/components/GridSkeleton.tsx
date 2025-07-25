'use client'

import React from 'react'
import SkeletonCard from './SkeletonCard'

const GridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-3">
      {Array.from({ length: 20 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  )
}

export default GridSkeleton
