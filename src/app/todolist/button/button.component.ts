import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent  {

  @Input() label: string;
  @Input() visible: boolean;
  @Output() action = new EventEmitter<void>();

}
