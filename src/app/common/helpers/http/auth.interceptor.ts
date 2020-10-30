import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { Token } from '../../model/interfaces/spotify/auth/token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: Token;

  constructor(
    private api: SpotifyService
  ) {
    this.api.token.subscribe((t: Token) => this.token = t);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.token.token_type} ${this.token.access_token}`
        }
      });
    }

    return next.handle(request);
  }
}
