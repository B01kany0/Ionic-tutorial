import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component'
import { TroubleshootingComponent } from './troubleshooting/troubleshooting.component';
import { AboutionicComponent } from './aboutionic/aboutionic.component';
import { CommandlistComponent } from './commandlist/commandlist.component';
import { HomeComponent } from './home/home.component';


export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'installation', component: InstallationComponent },
    { path: 'troubleshooting', component: TroubleshootingComponent},
    { path: 'commandlist', component: CommandlistComponent}, 
    { path: 'home', component: HomeComponent},
    { path: 'aboutionic', component: AboutionicComponent},


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);