import { Component, OnInit } from '@angular/core';
import { DownloadcvService } from 'app/core/services/downloadcv.service';

@Component({
  selector: 'app-main-present',
  templateUrl: './main-present.component.html',
  styleUrls: ['./main-present.component.scss']
})
export class MainPresentComponent implements OnInit {

  constructor(public downloadCVS: DownloadcvService) { }

  ngOnInit(): void {
  }

  downloadCV() {
    this.downloadCVS.downloadCV()
  }

}
