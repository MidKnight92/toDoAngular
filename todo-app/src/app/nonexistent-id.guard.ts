import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TodoService } from './todo.service';
import { map, tap } from 'rxjs';
import { Todo } from './todo.model';

export const nonexistentIdGuard: CanActivateFn = (route, state) => {
  const todoService = inject(TodoService);
  const router = inject(Router);
  const routeId: string | null = route.paramMap.get('id');
  if (!routeId) return false;

  return todoService.get(routeId).pipe(
    map(({id}: Todo): boolean => {
      if (id !== 0) {
        return true;
      } else {
        router.navigate(['/not-found']);
        return false
      }
    }),
  )
};
