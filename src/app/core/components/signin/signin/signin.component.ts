import { PopupService } from './../../../services/popup/popup.service';
import { User } from '../../../../shared/models/user';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: string;
  hasError = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private popupService: PopupService
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  doLogin() {
    const user: User = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

    return this.authService.authenticate(user)
      .subscribe(
        (response) => {
          const username = response.username;

          this.popupService.showSuccess("Logado com sucesso!", "Seja bem vindo " + username.charAt(0).toUpperCase() + username.slice(1));
          this.redirect();
        },
        (err) => {
          this.popupService.showError("Falha no LogIn", "Usuário ou senha inválidos");
        }
      );
  }



  isValid(key: string) {
    return this.loginForm.controls[key].touched && !(this.loginForm.controls[key].valid);
  }

  private redirect() {
    this.router.navigate(['/dashboard']);
  }

}
