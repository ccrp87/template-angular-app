import { HttpEvent, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "../services/loading/loading.service";
import { catchError, finalize, map } from "rxjs";

export const httpRequestLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const _loading = inject(LoadingService);

  _loading.setLoading(true, req.url);
  return next(req).pipe(finalize(() => _loading.setLoading(false, req.url)));
};
