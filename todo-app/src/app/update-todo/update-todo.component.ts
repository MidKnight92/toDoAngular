import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { noop } from 'rxjs/internal/util/noop';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss'
})
export class UpdateTodoComponent implements OnInit {
  public todo!: Todo;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      filter((paramMap: ParamMap): boolean => paramMap.has('id')),
      map((paramMap: ParamMap): string =>  paramMap.get('id')!),
      switchMap((todoId: string): Observable<Todo> => this.todoService.get(todoId)),
    ).pipe(
      map((currentTodo: Todo) => this.todo = currentTodo),
      take(1)
    ).subscribe({next: noop, error: noop, complete: noop});
  }
}
