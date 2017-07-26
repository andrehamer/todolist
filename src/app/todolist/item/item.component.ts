import {Component, EventEmitter, Output, Input} from '@angular/core';
import {Item} from './../item';

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styles     : []
})
export class ItemComponent {

  @Input() item: Item;
  @Output() itemClicked = new EventEmitter<Item>();
  @Output() itemChecked = new EventEmitter<Item>();

  onChecked() {
    this.itemChecked.emit(this.item);
    this.item.completed = !this.item.completed;
  }

  startEdit(){
    this.item.editing = true;
  }

  endEdit(value:string){
    this.item.title = value;
    this.item.editing = false;
  }

  cancelEdit(){
    this.item.editing=false;
  }
}
