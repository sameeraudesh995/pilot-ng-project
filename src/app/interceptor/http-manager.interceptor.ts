import { HttpInterceptorFn } from '@angular/common/http';

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('well-done')
  return next(req);
};
