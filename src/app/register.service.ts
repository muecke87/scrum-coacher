import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uri = 'http://localhost:4000/register';

  constructor(private http: HttpClient) { }

  register(user) {
    console.log(user);
    this.http.post(`${this.uri}/register`, user)
      .subscribe(res => console.log('Done'));
  }

  private alreadyExists(user) {
    console.log(user);
    this.http.get(`${this.uri}/register?`, user)
      .subscribe(res => console.log('Done'));
  }
}
