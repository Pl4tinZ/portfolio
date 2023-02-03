import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  chosenLanguage = '';

  languageEnglish() {
    this.chosenLanguage = 'english';
  }

  languageGerman() {
    this.chosenLanguage = 'german';
  }
}
