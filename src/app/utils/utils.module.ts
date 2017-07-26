import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LowPipe} from './low.pipe';
import {CountPipe} from './count.pipe';

@NgModule({
  imports     : [CommonModule],
  providers   : [LowPipe],
  declarations: [LowPipe, CountPipe],
  exports     : [LowPipe, CountPipe],
})
export class UtilsModule { }
