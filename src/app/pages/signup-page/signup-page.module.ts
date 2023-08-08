import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page.component';

const routes:Routes = [
  {path:'',component:SignupPageComponent}
]

@NgModule({
  declarations: [SignupPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupPageModule { }
