import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  imports: [],
  // template: "<h1>Test header</h1>",
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo: string = "";
  @Input() isImportant: boolean = false;
  @Output() remove = new EventEmitter();
}
