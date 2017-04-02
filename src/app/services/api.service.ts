/**
 * Created by maciej on 02.04.17.
 */
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
@Injectable()
export abstract class ApiService {
    constructor(protected http: Http) {
    }
}