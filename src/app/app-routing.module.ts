import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantomeDetailComponent } from './fantome/fantome-detail/fantome-detail.component';
import { FantomesListComponent } from './fantome/fantomes-list/fantomes-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'fantomes', pathMatch: 'full' },
  { path: 'fantomes', component: FantomesListComponent },
  { path: 'fantomes/:id', component: FantomeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
