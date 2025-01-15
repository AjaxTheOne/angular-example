import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FormsModule, 
    NgFor, 
    TodoEntryComponent,
    TodoAddComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "My Todo List";

  todos: string[] = [
    "Wash dishes",
    "Mop floor"
  ];
  editTodoIndex = -1;

  addToTodoList(todo: string) {
    if (todo === "") {
      alert("Please write a task");
      return;
    }

    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  editTodo(index: number) {
    this.editTodoIndex = index;
  }

  saveTodo() {
    this.editTodoIndex = -1;
  }

  checkForImportance(todo: string) {
    return todo.includes("important");
  }

  trackByIndex(index: number, todo: string) {
    return index;
  }
}
