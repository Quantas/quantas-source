import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Projects</h1>
    <div fxLayout="row wrap" fxLayoutGap="0.5rem" fxLayout.lt-md="column">
      <mat-card *ngFor="let project of projects" fxFlex="49">
        <mat-card-header>
          <mat-card-title>{{ project.heading}}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>{{ project.description }}</p>
        </mat-card-content>
        <mat-card-actions>
          <a *ngIf="project.link" mat-button target="_blank" [href]="project.link">Link</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      mat-card {
        margin-bottom: 0.5rem;
      }
    `
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    { heading: 'GitShark', description: 'Test, Test, Test', link: 'https://github.com/Quantas/gitshark' },
    { heading: 'GitShark', description: 'Test, Test, Test', link: 'https://github.com/Quantas/gitshark' },
    { heading: 'GitShark', description: 'Test, Test, Test' },
    { heading: 'GitShark', description: 'Test, Test, Test', link: 'https://github.com/Quantas/gitshark' },
    { heading: 'GitShark', description: 'Test, Test, Test', link: 'https://github.com/Quantas/gitshark' },
    { heading: 'GitShark', description: 'Test, Test, Test', link: 'https://github.com/Quantas/gitshark' },
    { heading: 'GitShark', description: 'Test, Test, Test', link: 'https://github.com/Quantas/gitshark' }
  ];
}

export class Project {
  heading: string;
  description: string;
  link?: string;
}
