import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { keyboardsComponent } from './components/keyboards/keyboards.component';
import { keyboardComponent } from './components/keyboard/keyboard.component';
import { SearchResultComponent } from './components/searchResult/searchResult.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'keyboards', component: keyboardsComponent },
  { path: 'keyboard/:id', component: keyboardComponent },
  { path: 'search/:searchTerm', component: SearchResultComponent },
  { path: 'keyboard/:id', component: SearchResultComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
