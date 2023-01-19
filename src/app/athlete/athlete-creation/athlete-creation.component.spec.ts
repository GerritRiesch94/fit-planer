import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteCreationComponent } from './athlete-creation.component';
import { AthleteDataService } from '../service/athlete-data.service';
import { Address, AthleteData } from '../model/athlete-data';
import { EMPTY } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('AthleteCreationComponent', () => {
  let component: AthleteCreationComponent;
  let fixture: ComponentFixture<AthleteCreationComponent>;

  const athleteDataServiceMock = { createAthlete: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteCreationComponent],
      providers: [{ provide: AthleteDataService, useValue: athleteDataServiceMock }],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create athlete and call api service', () => {
    // arrange
    component.athleteForm.controls.email.setValue('ash.ketchum@pokemail.com');
    component.athleteForm.controls.phoneNumber.setValue('0123456789');
    component.athleteForm.controls.title.setValue('Mr.');
    component.athleteForm.controls.firstName.setValue('Ash');
    component.athleteForm.controls.lastName.setValue('Ketchum');
    component.athleteForm.controls.age.setValue('36');
    component.athleteForm.controls.gender.setValue('m');
    component.athleteForm.controls.street.setValue('Street 1');
    component.athleteForm.controls.addressAppendix.setValue('First Floor');
    component.athleteForm.controls.postCode.setValue('98745');
    component.athleteForm.controls.city.setValue('Alabastia');
    component.athleteForm.controls.state.setValue('Kanto');
    component.athleteForm.controls.country.setValue('Japan');

    const createAthleteSpy = jest.spyOn(athleteDataServiceMock, 'createAthlete').mockReturnValue(EMPTY);

    // act
    component.saveAthlete();

    // assert
    expect(createAthleteSpy).toHaveBeenCalledTimes(1);
    expect(createAthleteSpy).toBeCalledWith({
      email: 'ash.ketchum@pokemail.com',
      phoneNumber: '0123456789',
      title: 'Mr.',
      firstName: 'Ash',
      lastName: 'Ketchum',
      age: '36',
      gender: 'm',
      address: {
        street: 'Street 1',
        addressAppendix: 'First Floor',
        postCode: '98745',
        city: 'Alabastia',
        state: 'Kanto',
        country: 'Japan',
      } as Address,
    } as AthleteData);
  });
});
