import { Album } from './album';
export interface Track {
  id: string;
  name: string;
  uri: string;
  explicit: boolean;
  duration_ms: number;
  album: Album;
}
