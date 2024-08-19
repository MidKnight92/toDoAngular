import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Filter } from './shared/enums/filter.enum';
import { generateId } from './shared/utils/id-util';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  public get(todoId: string): Observable<Todo>{
    return of(this.todos.find(({id}: Todo): boolean => id === +todoId) ?? ({id: 0, title: "N/a", completed: false} as Todo));
  }

  public add(title: Partial<Todo>): void{
    this.todos.push({id: generateId(), completed: false, ...title} as Todo);
  }

  public remove(todoId: number): Todo[]{
    return this.todos.filter(({id}: Todo): boolean => id !== todoId);
  }

  public update(todo: Partial<Todo>){

  }

  public getFilteredTask(filter: Filter): Observable<Todo[]>{
    if (filter !== Filter.All){
      return of(this.todos.filter(({completed}: Todo): boolean => this.isCompleted(filter) === completed));
    } else {
      return of(this.todos);
    }
  }

  private isCompleted(filter: Filter): boolean{
    return filter === Filter.Completed;
  }

}
