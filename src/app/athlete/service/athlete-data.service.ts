import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from '../model/athlete';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../environments/provider/environment.token';
import { EnvironmentInterface } from '../../../environments/model/environment.interface';

@Injectable({
  providedIn: 'root',
})
export class AthleteDataService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(ENVIRONMENT) private readonly environment: EnvironmentInterface
  ) {}

  private readonly ATHLETE_PATH = '/athlete';

  public getAllAthletes(): Observable<Athlete[]> {
    return this.httpClient.get<Athlete[]>(this.environment.fitPlanerBackend.url + this.ATHLETE_PATH);
  }
}
