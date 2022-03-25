import { TestBed } from '@angular/core/testing';

import { GameRoutingService } from './game-routing.service';

describe('GameRoutingService', () => {
  let service: GameRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
