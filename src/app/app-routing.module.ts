/**
 * Created by maciej on 19.03.17.
 */
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {OverviewComponent} from "./overview/overview.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./not-found.component";
import {BuildingsComponent} from "./buildings/buildings.component";
import {GroundDefenseComponent} from "./ground-defense/ground-defense.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'buildings',
        component: BuildingsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'ground-defense',
        component: GroundDefenseComponent
    },
    {path: '**', component: NotFoundComponent}
    // { path: 'home',   component: LoginComponent, canActivate: [AuthGuard] },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {
}