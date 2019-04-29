import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormMessageModule } from './../../shared/components/form-message/form-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pontuacaoRoutes } from './pontuacao-routing.module';
import { PontuacaoListComponent } from './pontuacao-list/pontuacao-list.component';
import { PontuacaoFormComponent } from './pontuacao-form/pontuacao-form.component';

@NgModule({
  declarations: [PontuacaoListComponent, PontuacaoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMessageModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    RouterModule.forChild(pontuacaoRoutes)
  ]
})
export class PontuacaoModule { }
