import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '.photo-container, .text-container',
      opacity: [0, 1],
      duration: 800,
      delay: 500,
      easing: 'linear'
    });

    anime({
      targets: '.background-photo',
      opacity: [0, 1],
      duration: 800,
      delay: 800,
      easing: 'linear'
    });

    anime({
      targets: '.photo-container, .text-container',
      translateY: [-80, 1],
      duration: 1000,
      easing: 'linear'
    });
  }
}
