'use client'

import React from 'react'

const PokemonCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl p-4 shadow-md space-y-4">
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
    </div>
  )
}

export default PokemonCardSkeleton
