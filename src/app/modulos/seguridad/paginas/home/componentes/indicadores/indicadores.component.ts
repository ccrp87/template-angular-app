import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-indicadores",
  templateUrl: "./indicadores.component.html",
  styleUrl: "./indicadores.component.css"
})
export class IndicadoresComponent {
  constructor(private http: HttpClient) {}
  request() {
    for (let index = 0; index < 100; index++) {
      this.http.get(`https://dummyjson.com/productsd`).subscribe(data => {});
    }
  }
}
