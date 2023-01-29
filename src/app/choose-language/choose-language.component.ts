import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent {
  public german = false;
  public english = false;

  languageEnglish() {
    this.english = true
    document.querySelector('.main-content').classList.remove('d-none');
  }

  languageGerman() {
    this.german = true;
    document.querySelector('.main-content').classList.remove('d-none');
  }


}




