import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent {

  constructor(public languageservice: LanguageService) {
    
  }

  ngOnInit(): void {
    this.languageservice.checkSession();
  }

}







