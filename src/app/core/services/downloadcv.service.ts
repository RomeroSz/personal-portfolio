import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadcvService {

  constructor() { }
  emailLink = 'mailto:victoromero2505@gmail.com';
  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/CV_VICTOR_ROMERO.pdf';
    link.download = 'CV_VICTOR_ROMERO.pdf';
    link.click();
  }
}
