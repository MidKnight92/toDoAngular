import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

export const routes: Routes = [
    {   
        path: 'todo', 
        component: TodoComponent,
        children: [
            {
                path: ':id',
                component: TodoDetailsComponent
            }
        ]

    },
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
];
