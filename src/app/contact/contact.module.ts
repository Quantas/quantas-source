import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { MatButtonModule, MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ContactModule {}
