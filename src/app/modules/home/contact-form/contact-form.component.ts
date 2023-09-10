import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'app/core/constants/constants';
import { ContactEmailService } from 'app/core/services/contact-email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public focus: any;
  public focus1: any;
  public contactForm!: FormGroup
  public formControlGenericValdtns = Constants.formValidationMessages

  constructor(private formBuilder: FormBuilder, private contactS: ContactEmailService) {
  }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(Constants.formValidationPatterns.Name)]],
      email: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.email]],
      message: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3000)]],
    });
  }

  markAllFormControlsAsTouched(): void {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  contactFormSubmit(): void {
    if (this.contactForm.valid) {
      const contactForm = this.contactForm.value;
      console.log('contactForm', contactForm);
      this.contactS.contactEmailSubmit(contactForm).subscribe(
        (response: any) => {
          if (response.error) {
            console.error('No se pudo completar la solicitud');
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
      this.markAllFormControlsAsTouched();
    }
  }

}
