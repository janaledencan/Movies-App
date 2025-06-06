import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: 'user/signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'favourites',
    component: FavouritesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'movie/:id',
    component: DetailsPageComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
