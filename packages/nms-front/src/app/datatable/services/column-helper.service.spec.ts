import { TestBed } from '@angular/core/testing';

import { ColumnHelperService } from './column-helper.service';

describe('ColumnHelperService', () => {
  let service: ColumnHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
