/**
 * Created by maciej on 19.03.17.
 */
import {Component, OnInit} from "@angular/core";
import {ResourcesService} from "../services/resources.service";
import {ResourcesEntity} from "../library/entities/resources.entity";
@Component({
    selector: 'resource-bar',
    templateUrl: 'resource.component.html'
})
export class ResourceComponent implements OnInit {

    private resources: ResourcesEntity;

    constructor(private resourcesService: ResourcesService) {
    }

    ngOnInit(): void {
        this.resources = this.resourcesService.getResourcesEntity();
        this.resourcesService.getResourcesSubject().subscribe((res: ResourcesEntity) => this.resources = res);
    }

}