import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent {

  constructor(public languageservice: LanguageService) {}

  de = this.languageservice.german;
  en = this.languageservice.english;

  german = false;
  english = false;

  languageEnglish() {
    this.english = true
    console.log(this.english);
    // document.querySelector('.choose-language-container').classList.add('d-none');
  }

  languageGerman() {
    this.german = true;
    console.log(this.german);
    // document.querySelector('.choose-language-container').classList.add('d-none');
  }


}







