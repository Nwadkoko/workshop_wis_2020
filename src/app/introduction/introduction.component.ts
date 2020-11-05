import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  id: string = '';
  color: string = '';

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.document.body.classList.add('introduction');
    this.id = this.route.snapshot.paramMap.get('id');
    switch (this.id) {
      case '1':
        this.document.getElementById('main-introduction').classList.add('primaire');
        this.document.body.classList.add('primaire');
        break;
      case '2':
        this.document.getElementById('main-introduction').classList.add('college');
        this.document.body.classList.add('college');
        break;
      case '3':
        this.document.getElementById('main-introduction').classList.add('lycee');
        this.document.body.classList.add('lycee');
        break;
      default:
        break;
    }
  }
}
