import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FantomesListComponent } from './fantomes-list/fantomes-list.component';
import { FormsModule } from '@angular/forms';
import { FantomeDetailComponent } from './fantome-detail/fantome-detail.component';


@NgModule({
  declarations: [
    FantomesListComponent,
    FantomeDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FantomeModule { }
