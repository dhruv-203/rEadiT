import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './authentication/auth-component.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponentComponent,
    loadChildren: () => import('./authentication/authentication.module').then(x => x.AuthenticationModule)
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
