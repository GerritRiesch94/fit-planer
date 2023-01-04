import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingMenuComponent } from './routing-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

describe('RoutingMenuComponent', () => {
  let component: RoutingMenuComponent;
  let fixture: ComponentFixture<RoutingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingMenuComponent],
      imports: [TranslateModule.forRoot(), MatDividerModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
