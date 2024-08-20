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
    tap(()=> router.navigate(['/todo'])),
    map(({id}: Todo): boolean => id !== 0)
  )
};
