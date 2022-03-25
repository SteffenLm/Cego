import { TestBed } from '@angular/core/testing';

import { GamesLocalStorageManagerService } from './games-local-storage-manager.service';

describe('GamesLocalStorageManagerService', () => {
  let service: GamesLocalStorageManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesLocalStorageManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
