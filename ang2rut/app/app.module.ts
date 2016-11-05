import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavbarComponent }   from './Components/navbar/navbar.component';
import { JumbotronComponent }   from './Components/jumbotron/jumbotron.component';
import { AboutComponent }   from './Components/pages/about.component';
import { HomeComponent }   from './Components/pages/home.component';
import {routing} from './app.routing';

@NgModule({
    imports:      [ BrowserModule,routing ],
    declarations: [ AppComponent ,NavbarComponent,JumbotronComponent,HomeComponent,AboutComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }