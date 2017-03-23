/**
 * Created by maciej on 19.03.17.
 */
import {Component, OnInit} from "@angular/core";
import {Planet} from "../library/entities/planet";
import {PlanetService} from "../services/planet.service";
@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html',
    providers: [PlanetService]
})
export class OverviewComponent implements OnInit {
    private planet: Planet = new Planet();

    constructor(private planetService: PlanetService) {
    }

    ngOnInit(): void {
        this.planetService.requestPlanetData().subscribe(val => {
            this.planet.name = val['name'];
            this.planet.imperialSystem = val['imperialSystem'];
            this.planet.planetarySystem = val['planetarySystem'];
            this.planet.race = val['race'];
            this.planet.climate = val['climate'];
            this.planet.groundControl = val['groundControl'];
            this.planet.orbitalControl = val['orbitalControl'];
            this.planet.planetarySupport = val['planetarySupport'];
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