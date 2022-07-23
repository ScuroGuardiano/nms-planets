import { TestBed } from '@angular/core/testing';

import { GalaxiesService } from './galaxies.service';

describe('GalaxiesService', () => {
  let service: GalaxiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalaxiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
