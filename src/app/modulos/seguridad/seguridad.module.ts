import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { CoreModule } from '../../core/core.module';
import { HasPermissionDirective } from '../../core/directives/haspermission/has-permission.directive';

@NgModule({
  declarations: [HasPermissionDirective],
  imports: [CommonModule, SeguridadRoutingModule],
})
export class SeguridadModule {}
