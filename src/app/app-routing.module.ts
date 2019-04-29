import { PageForbiddenComponent } from './shared/components/layout/page-forbidden/page-forbidden.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { PageNotFoundComponent } from './shared/components/layout/page-not-found/page-not-found.component';
import { FullComponent } from './shared/components/layout/full/full/full.component';
import { BlankComponent } from './shared/components/layout/blank/blank/blank.component';
import { Routes } from '@angular/router';


export const appRoutes: Routes = [

  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "",
        loadChildren: './core/components/signin/signin.module#SigninModule'
      }
    ]
  },
  {
    path: "",
    canActivate: [AuthGuardService],
    component: FullComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: "clientes",
        loadChildren: './modules/cliente/cliente.module#ClienteModule'
      },
      {
        path: "pontuacoes",
        loadChildren: './modules/pontuacao/pontuacao.module#PontuacaoModule'
      },
    ]
  },
  {
    path: "404",
    component: PageNotFoundComponent
  },
  {
    path: "401",
    component: PageForbiddenComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }

]
