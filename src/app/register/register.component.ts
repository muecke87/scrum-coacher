import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

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

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
  }

  ngOnInit() {

  }

  addUser(user) {
    console.log("user " + user);
    this.registerService.register(user);
  }
}
