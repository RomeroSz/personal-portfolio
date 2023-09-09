import { TestBed } from '@angular/core/testing';

import { DownloadcvService } from './downloadcv.service';

describe('DownloadcvService', () => {
  let service: DownloadcvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadcvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
