import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, throwError } from "rxjs";
import { LoginComponent } from "../../modulos/seguridad/componentes/login/login.component";

export const httpRequestHandlerErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);
  const dialog = inject(MatDialog);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      switch (err.status) {
        case 401:
          console.error("Unauthorized request:", err);
          break;
        case 403:
          console.error("Unauthorized request:", err);
          break;
        case 404:
          snackBar.open("No se encontraron registros..", "", {
            verticalPosition: "bottom",
            horizontalPosition: "right",
            duration: 3000
          });
          break;

        default:
          snackBar.open("Se ha presentado un error procesando la solicitud.", "", {
            verticalPosition: "bottom",
            horizontalPosition: "right",
            duration: 3000
          });
          break;
      }

      /*  let dialogRef =  dialog.open(LoginComponent);
      let instance = dialogRef.componentInstance;
      instance.isModal = true;
      */

      if (err.status >= 500) {
        // Handle 5xx HTTP error codes

        console.error("HTTP error:", err);
        return throwError(() => null);
      }
      return throwError(() => err);
    })
  );
};
