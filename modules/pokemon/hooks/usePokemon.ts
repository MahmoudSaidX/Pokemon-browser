/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/shared/lib/api'
import { useQuery } from '@tanstack/react-query'

export const usePokemonList = (offset = 0, limit = 20) =>
  useQuery({
    queryKey: ['pokemon', offset],
    queryFn: () =>
      api
        .get(`/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.data),
  })

export interface Stat {
  name: string
  value: number
  max: number
}

export interface PokemonDetail {
  id: number
  name: string
  height: number
  weight: number
  types: string[]
  stats: Stat[]
  abilities: { name: string; is_hidden: boolean }[]
  base_experience: number
  image: string
}

export const usePokemonDetail = (name: string) =>
  useQuery<PokemonDetail>({
    queryKey: ['pokemon', name],
    queryFn: () =>
      api.get(`/pokemon/${name}`).then((res) => {
        const data = res.data
        return {
          id: data.id,
          name: data.name,
          height: data.height / 10,
          weight: data.weight / 10,
          types: data.types.map((t: any) => t.type.name),
          stats: data.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
            max: 150,
          })),
          abilities: data.abilities.map((a: any) => ({
            name: a.ability.name,
            is_hidden: a.is_hidden,
          })),
          base_experience: data.base_experience,
          image:
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default,
        }
      }),
  })
