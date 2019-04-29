import { FormMessageModule } from './../../shared/components/form-message/form-message.module';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { clienteRoutes } from './cliente-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClienteListComponent, ClienteFormComponent, ClienteInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMessageModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    RouterModule.forChild(clienteRoutes)
  ]
})
export class ClienteModule { }
