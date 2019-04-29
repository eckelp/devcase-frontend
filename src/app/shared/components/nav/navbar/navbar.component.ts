import { UserService } from './../../../../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.setUser(null);
    this.router.navigate(["/"]);
  }

}
