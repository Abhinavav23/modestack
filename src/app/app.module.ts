import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ArticlesComponent } from './articles/articles.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component'

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'viewarticles', component: ViewArticlesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ArticlesComponent,
    ViewArticlesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
