import { Item } from './../item';
import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent  {

  @Input() items: Item[];
  @Output() itemClicked = new EventEmitter<Item>();
  @Output() itemChecked = new EventEmitter<Item>();

}
