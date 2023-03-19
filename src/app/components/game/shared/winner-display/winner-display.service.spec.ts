import { TestBed } from '@angular/core/testing';

import { WinnerDisplayService } from './winner-display.service';

describe('WinnerDisplayService', () => {
  let service: WinnerDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinnerDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
