'use client'

import PokemonCard from '@/modules/pokemon/components/PokemonCard'
import { usePokemonList } from '@/modules/pokemon/hooks/usePokemon'
import ErrorFallback from '@/shared/components/ErrorFallback'
import GridSkeleton from '@/shared/components/GridSkeleton'
import Pagination from '@/shared/components/Pagination'
import PokemonHeader from '@/shared/components/PokemonHeader'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

export type PokemonItem = {
  url: string
  name: string
}

const PageContent = () => {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '1', 10)
  const limit = 20
  const offset = (currentPage - 1) * limit

  const { data, isLoading, isError, refetch } = usePokemonList(offset)
  const totalPages = Math.ceil(data?.count / limit || 0)

  return (
    <main className="min-h-screen flex flex-col bg-sky-50">
      <PokemonHeader description="Discover and explore Pokémon with page controls" />

      <section className="flex-grow container mx-auto px-4 sm:px-6 py-6">
        <Suspense fallback={<GridSkeleton />}>
          {isLoading ? (
            <GridSkeleton />
          ) : isError ? (
            <ErrorFallback onRetry={refetch} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-3">
              {data.results.map((pokemon: PokemonItem) => (
                <PokemonCard key={pokemon.url} pokemonItem={pokemon} />
              ))}
            </div>
          )}
        </Suspense>
      </section>

      {totalPages > 1 && (
        <footer className="mt-auto py-8">
          <Suspense>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </Suspense>
        </footer>
      )}
    </main>
  )
}

export default PageContent
