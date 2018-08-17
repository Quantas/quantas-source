import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Contact</h1>
    <p>I can be reached via the following sites:</p>
    <mat-list role="list">
      <mat-list-item role="listitem"><a mat-button target="_blank" href="https://www.linkedin.com/in/andrew-landsverk-12a2b121/">LinkedIn</a></mat-list-item>
      <mat-list-item role="listitem"><a mat-button target="_blank" href="https://github.com/Quantas">GitHub</a></mat-list-item>
    </mat-list>
  `
})
export class ContactComponent {}
