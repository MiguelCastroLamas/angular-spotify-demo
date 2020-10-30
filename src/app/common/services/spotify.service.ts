import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SearchType } from '../model/enums/search-type.enum';
import { Token } from '../model/interfaces/spotify/auth/token';
import { Artist } from '../model/interfaces/spotify/elements/artist';
import { Album } from '../model/interfaces/spotify/elements/album';
import { Track } from '../model/interfaces/spotify/elements/track';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  requestEndpoint: string;
  tokenEndpoint: string;
  clientId: string;
  clientSecret: string;
  token: BehaviorSubject<Token>;
  result: BehaviorSubject<any>;
  error: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.requestEndpoint = environment.api_rest_request_endpoint;
    this.tokenEndpoint = environment.api_rest_token_endpoint;
    this.clientId = environment.client_id;
    this.clientSecret = environment.client_secret_id;
    this.token = new BehaviorSubject<Token>(null);
    this.result = new BehaviorSubject<any>(null);
    this.error = new BehaviorSubject<any>(null);
  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Authenticate the application
   * @param       request Previous request http
   * @param       next Handler of http request
   * @returns     Observable of cloned request
   */
  authenticate(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.getAccessToken().
      pipe(
        switchMap((data: any) => {
          request = request.clone({
            setHeaders: {
              Authorization: `${this.token.value.token_type} ${this.token.value.access_token}`
            }
          });
          return next.handle(request);
        })
      );
  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Get a new access token
   * @returns     Observable with token access data
   */
  getAccessToken(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${btoa(this.clientId + ':' + this.clientSecret)}`)
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const params = new HttpParams()
      .set('grant_type', 'client_credentials');

    return this.http.post(`${this.tokenEndpoint}/api/token`, params, { headers })
      .pipe(
        map((t: Token) => {
          this.token.next(t);
          return t;
        })
      );
  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Search an album, artist o track by words
   * @param       query Words to search
   * @param       type Type of search
   */
  search(query: string, type: SearchType): void {
    const params = new HttpParams()
      .set('q', query)
      .set('type', type);

    this.http.get(`${this.requestEndpoint}/search`, { params })
      .pipe(
        map(res => this.mapSearchResults(type, res))
      )
      .subscribe(
        (data) => this.result.next(data)
        , (error) => this.result.next(null)
      );
  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Map results to interfaces
   * @param       value string
   * @returns     Observable with the results mapped to the interfaces
   */
  mapSearchResults(type: SearchType, data: any): Observable<any> {
    let salida = data;
    switch (type) {
      case SearchType.ARTIST:
        salida = data.artists.items.map(item => {
          const artist: Artist = {} as Artist;
          artist.id = item.id;
          artist.name = item.name;
          artist.uri = environment.url_preview_spotify + item.uri;
          artist.images = item.images;
          artist.genres = item.genres;
          artist.followers = item.followers.total;
          return artist;
        });
        break;
      case SearchType.ALBUM:
        salida = data.albums.items.map(item => {
          const album: Album = {} as Album;
          album.id = item.id;
          album.name = item.name;
          album.uri = environment.url_preview_spotify + item.uri;
          album.album_type = item.album_type;
          album.total_tracks = item.total_tracks;
          album.images = item.images;
          album.release_date = item.release_date;
          return album;
        });
        break;
      case SearchType.TRACK:
        salida = data.tracks.items.map(item => {
          const track: Track = {} as Track;
          track.id = item.id;
          track.name = item.name;
          track.uri = environment.url_preview_spotify + item.uri;
          track.explicit = item.explicit;
          track.duration_ms = item.duration_ms;
          track.album = {} as Album;
          track.album.id = item.album.id;
          track.album.name = item.album.name;
          track.album.album_type = item.album.album_type;
          track.album.total_tracks = item.album.total_tracks;
          track.album.images = item.album.images;
          track.album.release_date = item.album.release_date;
          return track;
        });
        break;
    }

    return salida;
  }
}
