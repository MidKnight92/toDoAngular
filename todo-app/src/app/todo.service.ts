import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Filter } from './shared/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  public add(todo: Partial<Todo>){

  }

  public remove(id: number){

  }

  public update(todo: Partial<Todo>){

  }

  public getFilteredTask(filter: Filter){

  }

}
