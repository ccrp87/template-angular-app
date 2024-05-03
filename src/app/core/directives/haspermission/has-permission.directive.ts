import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective implements OnInit {
  @Input('hasPermission') permission: string = '';
  constructor(    
    private elementRef: ElementRef,
    private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log(this.renderer,this.elementRef)
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', 'red');
  }
}
