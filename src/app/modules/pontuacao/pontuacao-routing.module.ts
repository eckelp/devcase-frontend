import { PontuacaoFormComponent } from './pontuacao-form/pontuacao-form.component';
import { PontuacaoListComponent } from './pontuacao-list/pontuacao-list.component';
import { Routes } from '@angular/router';


export const pontuacaoRoutes: Routes = [
  {

    path: "",
    children: [
      {
        path: "",
        component: PontuacaoListComponent
      },
      {
        path: "cadastro",
        component: PontuacaoFormComponent
      }
    ]
  }
]
