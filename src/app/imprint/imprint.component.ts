import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  constructor(public languageservice: LanguageService) { }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

}
