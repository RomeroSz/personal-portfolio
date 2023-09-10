import { Component, OnInit } from '@angular/core';
import { SkillsData } from 'app/core/data/skillsData';
import { SkillsI } from 'app/core/models/skillsI';

@Component({
  selector: 'app-avatar-and-skills',
  templateUrl: './avatar-and-skills.component.html',
  styleUrls: ['./avatar-and-skills.component.scss']
})
export class AvatarAndSkillsComponent implements OnInit {

  public skillsCards: SkillsI[] = SkillsData

  constructor() {
  }

  ngOnInit(): void {
  }

}
