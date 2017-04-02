import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, Subject} from "rxjs";
import {ResourcesEntity} from "../library/entities/resources.entity";
import {ApiService} from "./api.service";
import {StaticValues} from "../library/static.values";
/**
 * Created by maciej on 21.03.17.
 */

@Injectable()
export class ResourcesService extends ApiService {

    private resources: ResourcesEntity = new ResourcesEntity();
    private subject: Subject<ResourcesEntity> = new Subject<ResourcesEntity>();

    constructor(protected http: Http) {
        super(http);
        this.getResourceDataFromServer();
        this.setUpSynchronizingWithServer();
    }

    public getResourcesSubject(): Subject<ResourcesEntity> {
        return this.subject;
    }

    public getResourcesEntity(): ResourcesEntity {
        return this.resources;
    }

    private setUpSynchronizingWithServer(): void {
        setInterval(() => {
            this.getResourceDataFromServer();
        }, StaticValues.timeInterval);
    }

    private requestResourcesData(): Observable<Response> {
        return this.http.get('assets/mocks/api-planet-resources.json').map(res => res.json());
    }

    private getResourceDataFromServer(): void {
        this.requestResourcesData().subscribe((val: Object) => {
            this.resources = this.resources.fromJSON(val);
            this.subject.next(this.resources);
        });

    }
}