import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantomesListComponent } from './fantome/fantomes-list/fantomes-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'fantomes', pathMatch: 'full' },
  { path: 'fantomes', component: FantomesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
