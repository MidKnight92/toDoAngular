import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { unfinishedFormGuard } from './unfinished-form.guard';

describe('unfinishedFormGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unfinishedFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
