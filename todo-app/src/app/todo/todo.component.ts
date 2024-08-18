import { Component, } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  providers: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public todo = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(private todoService: TodoService){}

  submit(){
    if (this.todo === null) return
    const partialTodo: Partial<Todo>= {title: this.todo.value ?? undefined}
    this.todoService.add(partialTodo);
    this.todo.setValue('');
  }

  
}
