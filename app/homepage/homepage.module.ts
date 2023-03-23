import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { ProjectspublicComponent } from './projectspublic/projectspublic.component';
import { LoginandregisterComponent } from './loginandregister/loginandregister.component';


@NgModule({
  declarations: [
    HomepageComponent,
    IlustracionesComponent,
    ProjectspublicComponent,
    LoginandregisterComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
