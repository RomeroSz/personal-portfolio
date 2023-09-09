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
  public focus: any;
  public focus1: any;
  public contactForm!: FormGroup
  public formControlGenericValdtns = Constants.formValidationMessages

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
    this.contactForm = this.contactFormGroup();
  }
  contactFormGroup = () => {
    return this.formBuilder.group({
      name: new FormControl({ value: null, disabled: false }, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)] }),
      email: new FormControl({ value: null, disabled: false }, { validators: [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.email] }),
      message: new FormControl({ value: null, disabled: false }, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(3000)] }),
    });
  }
  downloadCV() {
    this.downloadCVS.downloadCV()
  }
  contactFormSubmit() {
    if (this.contactForm.valid) {
      const contactForm = this.contactForm.value;
      console.log('contactForm', contactForm)
      this.contactS.contactEmailSubmit(contactForm).subscribe(
        (response: any) => {
          if (response.error) {
            console.error('No se pudo completar la solicitud')
            const title = 'Mensaje no enviado';
            const body = 'El mensaje no se ha enviado, por favor intente más tarde.';
            const timeToShow = 3000;
            // this.modalComponent.open(title, body, timeToShow);
          } else {
            const title = 'Mensaje enviado';
            const body = 'El mensaje se ha enviado de manera satisfactoria, en la brevedad de lo posible me comunicaré con usted.';
            const timeToShow = 3000;
            // this.modalComponent.open(title, body, timeToShow);
          }
        },
        (error: any) => {
          console.log('error', error);
        }
      );
    } else {
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }

}
