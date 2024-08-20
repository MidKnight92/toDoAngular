import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonexistentIdGuard } from './nonexistent-id.guard';

describe('nonexistentIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonexistentIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
