import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'apps/authentication/src/app/login/login.component';
import { RegisterComponent } from 'apps/authentication/src/app/register/register.component';
import { ForgotPasswordComponent } from 'apps/authentication/src/app/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent]
})
export class AppRoutingModule { }
