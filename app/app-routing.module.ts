import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  { path: 'okuser', loadChildren: () => import('./okuser/okuser.module').then(m => m.OkuserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
