import { UserService } from './../../../core/services/user/user.service';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }


  text: string;

  ngOnInit() {

    const user = this.userService.getUser();

    this.text = "Bem vindo " + user.username;

  }

}
