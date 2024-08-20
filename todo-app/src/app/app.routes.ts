import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { unfinishedFormGuard } from './unfinished-form.guard';
import { nonexistentIdGuard } from './nonexistent-id.guard';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

export const routes: Routes = [
    {   
        path: 'todo', 
        component: TodoComponent,
        children: [
            {
                path:':id/update', 
                loadComponent: () => import('./update-todo/update-todo.component').then((component): typeof UpdateTodoComponent =>  component.UpdateTodoComponent),
                canActivate: [nonexistentIdGuard],
                canDeactivate: [unfinishedFormGuard]
            },
            {
                path: ':id',
                component: TodoDetailsComponent,
                canActivate: [nonexistentIdGuard],
                canDeactivate: [unfinishedFormGuard]
            }
        ]

    },
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo:'not-found'}
];
