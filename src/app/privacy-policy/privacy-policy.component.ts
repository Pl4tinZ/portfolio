import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  constructor(public languageservice: LanguageService) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

}
