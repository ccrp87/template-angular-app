import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective {
  private permissions: string[] = [];

  constructor(private elementRef: ElementRef) {

  }


  /**
   * Habilita o inhabilita una funcionalidad al usuario, dependiendo
   * dependiendo si el usuario tiene o no los permisos necesario
   */
  @Input() set hasPermission(permission: string) {
    this.permissions = [];
    if (Array.isArray(this.permissions) === false) {
      this.elementRef.nativeElement.remove();
    }

    if (!this.permissions?.includes(permission)) {
      this.elementRef.nativeElement.remove();
    }
  }


}
