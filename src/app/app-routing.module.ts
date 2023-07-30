import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './authentication/auth-component.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './home/home.component';
import { DetailedBookPageComponent } from './home/components/detailed-book-page/detailed-book-page.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponentComponent,
    loadChildren: () => import('./authentication/authentication.module').then(x => x.AuthenticationModule)
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "books/:olid",
    component: DetailedBookPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
