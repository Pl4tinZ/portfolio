import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  welcome = true;
  index = 0;
  interval;
  text = '';
  text1 = '';
  text2 = '';
  text3 = '';
  textTemplate;
  textTemplate1 = "Hi,";
  textTemplate2 = "I'm Dennis Frese";
  textTemplate3 = "Front End developer";


  ngOnInit() {
    this.showWelcomeText1();
  }

  clearAll() {
const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
for (let i = 1; i < interval_id; i++) {
  window.clearInterval(i);
}
  }

showWelcomeText() {
    this.interval = setInterval(() => {
      this.text += this.textTemplate[this.index++ % this.textTemplate.length];
      this.generateText();
      this.checkTextPosition();
    }, 70);
  }

generateText() {
  if (this.text1.length !== this.textTemplate1.length) {
    this.text1 = this.text;
  } else if (this.text2.length !== this.textTemplate2.length) {
    this.text2 = this.text;
  } else {
    this.text3 = this.text;
  }
}

stopInterval() {
    clearInterval(this.interval);
}

checkTextPosition() {
  if(this.index == this.textTemplate.length){
    clearInterval(this.interval);
    this.text = '';
    if (this.text1.length == this.textTemplate1.length) {
      this.showWelcomeText2();
    }
    if (this.text2.length == this.textTemplate2.length) {
      this.showWelcomeText3();
    }
    if (this.text3.length == this.textTemplate3.length) {
      this.welcome = false
      this.clearAll();
    }
  }
}
  
  showWelcomeText1() {
    this.index = 0
    this.textTemplate = this.textTemplate1;
    this.showWelcomeText();
  }
  
  showWelcomeText2() {
    this.index = 0
    this.textTemplate = this.textTemplate2;
    this.showWelcomeText();
  }
  
  showWelcomeText3() {
    this.index = 0
    this.textTemplate = this.textTemplate3;
    this.showWelcomeText();
    clearInterval(this.interval); // stable speed
  }



}












    // showWelcomeText1() {

  //   this.interval1 = setInterval(() => {
  //     document.getElementById('text1').innerHTML += this.text1[this.index1++ % this.text1.length];
  //     if(this.index1 == this.text1.length){
  //       clearInterval(this.interval1);
  //       this.showWelcomeText2();
  //     }
  //   }, 100);
  // }

  // showWelcomeText2() {

  //   this.interval2 = setInterval(() => {
  //     document.getElementById('text2').innerHTML += this.text2[this.index2++ % this.text2.length];
  //     if(this.index2 == this.text2.length){
  //       clearInterval(this.interval2);
  //       this.showWelcomeText3();
  //     }
  //   }, 100);
  // }

  // showWelcomeText3() {

  //   this.interval3 = setInterval(() => {
  //     document.getElementById('text3').innerHTML += this.text3[this.index3++ % this.text3.length];
  //     if(this.index3 == this.text3.length){
  //       clearInterval(this.interval3);
  //       this.welcome = false;
  //     }
  //   }, 100);
  // }