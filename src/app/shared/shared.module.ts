import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LabelComponent,
    MessageComponent
  ],
  exports: [
    LabelComponent,
    MessageComponent
  ]
})
export class SharedModule {
  
}
