import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeuri'
})
export class SanitizeUriPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Sanitize url of cross sites
   * @param       url Url
   * @returns     Return url sanitized
   */
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
