import { describe, it, expect, vi, beforeEach } from 'vitest';
import PeopleApi from '@/api/peopleApi';
import http from '@/http-common';
import type { Person } from '@/types/person';

vi.mock('@/http-common', () => ({
  default: {
    get: vi.fn(),
  }
}));

describe('PeopleApi', () => {
  let peopleApi: PeopleApi;

  beforeEach(() => {
    peopleApi = new PeopleApi();
    vi.clearAllMocks();
  });

  it('fetchPeople should return an array of people', async () => {
    const mockData: Person[] = [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "Tatooine",
        films: ["A New Hope"],
        species: [],
        vehicles: [],
        starships: [],
        created: "",
        edited: "",
        url: ""
      }
    ];

    (http.get as any).mockResolvedValue({ data: mockData });

    const result = await peopleApi.fetchPeople();
    expect(http.get).toHaveBeenCalledWith('/people');
    expect(result).toEqual({ data: mockData });
  });

  it('fetchPersonById should return a person', async () => {
    const mockPerson: Person = {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "Alderaan",
      films: ["A New Hope"],
      species: [],
      vehicles: [],
      starships: [],
      created: "",
      edited: "",
      url: ""
    };

    (http.get as any).mockResolvedValue({ data: mockPerson });

    const result = await peopleApi.fetchPersonById(1);
    expect(http.get).toHaveBeenCalledWith('/people/1');
    expect(result).toEqual({ data: mockPerson });
  });
});
