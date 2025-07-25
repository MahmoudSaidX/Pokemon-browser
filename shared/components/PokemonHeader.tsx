'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type PokemonHeaderProps = {
  description: string
}

const navLinks = [
  {
    href: '/page-controls',
    label: 'Page Controls',
  },
  {
    href: '/infinite-scroll',
    label: 'Infinite Scroll',
  },
]

const PokemonHeader: React.FC<PokemonHeaderProps> = ({ description }) => {
  const pathname = usePathname()

  return (
    <header className="p-6 container mx-auto flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold text-center">⚡ Pokédex</h1>
      <p className="text-center text-gray-500">{description}</p>

      <nav>
        <ul className="flex gap-3 items-center justify-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`border border-gray-200  rounded-md py-1 px-3 cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default PokemonHeader
