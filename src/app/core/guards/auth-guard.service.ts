import { PopupService } from './../services/popup/popup.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private popupService: PopupService,
    private authService: AuthService) { }

  canActivate() {

    const authenticated = this.authService.isAuthenticated();


    !authenticated && this.notifyAndRedirect();

    return authenticated;




  }

  notifyAndRedirect() {
    this.router.navigate(["/"]);
    this.popupService.showError("Autenticação", "Faça login para acessar a página");
  }
}
