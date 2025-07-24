import { describe, it, expect } from 'vitest'
import { extractIdFromUrl } from '@/helpers/urls'

describe('extractIdFromUrl', () => {
  it('should extract the ID from a valid URL', () => {
    const url = 'https://swapi.dev/api/films/3/'
    const result = extractIdFromUrl(url, 'films')
    expect(result).toBe('films #3')
  })

  it('should return the original URL if the type is not present', () => {
    const url = 'https://swapi.dev/api/planets/3/'
    const result = extractIdFromUrl(url, 'films')
    expect(result).toBe(url)
  })

  it('should work with a different type (e.g., vehicles)', () => {
    const url = 'https://swapi.dev/api/vehicles/12/'
    const result = extractIdFromUrl(url, 'vehicles')
    expect(result).toBe('vehicles #12')
  })

  it('should handle URLs without a trailing slash', () => {
    const url = 'https://swapi.dev/api/starships/9'
    const result = extractIdFromUrl(url, 'starships')
    expect(result).toBe('starships #9')
  })
})
