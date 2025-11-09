import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';

export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const token: string | null = localStorage.getItem('token');
  if(token){
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(cloned);
  }
  return next(req);
}
