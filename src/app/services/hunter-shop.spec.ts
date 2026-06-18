import { TestBed } from '@angular/core/testing';

import { HunterShop } from './hunter-shop';

describe('HunterShop', () => {
  let service: HunterShop;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HunterShop);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
