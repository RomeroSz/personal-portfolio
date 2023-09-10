import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();

  constructor() { }

  openSidebar() {
    this.sidebarVisibleSubject.next(true);
  }

  closeSidebar() {
    this.sidebarVisibleSubject.next(false);
  }

  toggleSidebar() {
    this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.value);
  }
}
