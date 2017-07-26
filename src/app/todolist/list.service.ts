import {Item} from './item';
import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

  private _items: Item[];


  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  addItem(title: string): void {
    // this._items.push(new Item(title));
    this._items = [ ...this._items, new Item(title) ];
  }

  removeItem(item: Item): void {
    var newList = this.items.filter((x)=>x != item);
    this._items = [ ...newList];
  }

  getActiveItems(): Item[]{
    return this.items.filter((x)=>!x.completed);
  }

  existsInactiveItems(): boolean{
    return this.items.filter((x)=>x.completed).length>0;
  }

  clearCompleted(){
    var newList = this.items.filter((x)=>!x.completed);
    this._items = [ ...newList];
  }

  togglecompleteAll(){
      var shouldBeCompleted = !this.existsInactiveItems();
    this._items.forEach(element => {
      element.completed=shouldBeCompleted;
    });
    var newList = [ ...this._items];
    this._items = newList;
  }
}
