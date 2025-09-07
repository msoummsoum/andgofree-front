import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInN1YiI6InV0aWxpc2F0ZXVyQGFuZ29mcmVlLmNvbSIsImlhdCI6MTc1NzI0NDQ1OCwiZXhwIjoxNzU5MDQ0NDU4fQ.eCN_Mja06c8NKTl-Ppr3E7OzC3OuJcaWxoCILdofVfbbJaacGpKB4E44skM91arJFVZrl2JVqW7Tx59PCMos5g';
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};
