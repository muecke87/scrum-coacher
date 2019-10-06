import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  login(user) {
    console.log("user " + user);
  }
}
