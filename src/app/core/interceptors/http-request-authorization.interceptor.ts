import { HttpInterceptorFn } from "@angular/common/http";

export const httpRequestAuthorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = "YOUR_AUTH_TOKEN_HERE";
  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      TransactionId: Date.now().toPrecision()
    }
  });
  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
