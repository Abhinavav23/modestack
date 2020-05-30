import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  constructor(private http: HttpClient){}
  
  @ViewChild('f', {static: true}) logInForm: NgForm;
  user = {
    "title":'',
    "body":'',
    "author":'',
    "access_token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  }
  onSubmit(){
    console.log(this.logInForm)
    this.user.title = this.logInForm.value.title
    this.user.body = this.logInForm.value.body
    this.user.author = this.logInForm.value.author
    this.logInForm.reset()
    this.http.post('https://modestack-api.herokuapp.com/articles', this.user).subscribe(resdata =>{
      console.log(resdata)
  })
  }


}
