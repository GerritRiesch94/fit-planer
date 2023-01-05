import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AthleteDataService } from './athlete-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Athlete } from '../model/athlete';

describe('AthleteDataService', () => {
  let service: AthleteDataService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
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
});
