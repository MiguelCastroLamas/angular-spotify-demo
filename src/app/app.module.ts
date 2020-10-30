import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './common/helpers/http/auth.interceptor';
import { ErrorHttpInterceptor } from './common/helpers/http/error.interceptor';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchParentComponent } from './components/search-parent/search-parent.component';
import { ArtistCardComponent } from './shared/components/cards/artist-card/artist-card.component';
import { NoImagePipe } from './shared/pipes/no-image.pipe';
import { SanitizeUriPipe } from './shared/pipes/sanitize-uri.pipe';
import { TrackCardComponent } from './shared/components/cards/track-card/track-card.component';
import { AlbumCardComponent } from './shared/components/cards/album-card/album-card.component';
import { NoResultsComponent } from './shared/components/no-results/no-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    NavBarComponent,
    SideBarComponent,
    SearchParentComponent,
    ArtistCardComponent,
    NoImagePipe,
    SanitizeUriPipe,
    TrackCardComponent,
    AlbumCardComponent,
    NoResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [NoImagePipe],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
