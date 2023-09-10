import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowWidthService {

  constructor() { }

  scrollToTop() {
    if (window.outerWidth > 991) {
      window.document.children[0].scrollTop = 0;
    } else {
      window.document.activeElement!.scrollTop = 0;
    }
  }
}
