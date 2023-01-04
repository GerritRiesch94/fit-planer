import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteComponent } from './athlete.component';
import { MockComponent } from 'ng-mocks';
import { AthleteOverviewComponent } from './athlete-overview/athlete-overview.component';

describe('AthleteComponent', () => {
  let component: AthleteComponent;
  let fixture: ComponentFixture<AthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteComponent, MockComponent(AthleteOverviewComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
