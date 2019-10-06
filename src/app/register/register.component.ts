import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    mail: '',
    password: '',
    role: undefined
  };
  roles = ['Scrum Coach', 'Projektanbieter'];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {

  }

  register(user) {
    console.log("user " + user);
    this.userService.register(user);
    this.router.navigate(['/user', this.user]);
  }
}
