import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'app/core/constants/constants';
import { ContactEmailService } from 'app/core/services/contact-email.service';
import { ModalGenericComponent } from 'app/shared/components/modal-generic/modal-generic.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public focus: any;
  public focus1: any;
  public contactForm!: FormGroup;
  public emailLoading: boolean = false;
  public formControlGenericValdtns = Constants.formValidationMessages;

  constructor(private formBuilder: FormBuilder, private contactS: ContactEmailService, private modalService: NgbModal) {
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
    if (!this.contactForm.valid) {
      setTimeout(() => {
        this.emailLoading = false;
      }, 1000);
      this.markAllFormControlsAsTouched();
      return;
    }
    const contactForm = this.contactForm.value;
    this.emailLoading = true;
    this.contactS.contactEmailSubmit(contactForm).subscribe(
      (response: any) => {
        const title = response.error ? 'Mensaje no enviado' : 'Mensaje enviado';
        const body = response.error ? 'El mensaje no se ha enviado, por favor intente más tarde.' : 'El mensaje se ha enviado de manera satisfactoria, en la brevedad de lo posible me comunicaré con usted.';
        const timeToShow = response.error ? 4000 : 500000;
        this.openModal(title, body, timeToShow);
        setTimeout(() => {
          this.emailLoading = false;
        }, 1000);
      },
      (error: any) => {
        console.log('error', error);
        setTimeout(() => {
          this.emailLoading = false;
        }, 1000);
      }
    );
  }

  openModal(title: string, message: string, timeToShow: number) {
    const modalRef = this.modalService.open(ModalGenericComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.timeToShow = timeToShow;
  }
}
