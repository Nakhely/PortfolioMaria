import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  private submissionForm: AngularFirestoreCollection<any>;

  constructor( private firestore: AngularFirestore ) { }

  submitting = false;
  submitted = false;

  ngOnInit(): void {
    this.submissionForm = this.firestore.collection('submissions');
  }

  sendMessage( data: NgForm ): void {

    if (data.invalid) {
      Object.values( data.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
      console.log(data);
      console.log(this.submitted);

      this.submitting = true;
      this.submissionForm.add(data).then(res => {
        this.submitted = true;
      }).catch(err => console.log(err)
      ).finally(() => {
        this.submitting = false;
      });

    }

  }

}
