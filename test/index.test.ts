import { describe, expect, it } from 'vitest'
import { hello } from '../src'

describe('hello function', () => {
  it('should return a greeting with the provided name', () => {
    expect(hello('Alice')).toBe('Helloo Alice!')
  })

  it('should work with an empty string', () => {
    expect(hello('')).toBe('Helloo !')
  })

  it('should handle names with special characters', () => {
    expect(hello('John-Doe')).toBe('Helloo John-Doe!')
  })

  it('should work with numbers as strings', () => {
    expect(hello('123')).toBe('Helloo 123!')
  })

  it('should handle whitespace', () => {
    expect(hello('  Bob  ')).toBe('Helloo   Bob  !')
  })
})
