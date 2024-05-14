import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SelectModel } from "../../../core/models/app/select.model";
import { HttpClient } from "@angular/common/http";
import * as enviroment from "../../../../assets/enviroments/enviroment.json";
import { SeguimientoVendedorModel } from "../modelos/SeguimientoVendedor.model";
@Injectable({
  providedIn: "root"
})
export class SeguimientoTatService {
  constructor(private httpClient: HttpClient) {}

  obtenerSupervisores(): Observable<SelectModel[]> {
    return this.httpClient.get<SelectModel[]>(`${enviroment.apiAppUrl}SeguimientoComercial/supervisores`);
  }

  obtenerVendedores(codigoSupervisor: string): Observable<SelectModel[]> {
    return this.httpClient.get<SelectModel[]>(
      `${enviroment.apiAppUrl}SeguimientoComercial/vendedores?codigoSupervisor=${codigoSupervisor}`
    );
  }

  obtenerSeguimientoVendedor(fechaCorte: string, codigoVendedor: string): Observable<SeguimientoVendedorModel[]> {
    return this.httpClient.get<SeguimientoVendedorModel[]>(
      `${
        enviroment.apiAppUrl
      }SeguimientoComercial/seguimientovendedorestat?fechaCorte=${fechaCorte}&codigoVendedor=${codigoVendedor}`
    );
  }
}
