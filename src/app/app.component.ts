import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="header" color="primary">
      <span class="title">Andrew Landsverk</span>
      <button mat-button [routerLink]="['home']">Home</button>
      <button mat-button [routerLink]="['projects']">Projects</button>
      <button mat-button [routerLink]="['contact']">Contact</button>
      <span class="toolbar-filler"></span>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav-content>
        <div class="wrapper">
          <div class="main">
            <router-outlet></router-outlet>
          </div>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
    <mat-toolbar class="footer" color="primary">
      &copy; 2018 Andrew Landsverk
    </mat-toolbar>
  `,
  styles: [
    `
      .wrapper {
        margin: 1rem 2rem 2rem 2rem;
        min-height: calc(100vh - 9rem);
      }

      .header {
        font-family: Roboto,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
      }

      .title {
        margin-right: 0.5rem;
      }

      .toolbar-filler {
        flex: 1 1 auto;
      }

      .footer {
        font-size: 0.75rem;
        font-weight: normal;
        height: 2rem;
      }
    `
  ]
})
export class AppComponent {}
