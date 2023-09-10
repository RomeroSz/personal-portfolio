import { Component, OnInit } from '@angular/core';
import { ProyectsData } from 'app/core/data/proyectsData';
import { ProyectI } from 'app/core/models/proyectI';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  public proyectsCards: ProyectI[] = ProyectsData
  public isMobile!: boolean;

  constructor() { }

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth < 960;
  }
}
