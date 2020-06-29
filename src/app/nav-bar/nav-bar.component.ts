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

  goAbout() {
    document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
  }

  goMyWorks() {
    document.getElementById('my-works').scrollIntoView({behavior: 'smooth'});
  }
}
