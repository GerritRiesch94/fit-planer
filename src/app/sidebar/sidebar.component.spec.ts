import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { SidebarControlElementComponent } from './sidebar-control-element/sidebar-control-element.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  const routerMock = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent, MockComponent(SidebarControlElementComponent)],
      imports: [MatIconModule, MatTooltipModule, TranslateModule.forRoot()],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to expected route', () => {
    // arrange
    const routeNavigateSpy = jest.spyOn(routerMock, 'navigate');

    // act
    component.navigateTo('azuria-city');

    // assert
    expect(routeNavigateSpy).toHaveBeenCalledTimes(1);
    expect(routeNavigateSpy).toBeCalledWith(['azuria-city']);
  });

  it('should toggle drawer open flag', () => {
    // arrange
    component.drawerOpenFlag = false;

    // act
    component.toggleDrawer();

    // assert
    expect(component.drawerOpenFlag).toBe(true);
  });
});
