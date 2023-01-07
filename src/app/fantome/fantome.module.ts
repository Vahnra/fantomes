import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FantomesListComponent } from './fantomes-list/fantomes-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FantomesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FantomeModule { }
