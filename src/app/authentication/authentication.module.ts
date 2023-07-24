import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from './auth-component.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingRoutingModule } from './auth-routing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/components/header/header.component';
@NgModule({
  declarations: [
    AuthComponentComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
