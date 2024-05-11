import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoTATComponent } from './paginas/seguimiento-tat/seguimiento-tat.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { share } from 'rxjs';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [
    SeguimientoTATComponent,
    FiltrosComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
})
export class SeguimientoComercialModule { }
