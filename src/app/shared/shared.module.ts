import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
