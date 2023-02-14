import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  loggedUser;

  constructor() { }
  chosenLanguage = '';

  languageEnglish() {
    this.chosenLanguage = 'english';
    sessionStorage.setItem('english', this.loggedUser);
  }

  languageGerman() {
    this.chosenLanguage = 'german';
    sessionStorage.setItem('german', this.loggedUser);
  }

  checkSession() {
    if (sessionStorage.getItem('english')) {
      this.chosenLanguage = 'english';
    } else {
      localStorage.removeItem('token')
    }

    if (sessionStorage.getItem('german')) {
      this.chosenLanguage = 'german';
    } else {
      localStorage.removeItem('token')
    }
  }
}
