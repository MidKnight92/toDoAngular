import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, switchMap, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [RouterModule, NgIf, AsyncPipe],
  providers: [],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'
})
export class TodoDetailsComponent implements OnInit {
  public todo$!: Observable<Todo>;
  @Input() public id!: string;

  constructor(private activatedRoute: ActivatedRoute, private todoService:TodoService){}
  
  ngOnInit(): void {
    this.todo$ = this.activatedRoute.paramMap.pipe(
      filter((paramMap: ParamMap): boolean => paramMap.has('id')),
      map((paramMap: ParamMap): string =>  paramMap.get('id')!),
      switchMap((todoId: string): Observable<Todo> => this.todoService.get(todoId))
    )
  }

}
