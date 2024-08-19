import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Filter } from '../shared/enums/filter.enum';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AsyncPipe, NgIf,NgFor, RouterModule, RouterLinkActive, RouterLink],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  public todos$!: Observable<Todo[]>;
  public todosCount$!: Observable<number>;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.todos$ = this.activatedRoute.queryParamMap.pipe(
      switchMap((params: ParamMap): Observable<Todo[]> => {
        const status: Filter = (params.get('status') as Filter) || Filter.All;
        return this.todoService.getFilteredTodos(status)
      })
    )

    this.todosCount$ = this.todoService.getTodoCount();
  }

  getFilteredTodos(status: string): void {
   this.router.navigate(['/todo'], {queryParams: {status}});
  }
}
