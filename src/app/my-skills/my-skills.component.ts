import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  ngOnInit(): void {
    this.mySkills = this.mySkills;
  }

  public mySkills = [
    {
      "skillName":"JavaScript",
      "skillImg": "HTML5"
    },
    {
      "skillName":"Angular",
      "skillImg": "Angular"
    },
    {
      "skillName":"HTML / CSS",
      "skillImg": "CSS3"
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
      "skillName":"Design Thinking",
      "skillImg": "Pencil"
    },
    {
      "skillName":"Rest API",
      "skillImg": "API"
    },
    {
      "skillName":"Test autmation",
      "skillImg": "Test-Animation"
    },
    {
      "skillName":"Databases",
      "skillImg": "Databases"
    }
  ]

}
