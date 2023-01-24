import { Component } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  welcome = true;
  textInArray = [];
  index1 = 0;
  index2 = 0;
  index3 = 0;
  interval1;
  interval2;
  interval3;
  text1 = "Hi,";
  text2 = "I'm Dennis Frese";
  text3 = "Front End developer";
  // text1 = ["H", "i", ","];
  // text2 = ["I", "'", "m", " ", "D", "e", "n", "n", "i", "s", " ", "F", "r", "e", "s", "e"];
  // text3 = ["F", "r", "o", "n", "t", " ", "E", "n", "d", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

  ngOnInit() {
    this.showWelcomeText1();


  }

  showWelcomeText1() {
    for (let i = 0; i < this.text1.length; i++) {
      this.textInArray.push(this.text1.charAt(i));
    }

    this.interval1 = setInterval(() => {
      document.getElementById('text1').innerHTML += this.text1[this.index1++ % this.text1.length];
      if(this.index1 == this.text1.length){
        clearInterval(this.interval1);
        this.textInArray = [];
        this.showWelcomeText2();
      }
    }, 100);
  }

  showWelcomeText2() {
    for (let i = 0; i < this.text2.length; i++) {
      this.textInArray.push(this.text2.charAt(i));
    }

    this.interval2 = setInterval(() => {
      document.getElementById('text2').innerHTML += this.text2[this.index2++ % this.text2.length];
      if(this.index2 == this.text2.length){
        clearInterval(this.interval2);
        this.textInArray = [];
        this.showWelcomeText3();
      }
    }, 100);
  }

  showWelcomeText3() {
    for (let i = 0; i < this.text3.length; i++) {
      this.textInArray.push(this.text3.charAt(i));
    }

    this.interval3 = setInterval(() => {
      document.getElementById('text3').innerHTML += this.text3[this.index3++ % this.text3.length];
      if(this.index3 == this.text3.length){
        clearInterval(this.interval3);
        this.welcome = false;
      }
    }, 100);
  }


}
