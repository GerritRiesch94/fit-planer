import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitchComponent } from './language-switch.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';

describe('LanguageSwitchComponent', () => {
  let component: LanguageSwitchComponent;
  let fixture: ComponentFixture<LanguageSwitchComponent>;

  const translateServiceMock = { use: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSwitchComponent],
      imports: [TranslateModule.forRoot(), MatMenuModule, MatIconModule, MatOptionModule],
      providers: [{ provide: TranslateService, useValue: translateServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('switch language', () => {
    it('should switch language if id is present in language array', () => {
      // act
      component.changeLanguage('0');
      const translateServiceSpy = jest.spyOn(translateServiceMock, 'use');

      // assert
      expect(translateServiceSpy).toHaveBeenCalledTimes(1);
      expect(translateServiceSpy).toHaveBeenCalledWith('en-US');
    });

    it('should not switch language if id is not present in language array', () => {
      // act
      component.changeLanguage('4711');
      const translateServiceSpy = jest.spyOn(translateServiceMock, 'use');

      // assert
      expect(translateServiceSpy).toHaveBeenCalledTimes(0);
    });
  });
});
