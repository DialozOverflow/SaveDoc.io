import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OkuserRoutingModule } from './okuser-routing.module';
import { OkuserComponent } from './okuser.component';
import { ProjectuserComponent } from './projectuser/projectuser.component';
import { PublicacionesuserComponent } from './publicacionesuser/publicacionesuser.component';
import { NotificuserComponent } from './notificuser/notificuser.component';


@NgModule({
  declarations: [
    OkuserComponent,
    ProjectuserComponent,
    PublicacionesuserComponent,
    NotificuserComponent
  ],
  imports: [
    CommonModule,
    OkuserRoutingModule
  ]
})
export class OkuserModule { }
