import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [ RouterModule.forChild([
    { path: '', component: ProjectsComponent}
  ])],
  exports: [RouterModule]
})
export class ProjectsModule {}
