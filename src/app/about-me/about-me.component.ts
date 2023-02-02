import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(public languageservice: LanguageService) {}

}
