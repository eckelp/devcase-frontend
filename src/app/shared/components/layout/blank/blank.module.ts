import { RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BlankComponent]
})
export class BlankModule { }
