'use client'

import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-gray-300 border-t-green-500 border-r-green-500" />
    </div>
  )
}

export default Spinner
