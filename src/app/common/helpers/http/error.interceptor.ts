import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  constructor(
    public router: Router,
    private api: SpotifyService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          switch (err.status) {
            case 401:
              return this.api.authenticate(request, next);
            default:
              // TODO: Handle error
              break;
          }

          const error = err.error != null ? err.error.message : err.statusText || null;
          return throwError(error);
        }));
  }
}
