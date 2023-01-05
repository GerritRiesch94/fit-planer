import { TestBed } from '@angular/core/testing';

import { AthleteDataService } from './athlete-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AthleteDataService', () => {
  let service: AthleteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(AthleteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
