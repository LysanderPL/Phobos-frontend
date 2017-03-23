import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Response, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {TopNavbarComponent} from "./navbar/top-navbar.component";
import {SideNavbarComponent} from "./navbar/side-navbar.component";
import {LoginComponent} from "./login/login.component";
import {OverviewComponent} from "./overview/overview.component";
import {NotFoundComponent} from "./not-found.component";
import {AppRoutingModule} from "./app-routing.module";
import {ResourceComponent} from "./resource/resource.component";
import {BuildingsComponent} from "./buildings/buildings.component";
import {PlanetService} from "./services/planet.service";
import {ResourcesService} from "./services/resources.service";
import {BuildingsPipe} from "./library/pipes/buildingsPipe";

@NgModule({
    declarations: [
        AppComponent,
        TopNavbarComponent,
        SideNavbarComponent,
        LoginComponent,
        OverviewComponent,
        NotFoundComponent,
        ResourceComponent,
        BuildingsComponent,
        BuildingsPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ResourcesService],
    bootstrap: [AppComponent, ResourceComponent, TopNavbarComponent, SideNavbarComponent]
})
export class AppModule {
}
