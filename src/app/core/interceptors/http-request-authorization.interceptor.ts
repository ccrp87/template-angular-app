import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppStore } from '../store/app.store';

export const httpRequestAuthorizationInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const authToken = localStorage.getItem('token') ?? '';
  let store = inject(AppStore);

  if (!req.url.includes('login')) {
    try {
      let expiracionToken = JSON.parse(atob(authToken.split('.')[1])).exp;
      let fechaActualEnSegundos = Math.floor(Date.now() / 1000);
      let tiempoRestanteSession = expiracionToken - fechaActualEnSegundos;

      if (tiempoRestanteSession <= 0) {
        store.closeSession();
        window.location.href = 'seguridad/login';
      }
    } catch (e) {}
  }

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      TransactionId: Date.now().toPrecision(),
    },
  });
  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
