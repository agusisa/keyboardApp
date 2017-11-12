import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

//rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import {keyboardsService} from './servicios/keyboards.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { keyboardsComponent } from './components/keyboards/keyboards.component';
import { keyboardComponent } from './components/keyboard/keyboard.component';
import { SearchResultComponent } from './components/searchResult/searchResult.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    keyboardsComponent,
    keyboardComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    keyboardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
