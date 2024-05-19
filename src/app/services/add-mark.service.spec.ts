import { TestBed } from '@angular/core/testing';

import { AddMarkService } from './add-mark.service';

describe('AddMarkService', () => {
  let service: AddMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
