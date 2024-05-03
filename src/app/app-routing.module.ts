import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';

const routes: Routes = [
  {
    path:"seguridad",loadChildren: ()=> import('./modulos/seguridad/seguridad.module').then((m)=>m.SeguridadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SeguridadModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
