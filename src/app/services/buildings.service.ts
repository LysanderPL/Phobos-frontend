/**
 * Created by maciej on 01.04.17.
 */
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";

@Injectable()
export class BuildingsService extends ApiService{

    public requestBuildingsData(): Observable<Response> {
        return this.http.get('assets/mocks/api-buildings.json').map(res => res.json());
    }
}