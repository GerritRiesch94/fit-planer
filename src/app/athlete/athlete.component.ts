import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Athlete } from './model/athlete';
import { AthleteDataService } from './service/athlete-data.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
})
export class AthleteComponent implements OnInit {
  athletes$: Observable<Athlete[]> | undefined;

  constructor(private readonly athleteDataService: AthleteDataService) {}

  ngOnInit(): void {
    this.athletes$ = this.athleteDataService.getAllAthletes();
  }
}
