'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PokemonItem } from '@/app/infinite-scroll/page'

const PokemonCard = ({ pokemonItem }: { pokemonItem: PokemonItem }) => {
  const id = pokemonItem.url.split('/')[6]
  const paddedId = String(id).padStart(3, '0')
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  const [imageError, setImageError] = useState(false)

  return (
    <Link
      href={`/pokemon/${id}`}
      aria-label={`View details for ${pokemonItem.name}`}
      title={`View ${pokemonItem.name} details`}
    >
      <article className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-md focus:scale-105 focus:shadow-md outline-none">
        <div className="bg-gray-50 rounded w-full h-40 flex items-center justify-center">
          {imageError ? (
            <div
              role="img"
              aria-label="Missing Pokémon image"
              title="Missing Pokémon image"
              className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-xl font-bold rounded cursor-help"
            >
              ❓
            </div>
          ) : (
            <Image
              src={imageUrl}
              alt={pokemonItem.name || 'Pokémon'}
              width={100}
              height={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTZlNmU2Ii8+PC9zdmc+"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <h3 className="font-semibold text-lg capitalize mt-4">
          {pokemonItem.name}
        </h3>

        <p className="text-gray-500 text-sm">#{paddedId}</p>
      </article>
    </Link>
  )
}

export default PokemonCard
