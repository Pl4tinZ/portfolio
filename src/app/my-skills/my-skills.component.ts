import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  constructor(public languageservice: LanguageService) {}

  ngOnInit(): void {
    this.mySkills = this.mySkills;
  }

  public mySkills = [
    {
      "skillName":"JavaScript",
      "skillImg": "Javascript"
    },
    {
      "skillName":"TypeScript",
      "skillImg": "TypeScript"
    },
    {
      "skillName":"Angular",
      "skillImg": "Angular"
    },
    {
      "skillName":"(S)CSS",
      "skillImg": "CSS3"
    },
    {
      "skillName":"Firebase",
      "skillImg": "Firebase"
    },
    {
      "skillName":"SCRUM",
      "skillImg": "SCRUM"
    },
    {
      "skillName":"Git",
      "skillImg": "Git"
    },
    {
      "skillName":"Rest API",
      "skillImg": "API"
    },
    {
      "skillName":"Test automation",
      "skillImg": "Test-Animation"
    },
    {
      "skillName":"Databases",
      "skillImg": "Databases"
    }
  ]

}
