import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { LoginComponent } from '../../modulos/seguridad/componentes/login/login.component';

export const httpRequestHandlerErrorsInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const snackBar = inject(MatSnackBar);
  const dialog = inject(MatDialog);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        // Specific handling for unauthorized errors
        console.error('Unauthorized request:', err);
      }
      if (err.status === 403) {
        // Specific handling for unauthorized errors
        console.error('Unauthorized request:', err);
      }
      
      let dialogRef =  dialog.open(LoginComponent);
      let instance = dialogRef.componentInstance;
      instance.isModal = true;
      
      snackBar.open('Se ha presentado un error procesando la solicitud.', '', {
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        duration: 3000,
      });

      if (err.status >= 500) {
        // Handle 5xx HTTP error codes

        console.error('HTTP error:', err);
        return throwError(() => null);
      }
      return throwError(() => err);
    })
  );
};
