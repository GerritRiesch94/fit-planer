import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteOverviewOptionsComponent } from './athlete-overview-options.component';

describe('AthleteOverviewOptionsComponent', () => {
  let component: AthleteOverviewOptionsComponent;
  let fixture: ComponentFixture<AthleteOverviewOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteOverviewOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteOverviewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
