import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Contact</h1>
    <p>I can be reached via the following sites:</p>
    <mat-list role="list">
      <mat-list-item *ngFor="let site of sites" role="listitem">
        <a mat-button target="_blank" [href]="site.href">{{ site.title }}</a>
      </mat-list-item>
    </mat-list>
  `
})
export class ContactComponent {
  sites: Site[] = [
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-landsverk-12a2b121/' },
    { title: 'GitHub', href: 'https://github.com/Quantas' }
  ];
}

export class Site {
  title: string;
  href: string;
}
