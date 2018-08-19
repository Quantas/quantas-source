import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Projects</h1>
    <div fxLayout="row wrap" fxLayoutGap="0.5rem" fxLayout.lt-md="column">
      <mat-card *ngFor="let project of projects" fxFlex="49">
        <mat-card-header>
          <div mat-card-avatar class="mat-card-avatar avatar {{ project.type }}-image"></div>
          <mat-card-title>{{ project.heading}}</mat-card-title>
          <mat-card-subtitle>{{ project.subHeading }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{ project.description }}</p>
        </mat-card-content>
        <mat-card-actions>
          <ng-container *ngFor="let link of project.links">
            <a mat-button target="_blank" [href]="link.href">{{ link.title}}</a>
          </ng-container>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      mat-card {
        margin-bottom: 0.5rem;
      }

      .avatar {
        background-color: white;
      }

      .java-image {
        background-image: url('../../assets/java-logo.png');
        background-size: cover;
      }

      .angular-image {
        background-image: url('../../assets/angular-logo.png');
        background-size: cover;
      }

      .spring-image {
        background-image: url('../../assets/spring-logo.png');
        background-size: cover;
      }
    `
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      heading: 'shark-ng-table',
      subHeading: 'Open Source - Creator',
      type: 'angular',
      description: 'A robust table for Angular built with Accessibility in mind.',
      links: [
        { title: 'GitHub', href: 'https://github.com/Quantas/shark-ng-table' },
        { title: 'Samples', href: 'https://www.quantasnet.com/shark-ng-table' }
      ]
    },
    {
      heading: 'shark-ci-server',
      subHeading: 'Open Source - Creator',
      type: 'spring',
      description: 'A simple, local CI server, running builds in Docker containers',
      links: [
        { title: 'GitHub', href: 'https://github.com/Quantas/shark-ci-server' }
      ]
    },
    {
      heading: 'GitShark',
      subHeading: 'Open Source - Creator',
      type: 'spring',
      description: 'A Java based Git Server solution.',
      links: [
        { title: 'GitHub', href: 'https://github.com/Quantas/gitshark' }
      ]
    },
    {
      heading: 'QLAN',
      subHeading: 'Open Source - Creator',
      type: 'spring',
      description: 'Quantasnet LAN Party Software ',
      links: [
        { title: 'GitHub', href: 'https://github.com/Quantas/QLAN' }
      ]
    },
    {
      heading: 'www.quantasnet.com',
      subHeading: 'Open Source - Creator',
      type: 'angular',
      description: 'The Angular source code for this website. This site is automatically built on TravisCI and deployed to GitHub Pages.',
      links: [
        { title: 'GitHub', href: 'https://github.com/Quantas/quantas-source' },
        { title: 'TravisCI', href: 'https://travis-ci.org/Quantas/quantas-source' }
      ]
    },

    {
      heading: 'dbUnit',
      subHeading: 'Open Source - Contributor',
      type: 'java',
      description: 'dbUnit is a JUnit extension targeted for database-driven projects that, among other things, puts your database into a known state between test runs.',
      links: [
        { title: 'SourceForge', href: 'https://sourceforge.net/projects/dbunit/' }
      ]
    },
    {
      heading: 'Spring Boot',
      subHeading: 'Open Source - Contributor',
      type: 'spring',
      description: 'Contributed a Pull Request to prevent Spring Boot restart when certain metadata files changed.',
      links: [
        { title: 'GitHub', href: 'https://github.com/spring-projects/spring-boot' },
        { title: 'PR Link', href: 'https://github.com/spring-projects/spring-boot/commit/dc7d17091a00f3b1aa8626fdb4399d0b0d9f296c' }
      ]
    },

    {
      heading: 'JTCS',
      subHeading: 'Proprietary',
      type: 'java',
      description: 'A Java-based time clock system. Included a database-driven configuration server and modular system for enabling and disabling features.'
    },
    {
      heading: 'MPOS',
      subHeading: 'Proprietary',
      type: 'java',
      description: 'A Java-based point of sale system.'
    },
    {
      heading: 'Portfolio Navigator',
      subHeading: 'Proprietary',
      type: 'spring',
      description: 'System which allowed schools to upload their data, determine delinquency status, and communicate with borrowers.'
    },
    {
      heading: 'Access Hub',
      subHeading: 'Proprietary',
      type: 'angular',
      description: 'User customizable dashboard that provided interactive widgets and links to various systems. This application served as an entry point for internal users.'
    },
    {
      heading: 'Nelnet Planning',
      subHeading: 'Proprietary',
      type: 'angular',
      description: 'A sprint planning application with various different types of voting: Fist of Five, Story Points, Yes/No. The front end is Angular and the back end is Spring with WebSockets. The application is deployed to AWS Elastic Beanstalk. This application was developed in collaboration with Byron Holldorf.',
      links: [
        { title: 'Nelnet Planning', href: 'http://fist-of-five.us-east-1.elasticbeanstalk.com' }
      ]
    }
  ];
}

export class Link {
  title: string;
  href: string;
}

export class Project {
  heading: string;
  subHeading: string;
  type: string;
  description: string;
  links?: Link[];
}
