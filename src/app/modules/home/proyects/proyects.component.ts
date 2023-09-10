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

  constructor() { }

  ngOnInit(): void {
  }

}
