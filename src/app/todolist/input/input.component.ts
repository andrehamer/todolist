import {Component, OnInit, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent  {
  constructor(cr: ChangeDetectorRef){
    this.text = "55";
    this._cr=cr;
  }

  @Output() value = new EventEmitter<string>();
  public text: string;
  _cr: ChangeDetectorRef;

  submitInput(inputText: string){
    this.value.emit(inputText)  ;
    this.text = null; //TODO: ASK not working  
    
    
    this._cr.detectChanges();
  }
}
