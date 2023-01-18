import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteCreationComponent } from './athlete-creation.component';
import { AthleteDataService } from '../service/athlete-data.service';

describe('AthleteCreationComponent', () => {
  let component: AthleteCreationComponent;
  let fixture: ComponentFixture<AthleteCreationComponent>;

  const athleteDataServiceMock = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteCreationComponent],
      providers: [{ provide: AthleteDataService, useValue: athleteDataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
