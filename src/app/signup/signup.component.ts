import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  
  constructor(private http: HttpClient){}
  
  @ViewChild('f', {static: true}) logInForm: NgForm;
  user = {
    "username":'',
    "password":'',
    "email":'',
    "address":''
  }
  onSubmit(){
    this.user.username = this.logInForm.value.username
    this.user.password = this.logInForm.value.password
    this.user.email = this.logInForm.value.email
    this.user.address = this.logInForm.value.address
    this.logInForm.reset()
    this.http.post('https://modestack-api.herokuapp.com/register', this.user).subscribe(resdata =>{
      console.log(resdata)
  })
  }
}
