import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { signinRoutes } from './signin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormMessageModule } from 'src/app/shared/components/form-message/form-message.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMessageModule,
    InputTextModule,

    ButtonModule,
    RouterModule.forChild(signinRoutes)
  ]
})
export class SigninModule { }
