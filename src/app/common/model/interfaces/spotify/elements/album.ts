import { Image } from './image';
export interface Album {
  id: string;
  name: string;
  uri: string;
  album_type: string;
  total_tracks: number;
  images: Array<Image>;
  release_date: string;
}
