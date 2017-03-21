import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
/**
 * Created by maciej on 21.03.17.
 */

@Injectable()
export class ResourcesService {

    constructor(private http: Http) {
    }

    requestResourcesData(): Observable<Response> {
        return this.http.get('assets/mocks/api-planet-resources.json').map(res => res.json());
    }

}