import axios from 'axios'
import type { Person } from '@/types/person'

const API_BASE = 'https://swapi.info/api'

export const fetchPeople = async (): Promise<Person[]> => {
  const { data } = await axios.get(`${API_BASE}/people`)
  return data
}

export const fetchPersonById = async (id: number): Promise<Person> => {
  const { data } = await axios.get(`${API_BASE}/people/${id}`)
  return data
}
