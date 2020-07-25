import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* Estos dos métodos se encargan de hacer el efecto smooth scroll */

  smoothScroll(idName: string) {
    document.getElementById(idName).scrollIntoView({behavior: 'smooth'});
  }
}
