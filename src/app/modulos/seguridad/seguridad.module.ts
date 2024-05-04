import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { CoreModule } from '../../core/core.module';
import { HasPermissionDirective } from '../../core/directives/haspermission/has-permission.directive';
import { AdminUsuarioComponent } from './paginas/admin-usuario/admin-usuario.component';
import { HomeComponent } from './paginas/home/home.component';

@NgModule({
  declarations: [AdminUsuarioComponent,HomeComponent],
  imports: [CommonModule,CoreModule],
  exports:[]
})
export class SeguridadModule {}
