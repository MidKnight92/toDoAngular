import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Filter } from './shared/enums/filter.enum';
import { generateId } from './shared/utils/id-util';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // private todos: Todo[] = mockCompletedTodos; // Todo: remove mockCompletedTodos after testing
  private todos: Todo[] = [];
  private todosCountSubject = new BehaviorSubject<number>(0);

  constructor() { }

  public get(todoId: string): Observable<Todo>{
    return of(this.todos.find(({id}: Todo): boolean => id === +todoId) ?? ({id: 0, title: "N/a", completed: false} as Todo));
  }

  public add(title: Partial<Todo>): void{
    this.todos.push({id: generateId(), completed: false, ...title} as Todo);
    this.todosCountSubject.next(this.todos.length);
  }

  public remove(todoId: number): Todo[]{
    return this.todos.filter(({id}: Todo): boolean => id !== todoId);
  }

  public update(todo: Partial<Todo>){

  }

  public getFilteredTodos(filter: Filter): Observable<Todo[]>{
    console.log(this.todos)
    if (filter !== Filter.All){
      return of(this.todos.filter(({completed}: Todo): boolean => this.isFilterEqualToCompleted(filter) === completed));
    } else {
      return of(this.todos);
    }
  }

  public getTodoCount(): Observable<number> {
    return this.todosCountSubject.asObservable();
  }

  private isFilterEqualToCompleted(filter: Filter): boolean{
    return filter === Filter.Completed;
  }
}

const mockCompletedTodos = [{id: 1, title: 'mock1', completed: true}, {id: 2, title: 'mock2', completed: true}];
