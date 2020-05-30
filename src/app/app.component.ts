import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { login } from './login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loginStatusSubs: Subscription
  loginStatus = false
  constructor(private loginServc: login){}

  ngOnInit(){
    this.loginStatusSubs = this.loginServc.isloggedIn.subscribe(status => {
      this.loginStatus = status
    })
  }
  ngOnDestroy(){
    this.loginStatusSubs.unsubscribe()
  }
  
}
