import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './directives/haspermission/has-permission.directive';



@NgModule({
  declarations: [HasPermissionDirective],
  imports: [
    CommonModule
  ],exports:[]
})
export class CoreModule { }
