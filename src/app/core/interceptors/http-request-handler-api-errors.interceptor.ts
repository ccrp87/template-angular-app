import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, throwError } from "rxjs";

export const httpRequestHandlerErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

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

      if (err.status >= 500) {
        // Handle 5xx HTTP error codes

        console.error("HTTP error:", err);
        return throwError(() => null);
      }
      return throwError(() => err);
    })
  );
};
