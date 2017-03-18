/**
 * Created by maciej on 18.03.17.
 */
import { Routes } from '@angular/router';
// import { Home } from './home';
import {AppComponent} from "./app.component";

export const routes: Routes = [
    { path: '',       component: AppComponent },
    // { path: 'home',   component: LoginComponent, canActivate: [AuthGuard] },
];