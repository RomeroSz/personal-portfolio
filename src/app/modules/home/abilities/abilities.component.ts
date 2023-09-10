import { Component, OnInit } from '@angular/core';
import { AbilitiesData } from 'app/core/data/abilitiesData';
import { AbilitiesI } from 'app/core/models/abilitiesI';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  public abilitiesCards: AbilitiesI[] = AbilitiesData

  constructor() { }

  ngOnInit(): void {
  }

}
