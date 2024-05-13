import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeguimientoTATComponent } from "./paginas/seguimiento-tat/seguimiento-tat.component";
import { FiltrosComponent } from "./componentes/filtros/filtros.component";
import { share } from "rxjs";
import { SharedModule } from "../../shared/shared/shared.module";
import { GoogleMap, MapAdvancedMarker, MapPolyline } from "@angular/google-maps";

@NgModule({
  declarations: [SeguimientoTATComponent, FiltrosComponent],
  imports: [CommonModule, SharedModule, GoogleMap, MapPolyline, MapAdvancedMarker]
})
export class SeguimientoComercialModule {}
