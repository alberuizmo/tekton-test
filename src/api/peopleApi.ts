import type { Person } from '@/types/person'
import http from "@/http-common";

export default class PeopleApi {
  fetchPeople(): Promise<Person[]> {
    return http.get(`/people`);
  }
  fetchPersonById(id: number): Promise<Person> {
    return http.get(`/people/${id}`);
  }
}

export interface PeopleApiType {
  fetchPeople(): Promise<Person[]>;
  fetchPersonById(id: number): Promise<Person>;
}
