import { Component, Input } from '@angular/core';
import { Athlete } from '../model/athlete';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-athlete-overview',
  templateUrl: './athlete-overview.component.html',
})
export class AthleteOverviewComponent {
  @Input()
  set athletes(athletes: Athlete[]) {
    this.dataSourceAthletes.data = athletes;
  }

  dataSourceAthletes = new MatTableDataSource<Athlete>();

  displayedColumns: string[] = ['combinedName', 'age', 'combinedAddress', 'email', 'phoneNumber', 'options'];
}
