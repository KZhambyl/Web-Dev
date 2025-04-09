import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000/api/vacancies/'

  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(this.BASE_URL)
  } 

  getVacancy(vacancyId: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}${vacancyId}/`)
  }

  deleteVacancy(vacancyId: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}${vacancyId}/`)
  }
}
