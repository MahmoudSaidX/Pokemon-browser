export const getPokemonId = (url: string) => {
  const segments = url.split('/').filter(Boolean)
  return segments[segments.length - 1]
}
