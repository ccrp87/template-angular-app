import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { HasPermissionDirective } from './modulos/seguridad/directives/haspermission/has-permission.directive';

const routes: Routes = [
  {
    path: 'seguridad',
    loadChildren: () =>
      import('./modulos/seguridad/seguridad-routing.module').then(
        (m) => m.SeguridadRoutingModule
      ),
  },
  {
    path: 'seguimientocomercial',
    loadChildren: () =>
      import(
        './modulos/seguimiento-comercial/seguimiento-comercial-routing.module'
      ).then((m) => m.SeguridadRoutingModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
