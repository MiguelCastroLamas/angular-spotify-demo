import { Image } from './image';
export interface Artist {
  id: string;
  name: string;
  uri: string;
  images: Array<Image>;
  genres: Array<string>;
  followers: number;
}
