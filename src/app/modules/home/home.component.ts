import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private renderer: Renderer2, private element: ElementRef,) { }

  ngOnInit() {
    const profilePic = this.element.nativeElement.querySelector('.profile-content');
    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY || window.pageYOffset;
      if (number > 250 || window.pageYOffset > 250) {
        this.renderer.addClass(profilePic, 'main-photo');
      } else {
        this.renderer.removeClass(profilePic, 'main-photo');
      }
    });
  }
}
