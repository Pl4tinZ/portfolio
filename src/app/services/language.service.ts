import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  chosenLanguage = '';

  languageEnglish() {
    this.chosenLanguage = 'english';
    console.log(this.chosenLanguage);
  }

  languageGerman() {
    this.chosenLanguage = 'german';
    console.log(this.chosenLanguage);
  }
}
