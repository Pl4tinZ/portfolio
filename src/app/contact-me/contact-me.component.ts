import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  constructor(public languageservice: LanguageService) {}

  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('contactButton') contactButton: ElementRef;

  async sendMail() {
    document.getElementById('loading').classList.remove('d-none');

    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let contactButton = this.contactButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    contactButton.disabled = true;

    let formDFata = new FormData();
    formDFata.append('name', nameField.value);
    formDFata.append('email', emailField.value);
    formDFata.append('message', messageField.value);

    await fetch('https://portfolio.frese.one/send_mail.php', {method: 'POST', body: formDFata});

    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    contactButton.disabled = false;
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';

    document.getElementById('loading').classList.add('d-none');
    document.getElementById('success').classList.remove('d-none');

    setTimeout(() => {
      document.getElementById('success').classList.add('d-none');
    },1000)

  }
}
