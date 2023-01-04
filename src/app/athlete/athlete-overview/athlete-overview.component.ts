import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Athlete } from '../model/athlete';

@Component({
  selector: 'app-athlete-overview',
  templateUrl: './athlete-overview.component.html',
  styleUrls: ['./athlete-overview.component.css'],
})
export class AthleteOverviewComponent {
  displayedColumns: string[] = ['combinedName', 'age', 'combinedAddress', 'email', 'phoneNumber', 'options'];
  athletes = new MatTableDataSource<Athlete>([
    {
      combinedName: 'Stefan Sportler',
      age: '32',
      combinedAddress: 'Am Acker 31, 90469 Nürnberg',
      email: 'stefan.sportler@live.de',
      phoneNumber: '017612345678',
    },
    {
      combinedName: 'Anna Athletin',
      age: '40',
      combinedAddress: 'Bergstraße 12, 90411Nürnberg',
      email: 'anna.athletin@live.de',
      phoneNumber: '016987654321',
    },
  ]);
}
