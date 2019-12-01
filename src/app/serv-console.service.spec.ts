import { TestBed } from '@angular/core/testing';

import { ServConsoleService } from './serv-console.service';

describe('ServConsoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServConsoleService = TestBed.get(ServConsoleService);
    expect(service).toBeTruthy();
  });
});
