'use client'

import { useParams } from 'next/navigation'
import PokemonDetailCard from '@/modules/pokemon/components/PokemonCardDetail'
import { usePokemonDetail } from '@/modules/pokemon/hooks/usePokemon'
import SkeletonDetailCard from '@/shared/components/SkeletonDetailCard'
import ErrorFallback from '@/shared/components/ErrorFallback'

const PokemonDetailPage = () => {
  const { name } = useParams<{ name: string }>()
  const { data: pokemon, isLoading, isError, refetch } = usePokemonDetail(name)

  return (
    <main className="min-h-screen bg-gradient-to-tl from-pink-100 via-purple-100 to-indigo-100 p-4 flex flex-col gap-8">
      <div className="container mx-auto max-w-5xl">
        <button
          onClick={() => window.history.back()}
          className="inline-block px-4 py-2 cursor-pointer bg-white border cursor-po border-gray-200 text-sm font-semibold rounded hover:bg-gray-100 transition"
        >
          ← Back to List
        </button>
      </div>

      <section className="container mx-auto max-w-5xl flex justify-center items-start">
        {isLoading ? (
          <SkeletonDetailCard />
        ) : isError || !pokemon ? (
          <ErrorFallback onRetry={refetch} />
        ) : (
          <PokemonDetailCard pokemon={pokemon} />
        )}
      </section>
    </main>
  )
}

export default PokemonDetailPage
