import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../core/core.module";
import { HasPermissionDirective } from "./directives/haspermission/has-permission.directive";
import { AdminUsuarioComponent } from "./paginas/admin-usuario/admin-usuario.component";
import { HomeComponent } from "./paginas/home/home.component";
import { IndicadoresComponent } from "./paginas/home/componentes/indicadores/indicadores.component";
import { LoginComponent } from "./componentes/login/login.component";

@NgModule({
  declarations: [AdminUsuarioComponent, HomeComponent, IndicadoresComponent,LoginComponent, HasPermissionDirective],
  imports: [CommonModule, CoreModule],
  exports: [HasPermissionDirective]
})
export class SeguridadModule {}
