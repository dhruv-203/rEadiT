import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from './auth-component.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingRoutingModule } from './auth-routing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ToastrModule } from 'ngx-toastr';
import { NgbAlert, NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AuthComponentComponent,
    LoginComponent,
    RegisterComponent,
  ]
  ,
  imports: [
    CommonModule,
    AuthRoutingRoutingModule,
    SharedModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [NgbAlert]
})
export class AuthenticationModule { }
