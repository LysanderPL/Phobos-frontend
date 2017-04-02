/**
 * Created by maciej on 19.03.17.
 */
import {Component, OnInit} from "@angular/core";
import {PlanetEntity} from "../library/entities/planet.entity";
import {PlanetService} from "../services/planet.service";
@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html',
    providers: [PlanetService]
})
export class OverviewComponent implements OnInit {
    private planet: PlanetEntity = new PlanetEntity();
    private isLoading: boolean = true;

    constructor(private planetService: PlanetService) {
    }

    ngOnInit(): void {
        this.planetService.requestPlanetData().subscribe((val: Object) => {
            this.planet = this.planet.fromJSON(val);
            this.isLoading = false;
        });
    }

    private getTypeOfBarInformation(value: number): string {
        let information: string;
        if (value >= 85) {
            information = 'success';
        } else if (value >= 65) {
            information = 'info'
        } else if (value >= 35) {
            information = 'warning'
        } else {
            information = 'danger';
        }

        return information;
    }
}