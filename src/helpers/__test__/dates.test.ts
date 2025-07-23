import { describe, it, expect } from 'vitest';
import { formatStarWarsDate } from '@/helpers/dates';

describe('formatStarWarsDate', () => {
  it('should format BBY dates correctly', () => {
    expect(formatStarWarsDate('19BBY')).toBe('Hace 19 años antes de la Batalla de Yavin');
    expect(formatStarWarsDate('0BBY')).toBe('Hace 0 años antes de la Batalla de Yavin');
    expect(formatStarWarsDate('32.5BBY')).toBe('Hace 32.5 años antes de la Batalla de Yavin');
  });

  it('should format ABY dates correctly', () => {
    expect(formatStarWarsDate('4ABY')).toBe('4 años después de la Batalla de Yavin');
    expect(formatStarWarsDate('0ABY')).toBe('0 años después de la Batalla de Yavin');
    expect(formatStarWarsDate('1.2ABY')).toBe('1.2 años después de la Batalla de Yavin');
  });

  it('should return the original string if the format does not match', () => {
    expect(formatStarWarsDate('unknown')).toBe('Desconocido');
    expect(formatStarWarsDate('100AC')).toBe('100AC');
    expect(formatStarWarsDate('BBY19')).toBe('BBY19');
    expect(formatStarWarsDate('')).toBe('Desconocido');
  });

  it('should handle lowercase suffixes', () => {
    expect(formatStarWarsDate('10bby')).toBe('Hace 10 años antes de la Batalla de Yavin');
    expect(formatStarWarsDate('3aby')).toBe('3 años después de la Batalla de Yavin');
  });
});