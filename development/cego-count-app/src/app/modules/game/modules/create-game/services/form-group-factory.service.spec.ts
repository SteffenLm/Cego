import { TestBed } from '@angular/core/testing';

import { GameFormGroupFactoryService } from './form-group-factory.service';

describe('FormGroupFactoryService', () => {
  let service: GameFormGroupFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFormGroupFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
