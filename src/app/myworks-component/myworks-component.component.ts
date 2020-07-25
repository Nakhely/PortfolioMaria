import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-myworks-component',
  templateUrl: './myworks-component.component.html',
  styleUrls: ['./myworks-component.component.css']
})
export class MyworksComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '.title, .description',
      opacity: [0, 1],
      duration: 800,
      delay: 500,
      easing: 'linear'
    });
  }

}
