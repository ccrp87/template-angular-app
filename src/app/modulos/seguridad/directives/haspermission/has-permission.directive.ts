import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective {
  private permissions?: string[] = localStorage
    .getItem('permissionUser')
    ?.split(',');

  constructor(private elementRef: ElementRef) { }

  /**
   * Habilita o inhabilita una funcionalidad al usuario, dependiendo
   * dependiendo si el usuario tiene o no los permisos necesario
   */
  @Input() set hasPermission(permission: string) {
    if (!this.permissions?.includes(permission)) {
      this.elementRef.nativeElement.remove();
    }
  }
}
