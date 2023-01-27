import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

uncheck() {
  let button = document.querySelector('.menu-button') as HTMLInputElement;
  button.checked = false;
}

}


