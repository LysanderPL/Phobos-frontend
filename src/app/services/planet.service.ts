/**
 * Created by maciej on 20.03.17.
 */
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PlanetService {

    constructor(private http: Http) {
    }

    public requestPlanetData(): Observable<Response> {
        return this.http.get('assets/mocks/api-planet.json').map(res => res.json());
    }
}