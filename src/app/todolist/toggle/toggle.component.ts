import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styles: []
})
export class ToggleComponent  {

  @Output() toggle = new EventEmitter<boolean>();


}
