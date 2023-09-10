import { AfterViewInit, Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-generic.component.html',
})
export class ModalGenericComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() timeToShow!: number;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.activeModal.dismiss('Auto close after 3 seconds');
    }, this.timeToShow);
  }
}