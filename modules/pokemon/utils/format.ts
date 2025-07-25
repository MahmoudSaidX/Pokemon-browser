export function formatStat(stat: string): string {
  if (!stat.includes('-')) {
    // One word — return Title Case
    return stat.charAt(0).toUpperCase() + stat.slice(1)
  }

  const [first, ...rest] = stat.split('-')

  // Get first 2 characters capitalized + dot
  const prefixFirstChar = first.slice(0, 1).toUpperCase()
  const prefixSecondChar = first.slice(1, 2) + '.'

  // Capitalize the rest of the words
  const restFormatted = rest
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return `${prefixFirstChar + prefixSecondChar} ${restFormatted}`
}
