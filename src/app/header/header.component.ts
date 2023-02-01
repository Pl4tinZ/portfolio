import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(public languageservice: LanguageService) {}


uncheck() {
  let button = document.querySelector('.menu-button') as HTMLInputElement;
  button.checked = false;
}

}


