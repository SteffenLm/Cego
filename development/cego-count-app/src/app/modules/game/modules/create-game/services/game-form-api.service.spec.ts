import { TestBed } from '@angular/core/testing';

import { GameFormAPIService } from './game-form-api.service';

describe('GameFormAPIService', () => {
  let service: GameFormAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFormAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
