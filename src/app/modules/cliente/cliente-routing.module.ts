import { AuthGuardService } from './../../core/guards/auth-guard.service';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { Routes } from '@angular/router';

export const clienteRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ClienteListComponent
      },
      {
        path: "cadastro",
        component: ClienteFormComponent
      },
      {
        path: ":id",
        component: ClienteInfoComponent
      }
    ]
  }
]
