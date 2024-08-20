import { Component, } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { TodosComponent } from '../todos/todos.component';
import { AsyncPipe } from '@angular/common';
import { forbiddenInput } from '../shared/validators/forbiddenInput.validator';
import { NO_NUMBERS_ONLY, NO_SPACES_ONLY } from '../shared/constants';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TodosComponent, AsyncPipe],
  providers: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public todo = new FormControl('', [Validators.required, Validators.minLength(2), forbiddenInput(NO_SPACES_ONLY), forbiddenInput(NO_NUMBERS_ONLY)]);

  constructor(private todoService: TodoService){}

  submit(){
    const partialTodo: Partial<Todo>= {title: this.todo.value ?? undefined}
    this.todoService.add(partialTodo);
    this.todo.setValue('');
  } 
}
