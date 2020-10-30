import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { SearchType } from './common/model/enums/search-type.enum';

const routes: Routes = [
  { path: 'artist', component: ArtistsComponent, data: { section: SearchType.ARTIST } },
  { path: 'album', component: AlbumsComponent, data: { section: SearchType.ALBUM } },
  { path: 'track', component: TracksComponent, data: { section: SearchType.TRACK } },
  { path: '', component: ArtistsComponent, pathMatch: 'full' },
  { path: '**', component: ArtistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
