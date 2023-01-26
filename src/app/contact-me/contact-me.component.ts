import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('contactButton') contactButton: ElementRef;

  async sendMail() {
    console.log(this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let contactButton = this.contactButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    contactButton.disabled = true;
    // Animation anzeigen das gerade gesendet wird
    let formDFata = new FormData();
    formDFata.append('name', nameField.value);
    formDFata.append('email', emailField.value);
    formDFata.append('message', messageField.value);

    await fetch('HIER KOMMT DIE URL VON DER PHP DATEI REON DIE AUF DEM SERVER LIEGT', {method: 'POST', body: formDFata});

    // Animation Nachricht gesendet

    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    contactButton.disabled = false;
  }
}
