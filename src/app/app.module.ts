import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { TroubleshootingComponent } from './troubleshooting/troubleshooting.component';
import { AboutionicComponent } from './aboutionic/aboutionic.component';
import { CommandlistComponent } from './commandlist/commandlist.component';
import { HomeComponent } from './home/home.component';
import { router, routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    TroubleshootingComponent,
    AboutionicComponent,
    CommandlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
