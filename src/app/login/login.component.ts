import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { login } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  constructor(private http: HttpClient,
              private loginServc: login){}
  
  @ViewChild('f', {static: true}) logInForm: NgForm;
  user = {
    "username":'',
    "password":''
  }
  onSubmit(){
    this.loginServc.isloggedIn.next(true)
    this.user.username = this.logInForm.value.username
    this.user.password = this.logInForm.value.password
    this.logInForm.reset()
    this.http.post('https://modestack-api.herokuapp.com/login', this.user).subscribe(resdata =>{
      console.log((resdata))

  })
  }

}
