import { SanitizeUriPipe } from './sanitize-uri.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SanitizeUriPipe', () => {

  it('create an instance', () => {
    let sanitizer: DomSanitizer;
    const pipe = new SanitizeUriPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
