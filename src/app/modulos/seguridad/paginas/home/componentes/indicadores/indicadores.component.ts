import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductoService } from '../../producto.service';
import { AppStore } from '../../../../../../core/store/app.store';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrl: './indicadores.component.css',
})
export class IndicadoresComponent {
  public products: any[] = [];
  readonly store = inject(AppStore);
  constructor(private productService: ProductoService) {
  } 
  request() {

    this.store.updateSessionUser({DisplayName:Date.now().toPrecision().toString(),Email:"",jwt:"",UserName:""})
    
  }
}
