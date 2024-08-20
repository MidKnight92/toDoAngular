import { CanDeactivateFn } from '@angular/router';

export const unfinishedFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
