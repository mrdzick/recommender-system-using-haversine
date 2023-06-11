import { TestBed } from '@angular/core/testing';

import { WasteBankService } from './waste-bank.service';

describe('WasteBankService', () => {
  let service: WasteBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasteBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
