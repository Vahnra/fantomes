import { TestBed } from '@angular/core/testing';

import { FantomesService } from './fantomes.service';

describe('FantomesService', () => {
  let service: FantomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
