import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantomeDetailComponent } from './fantome/fantome-detail/fantome-detail.component';
import { FantomesListComponent } from './fantome/fantomes-list/fantomes-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'fantomes', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fantomes', component: FantomesListComponent },
  { path: 'fantomes/:id', component: FantomeDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
