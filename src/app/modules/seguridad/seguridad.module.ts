import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../../core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { AdminUsuarioComponent } from "./components/admin-user/admin-usuario.component";
import { HomeComponent } from "./components/home/home.component";
import { IndicadoresComponent } from "./components/indicadores/indicadores.component";
import { SeguridadRoutingModule } from "./seguridad-routing.module";
import { SeguridadComponent } from './seguridad.component';

@NgModule({
  declarations: [
    AdminUsuarioComponent,
    HomeComponent,
    IndicadoresComponent,
    SeguridadComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
