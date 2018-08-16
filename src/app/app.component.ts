import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="header" color="primary">
      <button mat-icon-button (click)="sidenav.toggle()" fxShow.sm="true" fxShow.gt-sm="false">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Andrew Landsverk</span>
      <span class="toolbar-filler"></span>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav #sidenav [(mode)]="over" [(opened)]="opened" class="bottom-to-top">
        <mat-nav-list>
          <a mat-list-item [routerLink]="['home']">Home</a>
          <a mat-list-item [routerLink]="['projects']">Projects</a>
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
        min-height: 10rem;
      }

      .header {
        font-family: Roboto,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
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
export class AppComponent implements OnDestroy {

  destroy = new Subject<boolean>();
  opened = false;
  over: string;

  constructor(private media: ObservableMedia) {
    media.asObservable().takeUntil(this.destroy).subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}

