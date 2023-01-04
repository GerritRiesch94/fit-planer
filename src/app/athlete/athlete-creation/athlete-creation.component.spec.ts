import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteCreationComponent } from './athlete-creation.component';

describe('AthleteCreationComponent', () => {
  let component: AthleteCreationComponent;
  let fixture: ComponentFixture<AthleteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
