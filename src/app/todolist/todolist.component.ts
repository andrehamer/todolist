import {Component} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">

      <app-header>
        <app-title [title]="title"></app-title>
        <app-input (value)="list.addItem($event)"></app-input>
      </app-header>

      <app-main>
        <app-toggle (toggle)="list.togglecompleteAll()"></app-toggle>
        <app-list [items]="list.items" (itemClicked)="list.removeItem($event)"></app-list>
      </app-main>

      <app-footer>
        <app-counter [count]="list.getActiveItems() | count:'completed':false"
                     text="items"></app-counter>
        <app-button [visible]="list.existsInactiveItems()" label="Clear completed" (action)="list.clearCompleted()"></app-button>
      </app-footer>

    </section>
  `,
})
export class TodolistComponent {

  public list: ListService;
  public title: string;

  constructor(list: ListService) {
    this.list  = list;
    this.title = 'TODOS';
  }



}
