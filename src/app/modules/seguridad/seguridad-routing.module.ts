import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validatePermissionUserGuard } from '../../core/guards/validate-permission-user.guard';
import { AdminUsuarioComponent } from './components/admin-user/admin-usuario.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin-usuario',
    canActivate: [validatePermissionUserGuard],
    component: AdminUsuarioComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
