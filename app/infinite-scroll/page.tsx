'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { usePokemonList } from '@/modules/pokemon/hooks/usePokemon'
import PokemonHeader from '@/shared/components/PokemonHeader'
import PokemonCard from '@/modules/pokemon/components/PokemonCard'
import Spinner from '@/shared/components/Spinner'
import ErrorFallback from '@/shared/components/ErrorFallback'
import GridSkeleton from '@/shared/components/GridSkeleton'
import { getPokemonId } from '@/modules/pokemon/utils/getPokemonId'

export type PokemonItem = {
  url: string
  name: string
}

const LIMIT = 20

export default function InfiniteScrollPage() {
  const [offset, setOffset] = useState(0)
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>([])
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<HTMLDivElement | null>(null)

  const { data, isError, isFetching, refetch } = usePokemonList(offset)

  useEffect(() => {
    if (data?.results?.length) {
      setPokemonList((prev) => {
        const existingUrls = new Set(prev.map((p) => p.url))
        const uniqueNew = data.results.filter(
          (p: PokemonItem) => !existingUrls.has(p.url)
        )
        return [...prev, ...uniqueNew]
      })

      if (data.results.length < LIMIT) {
        setHasMore(false)
      }
    }
  }, [data])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching && hasMore) {
          setOffset((prev) => prev + LIMIT)
        }
      },
      { threshold: 1 }
    )

    const current = observerRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [isFetching, hasMore])

  return (
    <main className="min-h-screen flex flex-col bg-emerald-50">
      <PokemonHeader description="Discover and explore Pokémon with infinite scroll" />

      <section className="flex-grow container mx-auto px-4 sm:px-6 py-10">
        {isError ? (
          <ErrorFallback onRetry={refetch} />
        ) : (
          <>
            <Suspense fallback={<GridSkeleton />}>
              <section
                aria-label="Pokémon Grid"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {pokemonList.map((pokemon) => (
                  <PokemonCard
                    key={getPokemonId(pokemon.url)}
                    pokemonItem={pokemon}
                  />
                ))}
              </section>
            </Suspense>

            <footer
              ref={observerRef}
              className="h-24 flex justify-center items-center mt-10"
              aria-live="polite"
            >
              {isFetching && hasMore ? (
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <Spinner />
                  <span>Loading more Pokémon...</span>
                </div>
              ) : !hasMore ? (
                <p className="text-sm text-gray-400 mt-4 text-center">
                  🎉 You’ve caught ’em all!
                </p>
              ) : null}
            </footer>
          </>
        )}
      </section>
    </main>
  )
}
