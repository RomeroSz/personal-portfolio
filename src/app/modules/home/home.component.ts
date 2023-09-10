import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'app/core/constants/constants';
import { ContactEmailService } from 'app/core/services/contact-email.service';
import { DownloadcvService } from 'app/core/services/downloadcv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2, private element: ElementRef, public downloadCVS: DownloadcvService, private contactS: ContactEmailService) { }

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
