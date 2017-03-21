/**
 * Created by maciej on 19.03.17.
 */
import {Component, OnInit} from "@angular/core";
import {ResourcesService} from "../services/resources.service";
import {Observable} from "rxjs";
@Component({
    selector: 'resource-bar',
    templateUrl: 'resource.component.html',
    providers: [ResourcesService]
})
export class ResourceComponent implements OnInit {

    private uranium: number = 0;
    private ferrum: number = 0;
    private silicon: number = 0;
    private helium: number = 0;

    private Credits: number = 0;
    private _planetData;

    constructor(private resourcesService: ResourcesService) {
    }

    ngOnInit(): void {
        this.resourcesService.requestResourcesData().subscribe(val => {
            this.ferrum = val['ferrum'];
            this.silicon = val['silicon'];
            this.helium = val['helium'];
            this.uranium = val['uranium'];
            console.log(val)
        });
        setInterval(() => {
            this.ferrum = this.ferrum+100;
            console.log(this.ferrum);
        }, 1000);
    }

}