import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [    { path: 'admin', canActivate: [AuthGuard],loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
{ path: 'residenthome', canActivate: [AuthGuard],loadChildren: () => import(`./residenthome/residenthome.module`).then(m => m.ResidenthomeModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
