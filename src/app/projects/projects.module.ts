import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: ProjectsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsModule {}
