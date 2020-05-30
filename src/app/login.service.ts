import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class login {
  isloggedIn = new Subject<boolean>()
  loginToken = new Subject<string>()
}