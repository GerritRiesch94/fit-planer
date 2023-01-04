import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MockComponent } from 'ng-mocks';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent, MockComponent(LanguageSwitchComponent)],
      imports: [MatIconModule, MatToolbarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggle drawer event', () => {
    // arrange
    const emitToggleDrawerEventSpy = jest.spyOn(component.toggleDrawerEvent, 'emit');

    // act
    component.emitToggleDrawerEvent();

    // assert
    expect(emitToggleDrawerEventSpy).toHaveBeenCalledTimes(1);
  });
});
