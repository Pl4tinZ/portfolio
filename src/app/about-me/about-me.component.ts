import { Component, ElementRef} from '@angular/core';
import { LanguageService } from '../services/language.service';

declare var IntersectionObserver: {
  prototype: IntersectionObserver;
  new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  private chars: string = '!<>-_\\/[]{}—=+*^?#________';
  private frame: number = 0;
  private queues: any[] = [];
  private frameRequests: number[] = [];
  private resolves: Function[] = [];

  constructor(public languageservice: LanguageService, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.languageservice.checkSession();
  }

  ngAfterViewInit(): void {
    const elements = this.elRef.nativeElement.querySelectorAll('.scramble');
    elements.forEach((element, index) => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          this.startScramble(element, index).then(() => {
          });
          observer.disconnect();
        }
      });
  
      observer.observe(element);
    });
  }

  startScramble(element: HTMLElement, index: number): Promise<void> {
    return new Promise(resolve => {
      const oldText = element.innerText;
      const length = oldText.length;
  
      this.resolves[index] = resolve;
      this.frame = 0;
      this.queues[index] = [];
      this.queueChars(oldText, index);
  
      this.update(index);
    });
  }

  queueChars(text: string, index: number): void {
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const end = this.frame + Math.floor(Math.random() * 200);
      this.queues[index].push({ char, end });
    }
  }

  update(index: number): void {
    let output = '';
    let complete = 0;
  
    for (let i = 0, n = this.queues[index].length; i < n; i++) {
      const { char, end } = this.queues[index][i];
  
      if (this.frame >= end) {
        complete++;
        output += char;
      } else {
        output += this.randomChar();
      }
    }
  
    this.elRef.nativeElement.querySelectorAll('.scramble')[index].innerText = output;
  
    if (complete === this.queues[index].length) {
      this.resolves[index]();
    } else {
      this.frameRequests[index] = requestAnimationFrame(() => this.update(index));
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}