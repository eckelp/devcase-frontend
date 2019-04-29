import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModule } from './../nav/nav.module';
import { FullComponent } from './full/full/full.component';
import { BlankComponent } from './blank/blank/blank.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';

@NgModule({
  declarations: [
    BlankComponent,
    FullComponent,
    PageNotFoundComponent,
    PageForbiddenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavModule

  ]
})
export class LayoutModule { }
