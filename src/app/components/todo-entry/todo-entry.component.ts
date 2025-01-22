import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { NumberAbbreviatePipe } from '../../pipes/number-abbreviate.pipe';

@Component({
  selector: 'app-todo-entry',
  imports: [
    UpperCasePipe,
    DatePipe,
    HighlightDirective,
    NumberAbbreviatePipe
  ],

  // template: "<h1>Test header</h1>",
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  @Input() todo!: {id: number; title: string; completed?: boolean};

  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();

  public today = new Date();
}
