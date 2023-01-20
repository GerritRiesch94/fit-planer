import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AthleteDataService } from './athlete-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Athlete } from '../model/athlete';
import { ENVIRONMENT } from '../../../environments/provider/environment.token';
import { AthleteData } from '../model/athlete-data';

describe('AthleteDataService', () => {
  let service: AthleteDataService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ENVIRONMENT, useValue: { fitPlanerBackend: { url: 'http://localhost:3000' } } }],
    });
    service = TestBed.inject(AthleteDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get all athletes', () => {
    it('should call backend with expected params and return value', fakeAsync(() => {
      // arrange
      const athletes: Athlete[] = [
        {
          combinedName: 'Ash Ketchum',
          age: '10',
          combinedAddress: 'Alabastia City',
          email: 'ash.ketchum@pokemail.com',
          phoneNumber: '12345678',
        },
      ];

      // act/assert
      service.getAllAthletes().subscribe((receivedAthletes) => {
        expect(receivedAthletes.length).toEqual(1);
        expect(receivedAthletes).toStrictEqual(athletes);
      });

      // assert
      const req = httpMock.expectOne('http://localhost:3000/athlete');
      expect(req.request.method).toBe('GET');
      req.flush(athletes);
      tick();
    }));
  });

  describe('create athlete', () => {
    it('should call backend with expected params and return value', fakeAsync(() => {
      // arrange
      const athleteData: AthleteData = {
        title: 'Mr.',
        firstName: 'Ash',
        lastName: 'Ketchum',
        age: '36',
        gender: 'm',
        email: 'ash.ketchum@pokemail.com',
        phoneNumber: '0123456789',
        address: {
          street: 'Street 1',
          addressAppendix: 'First Floor',
          postCode: '98745',
          city: 'Alabastia',
          state: 'Kanto',
          country: 'Japan',
        },
      };

      // act
      service.createAthlete(athleteData).subscribe();

      // assert
      const req = httpMock.expectOne('http://localhost:3000/athlete');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toStrictEqual(athleteData);
      req.flush({});
      tick();
    }));
  });
});
