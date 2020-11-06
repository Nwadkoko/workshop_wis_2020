import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TimelineLite } from 'gsap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'workshop-wis';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.document.body.classList.add('loading');
        setTimeout(() => {
          this.document.body.classList.remove('loading');
        }, 1500);
      }
    });
  }

  ngAfterViewInit(): void {}
}
