import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-wis';

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    router.events.subscribe(val => {
      if(val instanceof NavigationEnd) {
        this.document.body.classList.add('loading');
        setTimeout(() => {this.document.body.classList.remove('loading')}, 1500);
      }
    })
  }
}
