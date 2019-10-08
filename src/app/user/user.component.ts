import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import User from "../User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = {
    name: '',
    mail: 'nicht angegeben',
    role: 'Scrum Coacher'
  };

  constructor( private userService: UserService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.user.mail = this.activatedRoute.snapshot.paramMap.get('mail');
    this.user.role = this.activatedRoute.snapshot.paramMap.get('role');
  }
}
