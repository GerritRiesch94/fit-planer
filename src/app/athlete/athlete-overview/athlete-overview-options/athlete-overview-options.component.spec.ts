import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteOverviewOptionsComponent } from './athlete-overview-options.component';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

describe('AthleteOverviewOptionsComponent', () => {
  let component: AthleteOverviewOptionsComponent;
  let fixture: ComponentFixture<AthleteOverviewOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteOverviewOptionsComponent],
      imports: [MatMenuModule, MatIconModule, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteOverviewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
