import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading/loading.service';
import { catchError, finalize, throwError } from 'rxjs';

export const httpRequestLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const _loading = inject(LoadingService);
  let transactionId = req.headers.get('TransactionId') ?? '';
  _loading.setLoading(true, transactionId);
  return next(req).pipe(
    finalize(() => {
      _loading.setLoading(false, transactionId);
    })
  );
};
