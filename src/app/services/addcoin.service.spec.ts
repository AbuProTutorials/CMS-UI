import { TestBed } from '@angular/core/testing';

import { AddcoinService } from './addcoin.service';

describe('AddcoinService', () => {
  let service: AddcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
