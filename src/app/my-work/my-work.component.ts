import { Component, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  constructor(public languageservice: LanguageService) { }

  public innerWidth: any;
  projects;
  tool;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.mobileWorkSection();

    if (this.languageservice.chosenLanguage == 'german') {
      this.projects = this.germanProjects;
    } else {
      this.projects = this.englishProjects;
    }

    this.tool = this.projects;
  }

  mobileWorkSection() {
    if (this.innerWidth <= '820') {
      return true
    } else {
      return false
    }
  }

  germanProjects: any = [
    {
      "workTool": "js",
      "image": "assets/img/project1.png",
      "name": "El Pollo Loco",
      "text": "In diesem objektorientierten Jump-and-Run-Spiel müssen die Spieler Hindernisse und Feinde überwinden, um das Ziel zu erreichen.",
      "url": "https://el-pollo-loco.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/El-Pollo-Loco"
    },
    {
      "workTool": "js",
      "image": "assets/img/project2.png",
      "name": "Join",
      "text": "Eine Kanban-Projektmanagement-Web-App. Erstelle Aufgaben, weise Benutzer und Kategorien zu, und änder den Aufgabenstatus einfach per Drag-and-Drop.",
      "url": "https://join.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/Join-me"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project3.png",
      "name": "Portfolio",
      "text": "Meine persönliche Angular-basierte Website",
      "url": "https://portfolio.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/portfolio"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project4.png",
      "name": "Ring of fire",
      "text": "Berühmtes Karten-Online-Spiel, spiele in Echtzeit mit deinen Freunden auf dem Laptop, Tablet oder Smartphone",
      "url": "https://ring-of-fire.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/RingOfFire"
    }
  ];

  englishProjects: any = [
    {
      "workTool": "js",
      "image": "assets/img/project1.png",
      "name": "El Pollo Loco",
      "text": "In this object-oriented jump and run game, players must navigate through obstacles and enemies to reach the end.",
      "url": "https://el-pollo-loco.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/El-Pollo-Loco"
    },
    {
      "workTool": "js",
      "image": "assets/img/project2.png",
      "name": "Join",
      "text": "A Kanban Project Management Web-App. Create tasks, assign users and categories, and change task status by simply using drag-and-drop.",
      "url": "https://join.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/Join-me"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project3.png",
      "name": "Portfolio",
      "text": "My personal Angular based website",
      "url": "https://portfolio.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/portfolio"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project4.png",
      "name": "Ring of fire",
      "text": "Famous card online-game, play in realtime with your friends on Laptop, Tablet or Smartphone",
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

  openProjectInfomation(i) {
    let container = document.getElementById(`project${i}`);
    container.classList.remove('d-none');
    container.classList.add('slide-in-out');
    setTimeout(() => {
      container.classList.add('d-none');
    }, 3000)
  }


}