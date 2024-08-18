import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Filter } from './shared/enums/filter.enum';
import { generateId } from './shared/utils/id-util';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  public add(title: Partial<Todo>){
    this.todos.push({id: generateId(), completed: false, ...title} as Todo)
    console.log(this.todos)
  }

  public remove(id: number){

  }

  public update(todo: Partial<Todo>){

  }

  public getFilteredTask(filter: Filter){

  }

}
