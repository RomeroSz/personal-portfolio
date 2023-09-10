import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPresentComponent } from './main-present/main-present.component';
import { AvatarAndSkillsComponent } from './avatar-and-skills/avatar-and-skills.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ParallaxTransparentComponent } from './parallax-transparent/parallax-transparent.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainPresentComponent,
    AvatarAndSkillsComponent,
    AbilitiesComponent,
    ProyectsComponent,
    ContactFormComponent,
    ParallaxTransparentComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
