import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import User from "../User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    name: '',
    password: ''
  };

  loggedInUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  login(user) {
    this.userService
      .get()
      .subscribe((data: User[]) => {
        this.loggedInUser = data.filter(elem => elem.name === this.user.name && elem.password === this.user.password);
        this.router.navigate(['/user', this.loggedInUser[0]]);

      });
  }
}
