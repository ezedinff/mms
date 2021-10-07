import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes=[
{path:"login",component:LoginComponent},
{path:"recoverpassword", component:ForgotPasswordComponent},
{path:"", component:LoginComponent, pathMatch:"full"}
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }