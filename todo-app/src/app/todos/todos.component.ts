import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Filter } from '../shared/enums/filter.enum';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AsyncPipe, NgIf,NgFor, RouterModule, RouterLinkActive, RouterLink],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  public todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.todos$ = this.todoService.getFilteredTodos(Filter.All);
  }

  getFilteredTodos(filter: string): void{
   this.todos$ = this.todoService.getFilteredTodos(filter as Filter);
  }
}
