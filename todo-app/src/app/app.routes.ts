import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { unfinishedFormGuard } from './unfinished-form.guard';

export const routes: Routes = [
    {   
        path: 'todo', 
        component: TodoComponent,
        children: [
            {
                path:':id/update', 
                component: UpdateTodoComponent,
                canDeactivate: [unfinishedFormGuard]
            },
            {
                path: ':id',
                component: TodoDetailsComponent
            }
        ]

    },
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
