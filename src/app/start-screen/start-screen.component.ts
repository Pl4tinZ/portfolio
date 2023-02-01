import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  welcome = true;
  index = 0;
  interval;
  text = '';
  text1 = '';
  text2 = '';
  text3 = '';
  textTemplate;
  textTemplate1 = "Hi,";
  textTemplate2 = "I'm Dennis Frese";
  textTemplate3 = "Front End developer";

  constructor(public languageservice: LanguageService) {}

  ngOnInit() {
    this.showWelcomeText1();
  }

  clearAll() {
    const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }

  showWelcomeText() {
    this.interval = setInterval(() => {
      this.text += this.textTemplate[this.index++ % this.textTemplate.length];
      this.generateText();
      this.checkTextPosition();
    }, 70);
  }

  setTextLanguage() {
    if (this.languageservice.chosenLanguage == 'german') {
      this.textTemplate2 = "Ich bin Dennis Frese"
    }
    if (this.languageservice.chosenLanguage == 'german') {
      this.textTemplate3 = "Front End Entwickler"
    }
  }

  generateText() {
    this.setTextLanguage();
    if (this.text1.length !== this.textTemplate1.length) {
      this.text1 = this.text;
    } else if (this.text2.length !== this.textTemplate2.length) {
      this.text2 = this.text;
    } else {
      this.text3 = this.text;
    }
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  checkTextPosition() {
    if (this.index == this.textTemplate.length) {
      clearInterval(this.interval);
      this.text = '';
      if (this.text1.length == this.textTemplate1.length) {
        this.showWelcomeText2();
      }
      if (this.text2.length == this.textTemplate2.length) {
        this.showWelcomeText3();
      }
      if (this.text3.length == this.textTemplate3.length) {
        this.welcome = false
        this.clearAll();
      }
    }
  }

  showWelcomeText1() {
    this.index = 0
    this.textTemplate = this.textTemplate1;
    this.showWelcomeText();
  }

  showWelcomeText2() {
    this.index = 0
    this.textTemplate = this.textTemplate2;
    this.showWelcomeText();
  }

  showWelcomeText3() {
    this.index = 0
    this.textTemplate = this.textTemplate3;
    this.showWelcomeText();
    clearInterval(this.interval); // stable speed
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}