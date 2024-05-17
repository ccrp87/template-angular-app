import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as enviroment from '../../../../assets/enviroments/enviroment.json';
import {
  RequestLoginUser,
  ResponseLoginUser,
} from '../modelos/seguridad.model';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../../../core/models/app/app.model';
import { AppStore } from '../../../core/store/app.store';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {

  private LOGIN_URL="seguridad/login"
  constructor( private http: HttpClient) {}

  loginUser(
    loginUser: RequestLoginUser
  ): Observable<ResponseAPI<ResponseLoginUser>> {
    return this.http.post<ResponseAPI<ResponseLoginUser>>(
      `${enviroment.apiAuthUrl}Auth/Login`,
      loginUser
    );
  }

  hasSessionActive(): boolean {
    let token: string = localStorage.getItem('token') ?? '';
    if (token.split('.').length == 3) {
      return true;
    }
    return false;
  }

  /**
   * Obtiene los permisos almacenados en el token
   */
  getPermissionFromToken(): string[] {
    let jwt = localStorage.getItem('token');
    let jwtArray = jwt?.split('.') ?? [];
    if (jwtArray.length <= 0) {
      location.href = this.LOGIN_URL;
    }

    let payload = atob(jwtArray[1]);

    return JSON.parse(
      JSON.parse(payload)[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'
      ]
    ).permissions.split(',');
  }

  getUserLogin(){
    let jwt = localStorage.getItem('token');
    console.log("hola");
    let jwtArray = jwt?.split('.') ?? [];
    if (jwtArray.length <= 0) {
      return;
    }

    let payload = atob(jwtArray[1]);

    return JSON.parse(
      JSON.parse(payload)[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'
      ]
    ).User
  }

  cerrarSession(){
    localStorage.clear()
    location.href = this.LOGIN_URL;
  }
}
