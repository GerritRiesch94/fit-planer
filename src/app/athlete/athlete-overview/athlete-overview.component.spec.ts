import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteOverviewComponent } from './athlete-overview.component';

describe('AthleteOverviewComponent', () => {
  let component: AthleteOverviewComponent;
  let fixture: ComponentFixture<AthleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
