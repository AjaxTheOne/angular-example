import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  imports: [],
  // template: "<h1>Test header</h1>",
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo!: {id: number; name: string;};

  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
}
