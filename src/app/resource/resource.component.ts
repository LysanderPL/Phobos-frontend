/**
 * Created by maciej on 19.03.17.
 */
import {Component, OnInit} from "@angular/core";
import {ResourcesService} from "../services/resources.service";
import {Resources} from "../library/entities/resources";
@Component({
    selector: 'resource-bar',
    templateUrl: 'resource.component.html'
})
export class ResourceComponent implements OnInit {

    private resources: Resources;

    constructor(private resourcesService: ResourcesService) {
    }

    ngOnInit(): void {
        this.resources = this.resourcesService.getResourcesEntity();
        this.resourcesService.getResourcesSubject().subscribe((res: Resources) => this.resources = res);
    }

}