import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  german = false;
  english = false

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
