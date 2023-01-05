import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from '../model/athlete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AthleteDataService {
  constructor(private readonly httpClient: HttpClient) {}

  public getAllAthletes(): Observable<Athlete[]> {
    return this.httpClient.get<Athlete[]>('http://localhost:3000/athlete');
  }
}
