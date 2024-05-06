import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrl: './indicadores.component.css',
})
export class IndicadoresComponent {
  public products: any[] = [];

  constructor(private productService: ProductoService) {}
  request() {
    for (let index = 0; index < 1; index++) {
      this.productService.getAllProducts().subscribe((data:any) => {
          this.products = data.products
      });
    }
  }
}
