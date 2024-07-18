import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HasPermissionDirective } from './directives/has-permission.directive';


@NgModule({
  declarations: [HasPermissionDirective],
  imports: [CommonModule],
  exports: [HasPermissionDirective]
})
export class SharedModule { }
