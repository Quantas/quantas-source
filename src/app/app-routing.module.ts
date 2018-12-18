import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },

  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
