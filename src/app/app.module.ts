import { MessageService } from 'primeng/components/common/messageservice';
import { ToastModule } from 'primeng/toast';

import { CommonModule } from '@angular/common';
import { appRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './shared/components/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    LayoutModule
  ],
  providers: [MessageService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
