import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage( data: NgForm ): void {

    if (data.invalid) {
      Object.values( data.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
      console.log(data);

    }

  }

}
