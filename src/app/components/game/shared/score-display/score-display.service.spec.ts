import { TestBed } from '@angular/core/testing';

import { ScoreDisplayService } from './score-display.service';

describe('ScoreDisplayService', () => {
  let service: ScoreDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
