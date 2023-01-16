import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarControlElementComponent } from './sidebar-control-element.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('SidebarControlElementComponent', () => {
  let component: SidebarControlElementComponent;
  let fixture: ComponentFixture<SidebarControlElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarControlElementComponent],
      imports: [MatIconModule, MatTooltipModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarControlElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit expected route value', () => {
    // arrange
    const emitRouteSpy = jest.spyOn(component.routeToNavigateEvent, 'emit');

    // arrange
    component.emitRouteForNavigation('azuria-city');

    // assert
    expect(emitRouteSpy).toHaveBeenCalledTimes(1);
    expect(emitRouteSpy).toBeCalledWith('azuria-city');
  });
});
