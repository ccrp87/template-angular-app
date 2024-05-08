import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../../servicios/seguridad.service';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective {
  private permissions: string[] = [];

  constructor(private elementRef: ElementRef, private seguridadService: SeguridadService) {

  }


  /**
   * Habilita o inhabilita una funcionalidad al usuario, dependiendo
   * dependiendo si el usuario tiene o no los permisos necesario
   */
  @Input() set hasPermission(permission: string) {
    this.permissions = this.seguridadService.getPermissionFromToken();
    if (Array.isArray(this.permissions)===false) {
      this.elementRef.nativeElement.remove();
    }

    if (!this.permissions?.includes(permission)) {
      this.elementRef.nativeElement.remove();
    }
  }


}
