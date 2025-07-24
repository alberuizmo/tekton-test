export const extractIdFromUrl = (url: string, type: string): string => {
  const parts = url.split(`${type}/`)
  return parts.length > 1 ? `${type} #${parts[1].replace('/', '')}` : url
}
