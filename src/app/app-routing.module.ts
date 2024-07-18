import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "seguridad"
  },
  {
    path: "seguridad", loadChildren: () => import('./modules/seguridad/seguridad-routing.module').then((m) => m.SeguridadRoutingModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
