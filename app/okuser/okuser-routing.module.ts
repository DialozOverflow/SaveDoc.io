import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OkuserComponent } from './okuser.component';

const routes: Routes = [
    {path: '', component: OkuserComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OkuserRoutingModule { }
