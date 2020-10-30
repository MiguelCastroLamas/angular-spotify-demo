import { Pipe, PipeTransform } from '@angular/core';
import { Image } from 'src/app/common/model/interfaces/spotify/elements/image';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Select first image of array and returs or returns a default image
   * @param       images Array<Image>
   * @returns     Return url of first image or image by default
   */
  transform(images: Array<Image>): string {
    return images && images.length > 0 ? images[0].url : environment.url_default_no_image;
  }

}
