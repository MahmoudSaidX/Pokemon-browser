'use client'

import Image from 'next/image'
import { PokemonDetail } from '../hooks/usePokemon'
import { formatStat } from '../utils/format'
import AbilityBadge from './AbilityBadge'
import { useState } from 'react'

interface Props {
  pokemon: PokemonDetail
}

const typeColors: Record<string, string> = {
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-400',
  bug: 'bg-lime-500',
  psychic: 'bg-pink-500',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  rock: 'bg-stone-500',
  ice: 'bg-cyan-400',
  dragon: 'bg-indigo-500',
  dark: 'bg-gray-800',
  fairy: 'bg-pink-300',
  steel: 'bg-gray-400',
  ghost: 'bg-indigo-700',
  normal: 'bg-neutral-400',
  fighting: 'bg-red-700',
  flying: 'bg-sky-400',
}

const PokemonDetailCard = ({ pokemon }: Props) => {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full animate-fadeIn">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
        </div>
        <p className="text-purple-100 font-medium">
          #{String(pokemon.id).padStart(3, '0')}
        </p>
      </header>

      {/* Content */}
      <section className="p-6 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="space-y-6">
          <div className="flex justify-center w-full">
            <div className="w-80 h-80 bg-gray-100 rounded-full flex items-center justify-center relative">
              {imageError ? (
                <div className="text-gray-300 text-5xl">⚪</div>
              ) : (
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={400}
                  height={400}
                  className="object-contain"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>

          {/* Types */}
          <div className="flex justify-center flex-wrap gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`text-white px-4 py-1 rounded-full text-sm font-medium capitalize ${
                  typeColors[type] || 'bg-gray-400'
                }`}
              >
                {type}
              </span>
            ))}
          </div>

          {/* Height and Weight */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Height</p>
              <p className="text-xl font-semibold">{pokemon.height} m</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Weight</p>
              <p className="text-xl font-semibold">{pokemon.weight} kg</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Stats */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-800 mb-4">
              Base Stats
            </h2>
            <ul className="space-y-3">
              {pokemon.stats.map((stat) => (
                <li key={stat.name} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm capitalize font-extrabold">
                      {formatStat(stat.name)}
                    </span>
                    <span className="text-sm font-medium text-gray-600 text-right">
                      {stat.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden">
                    <div
                      className="bg-gray-800 h-2 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${(stat.value / stat.max) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Abilities */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Abilities</h2>
            <ul className="space-y-2">
              {pokemon.abilities.map((ability) => (
                <AbilityBadge key={ability.name} ability={ability} />
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Base Experience
            </h2>
            <p className="text-2xl font-bold text-purple-600">
              {pokemon.base_experience} XP
            </p>
          </section>
        </div>
      </section>
    </article>
  )
}

export default PokemonDetailCard
