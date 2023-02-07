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

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.mobileWorkSection();
  }

  mobileWorkSection() {
    if (this.innerWidth <= '820') {
      return true
    } else {
      return false
    }
  }

  projects: any = [
    {
      "workTool": "js",
      "image": "assets/img/project1.png",
      "name": "El Pollo Loco",
      "text": "JavaScript jump and run game",
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
      "text": "Angular based homepage",
      "url": "https://portfolio.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/portfolio"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project4.png",
      "name": "Ring of fire",
      "text": "Angular based card game",
      "url": "https://ring-of-fire.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/RingOfFire"
    }
  ];


  tool: any = [
    {
      "workTool": "js",
      "image": "assets/img/project1.png",
      "name": "El Pollo Loco",
      "text": "JavaScript jump and run game",
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
      "text": "Angular based homepage",
      "url": "https://portfolio.frese.one",
      "urlGithub": "https://github.com/Pl4tinZ/portfolio"
    },
    {
      "workTool": "angular",
      "image": "assets/img/project4.png",
      "name": "Ring of fire",
      "text": "Angular based card game",
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