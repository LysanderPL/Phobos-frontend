import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, Subject} from "rxjs";
import {Resources} from "../library/entities/resources";
/**
 * Created by maciej on 21.03.17.
 */

@Injectable()
export class ResourcesService {

    private resources: Resources = new Resources(0, 0, 0, 0);
    private subject: Subject<Resources> = new Subject<Resources>();

    private uraniumIncome: number;
    private ferrumIncome: number;
    private siliconIncome: number;
    private heliumIncome: number;

    constructor(private http: Http) {
        this.getResourceDataFromServer();
        this.setUpSynchronizingWithServer();
    }

    public getResourcesSubject(): Subject<Resources> {
        return this.subject;
    }

    public getResourcesEntity(): Resources {
        return this.resources;
    }

    private setUpSynchronizingWithServer(): void {
        setInterval(() => {
            this.getResourceDataFromServer();
        }, 15000);
    }

    private requestResourcesData(): Observable<Response> {
        return this.http.get('assets/mocks/api-planet-resources.json').map(res => res.json());
    }

    private getResourceDataFromServer(): void {
        this.requestResourcesData().subscribe(val => {
            this.resources = new Resources(val['uranium'], val['ferrum'], val['silicon'], val['helium']);

            this.uraniumIncome = val['uraniumIncome'];
            this.ferrumIncome = val['ferrumIncome'];
            this.siliconIncome = val['siliconIncome'];
            this.heliumIncome = val['heliumIncome'];

            this.subject.next(this.resources);
            console.log(val)
        });

    }
}