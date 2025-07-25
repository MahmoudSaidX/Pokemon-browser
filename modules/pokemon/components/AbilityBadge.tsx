'use client'

import React from 'react'

interface Ability {
  name: string
  is_hidden?: boolean
}

interface AbilityBadgeProps {
  ability: Ability
}

const AbilityBadge: React.FC<AbilityBadgeProps> = ({ ability }) => {
  const { name, is_hidden } = ability

  return (
    <li className={`capitalize`}>
      <span
        className={`${
          is_hidden ? 'bg-gray-100' : ' bg-white'
        } border border-gray-100 rounded-full w-fit p-1 font-bold text-xs px-2`}
      >
        {name}
      </span>
      <span>
        {is_hidden ? (
          <span className="ml-1 text-xs text-gray-500">(Hidden)</span>
        ) : null}
      </span>
    </li>
  )
}

export default AbilityBadge
