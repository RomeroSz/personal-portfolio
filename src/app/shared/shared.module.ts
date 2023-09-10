import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {RouterModule} from '@angular/router';
import { ModalGenericComponent } from './components/modal-generic/modal-generic.component';

@NgModule({
  declarations: [
    MainNavComponent,
    ModalGenericComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainNavComponent,
  ]
})
export class SharedModule { }
