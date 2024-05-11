import { RouterModule, Routes } from "@angular/router";
import { SeguimientoTATComponent } from "./paginas/seguimiento-tat/seguimiento-tat.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


const routes: Routes = [
  {
    path: 'tat',
    component: SeguimientoTATComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class SeguridadRoutingModule { }
