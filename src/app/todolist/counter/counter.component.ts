import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-counter',
  templateUrl: './counter.component.html',
  styles     : []
})
export class CounterComponent {

  @Input() count: number;
  @Input() text: string;

}
