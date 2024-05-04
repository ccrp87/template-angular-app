import { Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective {
  
  private permissions?:string[]=localStorage.getItem("permissionUser")?.split(",")
  numberWithZeroPrefix(num:number, length:number) {
    return String(num).padStart(length, '0');
}

// Generar el array con 2000 elementos

  constructor(private elementRef: ElementRef){
   //this.permissions = Array.from({ length: 2000 }, (_, index) => this.numberWithZeroPrefix(index, 4));
   }

  /**
   * Habilita o inhabilita una funcionalidad al usuario, dependiendo 
   * dependiendo si el usuario tiene o no los permisos necesario 
   */
    @Input() set hasPermission(permission:string){
    if (!this.permissions?.includes(permission)) {
      this.elementRef.nativeElement.remove();
    }
  }

}
