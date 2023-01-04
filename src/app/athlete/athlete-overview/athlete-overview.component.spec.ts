import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteOverviewComponent } from './athlete-overview.component';
import { MockComponent } from 'ng-mocks';
import { AthleteOverviewOptionsComponent } from './athlete-overview-options/athlete-overview-options.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AthleteOverviewComponent', () => {
  let component: AthleteOverviewComponent;
  let fixture: ComponentFixture<AthleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteOverviewComponent, MockComponent(AthleteOverviewOptionsComponent)],
      imports: [MatTableModule, MatPaginatorModule, TranslateModule.forRoot(), NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
