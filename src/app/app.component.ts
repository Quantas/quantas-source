import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="header" color="primary">
      <button mat-icon-button (click)="sidenav.toggle()" fxShow fxHide.gt-sm="true">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="title">Andrew Landsverk</span>
      <span fxShow fxHide.lt-md="true">
        <a mat-button [routerLink]="['projects']">Projects</a>
        <a mat-button [routerLink]="['contact']">Contact</a>
      </span>
      <span class="toolbar-filler"></span>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav #sidenav [mode]="'over'" [(opened)]="opened" class="bottom-to-top">
        <mat-nav-list (click)="closeSidebar()">
          <a mat-list-item [routerLink]="['projects']">Projects</a>
          <a mat-list-item [routerLink]="['contact']">Contact</a>
        </mat-nav-list>
      </mat-sidenav>
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
export class AppComponent {
  opened = false;

  closeSidebar(): void {
    this.opened = false;
  }
}
