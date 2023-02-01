import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  constructor(public languageservice: LanguageService) {}

  projects: any = [
    {
      "workTool": "js",
      "image": "assets/img/project1.png",
      "name": "El Pollo Loco",
      "text": "JavaScript Jump and Run Spiel",
      "url": "https://el-pollo-loco.frese.one",
      "urlGithub": "######"
    },
    {
      "workTool": "js",
      "image": "assets/img/project2.png",
      "name": "Join",
      "text": "JavaScript - Kanbanboard",
      "url": "https://join.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/Join-me"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project3.png",
      "name": "Portfolio",
      "text": "Dies ist ein Angular-Projekt",
      "url": "https://portfolio.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/portfolio"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project4.png",
      "name": "Ring of fire",
      "text": "Dies ist ein Angular-Projekt",
      "url": "https://ring-of-fire.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/RingOfFire"
    }
  ];


  tool: any = [
    {
      "workTool": "js",
      "image": "assets/img/project1.png",
      "name": "El Pollo Loco",
      "text": "JavaScript Jump and Run Spiel",
      "url": "https://el-pollo-loco.frese.one",
      "urlGithub": "######"
    },
    {
      "workTool": "js",
      "image": "assets/img/project2.png",
      "name": "Join",
      "text": "JavaScript - Kanbanboard",
      "url": "https://join.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/Join-me"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project3.png",
      "name": "Portfolio",
      "text": "Dies ist ein Angular-Projekt",
      "url": "https://portfolio.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/portfolio"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project4.png",
      "name": "Ring of fire",
      "text": "Dies ist ein Angular-Projekt",
      "url": "https://ring-of-fire.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/RingOfFire"
    }
];


  allButton = true;
  jsButton = false;
  angularButton = false;

  filterAll() {
    this.tool = []
    this.tool = this.projects;
    
    this.jsButton = false;
    this.allButton = true;
    this.angularButton = false;
  }

  filterAngular() {
    this.tool = []
    this.tool = this.projects.filter((item: any) => item.workTool == "angular");
    
    this.jsButton = false;
    this.allButton = false;
    this.angularButton = true;
  }

  filterJavaScript() {
    this.tool = []

    this.tool = this.projects.filter((item: any) => item.workTool == "js");

    this.jsButton = true;
    this.allButton = false;
    this.angularButton = false;
  }

}
