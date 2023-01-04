import { Component, Input } from '@angular/core';
import { Athlete } from '../../model/athlete';

@Component({
  selector: 'app-athlete-overview-options',
  templateUrl: './athlete-overview-options.component.html',
  styleUrls: ['./athlete-overview-options.component.css'],
})
export class AthleteOverviewOptionsComponent {
  @Input()
  athlete: Athlete | undefined;
}
