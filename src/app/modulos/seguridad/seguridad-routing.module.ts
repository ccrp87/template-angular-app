import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './paginas/home/home.component';
import { validatePermissionUserGuard } from '../../core/guards/validate-permission-user.guard';
import { AdminUsuarioComponent } from './paginas/admin-usuario/admin-usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class SeguridadRoutingModule { }
