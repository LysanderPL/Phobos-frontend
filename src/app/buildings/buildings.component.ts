/**
 * Created by maciej on 20.03.17.
 */
import {Component, OnInit} from "@angular/core";
import {BuildingsService} from "../services/buildings.service";
import {BuildingEntity} from "../library/entities/building.entity";
@Component({
    selector: 'buildings',
    templateUrl: 'buildings.component.html',
    providers: [BuildingsService]
})
export class BuildingsComponent implements OnInit {
    private filter: string = '';
    private buildingsList: Array<BuildingEntity>;
    private isLoading: boolean = true;

    constructor(private buildingsService: BuildingsService) {
    }

    ngOnInit(): void {
        this.buildingsService.requestBuildingsData().subscribe((val: Object) => {
            this.buildingsList = [];
            for (let ct in val) {
                this.buildingsList.push(new BuildingEntity().fromJSON(val[ct]));
            }
            this.isLoading = false;
        });
    }


}